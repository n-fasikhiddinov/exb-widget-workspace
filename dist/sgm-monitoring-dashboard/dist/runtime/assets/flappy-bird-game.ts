import { React } from "jimu-core"

export type FlappyCellType = "empty" | "bird" | "pipe" | "pipeTop" | "pipeBottom"

export type FlappyCell = {
    row: number
    col: number
    type: FlappyCellType
}

type FlappyPipe = {
    col: number
    gapStart: number
    gapSize: number
}

type FlappyBirdState = {
    birdRow: number
    velocity: number
    pipes: FlappyPipe[]
    tick: number
    score: number
}

type UseFlappyBirdGameOptions<T extends HTMLElement> = {
    rootRef: React.RefObject<T | null>
    rows?: number
    cols?: number
    startShortcut?: string
    tickMs?: number
    enabled?: boolean
    pipeDistance?: number
    gapSize?: number
}

type UseFlappyBirdGameResult = {
    isPlaying: boolean
    cells: FlappyCell[]
    score: number
    highScore: number
    startGame: () => void
    stopGame: () => void
}

const DEFAULT_ROWS = 7
const DEFAULT_COLS = 24
const DEFAULT_TICK_MS = 140
const DEFAULT_PIPE_DISTANCE = 7
const DEFAULT_GAP_SIZE = 3
const START_SHORTCUT = "ctrl+shift+2"
const FLAPPY_HIGH_SCORE_KEY = "sgm_dashboard_flappy_high_score"
const GRAVITY = 0.42
const FLAP_POWER = -1.35
const MAX_VELOCITY = 1.45

function clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value))
}

function createPipe(col: number, rows: number, gapSize: number): FlappyPipe {
    const safeGap = clamp(gapSize, 2, Math.max(2, rows - 2))
    const maxStart = Math.max(0, rows - safeGap)
    const gapStart = Math.floor(Math.random() * (maxStart + 1))

    return {
        col,
        gapStart,
        gapSize: safeGap,
    }
}

function createInitialState(rows: number, cols: number, gapSize: number, pipeDistance: number): FlappyBirdState {
    return {
        birdRow: Math.floor(rows / 2),
        velocity: 0,
        pipes: [createPipe(cols - 1, rows, gapSize), createPipe(cols - 1 + pipeDistance, rows, gapSize)],
        tick: 0,
        score: 0,
    }
}

function shortcutMatches(event: KeyboardEvent, shortcut: string): boolean {
    if (shortcut.toLowerCase() !== START_SHORTCUT) return false

    const isDigitTwo = event.code === "Digit2" || event.key === "2" || event.key === "@" || event.key === '"'
    return event.ctrlKey && event.shiftKey && isDigitTwo
}

function isMouseInsideRoot(rootRef: React.RefObject<HTMLElement | null>, cachedValue: boolean): boolean {
    const root = rootRef.current
    if (!root) return false
    return cachedValue || root.matches(":hover")
}

function isFlapKey(event: KeyboardEvent): boolean {
    const key = event.key.toLowerCase()
    return key === " " || key === "arrowup" || key === "w" || key === "ц"
}

function hasCollision(state: FlappyBirdState, rows: number): boolean {
    const birdRow = Math.round(state.birdRow)
    if (birdRow < 0 || birdRow >= rows) return true

    return state.pipes.some((pipe) => {
        if (pipe.col !== 3) return false
        const inGap = birdRow >= pipe.gapStart && birdRow < pipe.gapStart + pipe.gapSize
        return !inGap
    })
}

function movePipes(pipes: FlappyPipe[], rows: number, cols: number, gapSize: number, pipeDistance: number): { pipes: FlappyPipe[]; passed: number } {
    const moved = pipes.map((pipe) => ({ ...pipe, col: pipe.col - 1 }))
    const passed = moved.filter((pipe) => pipe.col === 2).length
    const visible = moved.filter((pipe) => pipe.col >= 0)

    while (visible.length < 2) {
        const lastCol = visible.length ? Math.max(...visible.map((pipe) => pipe.col)) : cols - 1
        visible.push(createPipe(Math.max(cols - 1, lastCol + pipeDistance), rows, gapSize))
    }

    return { pipes: visible, passed }
}

function readStoredNumber(key: string): number {
    try {
        const value = window.localStorage.getItem(key)
        const numberValue = Number(value)
        return Number.isFinite(numberValue) ? Math.max(0, numberValue) : 0
    } catch (error) {
        return 0
    }
}

function saveStoredNumber(key: string, value: number): void {
    try {
        window.localStorage.setItem(key, String(Math.max(0, Math.floor(value))))
    } catch (error) {
        // localStorage может быть отключен, игра должна продолжать работать без него.
    }
}

function buildCells(rows: number, cols: number, state: FlappyBirdState): FlappyCell[] {
    const cells: FlappyCell[] = []
    const birdRow = Math.round(state.birdRow)
    const birdCol = 3

    for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
            const pipe = state.pipes.find((item) => item.col === col)
            const isBird = row === birdRow && col === birdCol
            const isPipe = pipe ? row < pipe.gapStart || row >= pipe.gapStart + pipe.gapSize : false
            let type: FlappyCellType = "empty"

            if (isPipe && pipe) {
                if (row === pipe.gapStart - 1) type = "pipeTop"
                else if (row === pipe.gapStart + pipe.gapSize) type = "pipeBottom"
                else type = "pipe"
            }

            if (isBird) type = "bird"

            cells.push({ row, col, type })
        }
    }

    return cells
}

export function useFlappyBirdGame<T extends HTMLElement>({
    rootRef,
    rows = DEFAULT_ROWS,
    cols = DEFAULT_COLS,
    startShortcut = START_SHORTCUT,
    tickMs = DEFAULT_TICK_MS,
    enabled = true,
    pipeDistance = DEFAULT_PIPE_DISTANCE,
    gapSize = DEFAULT_GAP_SIZE,
}: UseFlappyBirdGameOptions<T>): UseFlappyBirdGameResult {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [state, setState] = React.useState<FlappyBirdState>(() => createInitialState(rows, cols, gapSize, pipeDistance))
    const [highScore, setHighScore] = React.useState(() => readStoredNumber(FLAPPY_HIGH_SCORE_KEY))
    const stateRef = React.useRef(state)
    const isPlayingRef = React.useRef(isPlaying)
    const isMouseInsideRef = React.useRef(false)

    const syncHighScore = React.useCallback((score: number) => {
        setHighScore((current) => {
            const next = Math.max(current, Math.floor(score))
            if (next !== current) saveStoredNumber(FLAPPY_HIGH_SCORE_KEY, next)
            return next
        })
    }, [])

    const syncState = React.useCallback((nextState: FlappyBirdState) => {
        stateRef.current = nextState
        setState(nextState)
        syncHighScore(nextState.score)
    }, [syncHighScore])

    const resetGame = React.useCallback(() => {
        syncState(createInitialState(rows, cols, gapSize, pipeDistance))
    }, [cols, gapSize, pipeDistance, rows, syncState])

    const stopGame = React.useCallback(() => {
        isPlayingRef.current = false
        setIsPlaying(false)
        resetGame()
    }, [resetGame])

    const startGame = React.useCallback(() => {
        if (!enabled) return
        resetGame()
        isPlayingRef.current = true
        setIsPlaying(true)
    }, [enabled, resetGame])

    const flap = React.useCallback(() => {
        const currentState = stateRef.current
        syncState({
            ...currentState,
            velocity: FLAP_POWER,
        })
    }, [syncState])

    React.useEffect(() => {
        stateRef.current = state
    }, [state])

    React.useEffect(() => {
        isPlayingRef.current = isPlaying
    }, [isPlaying])

    React.useEffect(() => {
        const root = rootRef.current
        if (!root || !enabled) return

        const handleMouseEnter = () => {
            isMouseInsideRef.current = true
        }

        const handleMouseLeave = () => {
            isMouseInsideRef.current = false
        }

        const handlePointerDown = (event: MouseEvent) => {
            if (!isPlayingRef.current) return
            event.preventDefault()
            flap()
        }

        root.addEventListener("mouseenter", handleMouseEnter)
        root.addEventListener("mouseleave", handleMouseLeave)
        root.addEventListener("mousedown", handlePointerDown)

        return () => {
            root.removeEventListener("mouseenter", handleMouseEnter)
            root.removeEventListener("mouseleave", handleMouseLeave)
            root.removeEventListener("mousedown", handlePointerDown)
        }
    }, [enabled, flap, rootRef])

    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!enabled) return

            if (shortcutMatches(event, startShortcut) && isMouseInsideRoot(rootRef, isMouseInsideRef.current)) {
                event.preventDefault()
                event.stopPropagation()
                startGame()
                return
            }

            if (!isPlayingRef.current) return

            if (event.key === "Escape") {
                event.preventDefault()
                event.stopPropagation()
                stopGame()
                return
            }

            if (!isFlapKey(event)) return

            event.preventDefault()
            event.stopPropagation()
            flap()
        }

        window.addEventListener("keydown", handleKeyDown, true)

        return () => {
            window.removeEventListener("keydown", handleKeyDown, true)
        }
    }, [enabled, flap, rootRef, startGame, startShortcut, stopGame])

    React.useEffect(() => {
        if (!isPlaying || !enabled) return

        const intervalId = window.setInterval(() => {
            const currentState = stateRef.current
            const shouldMovePipes = currentState.tick % 2 === 1
            const velocity = clamp(currentState.velocity + GRAVITY, -2, MAX_VELOCITY)
            const movedPipes = shouldMovePipes
                ? movePipes(currentState.pipes, rows, cols, gapSize, pipeDistance)
                : { pipes: currentState.pipes, passed: 0 }

            const nextState: FlappyBirdState = {
                birdRow: currentState.birdRow + velocity,
                velocity,
                pipes: movedPipes.pipes,
                tick: currentState.tick + 1,
                score: currentState.score + movedPipes.passed,
            }

            if (hasCollision(nextState, rows)) {
                syncHighScore(currentState.score)
                resetGame()
                return
            }

            syncState(nextState)
        }, tickMs)

        return () => {
            window.clearInterval(intervalId)
        }
    }, [cols, enabled, gapSize, isPlaying, pipeDistance, resetGame, rows, syncHighScore, syncState, tickMs])

    return {
        isPlaying,
        cells: buildCells(rows, cols, state),
        score: state.score,
        highScore,
        startGame,
        stopGame,
    }
}
