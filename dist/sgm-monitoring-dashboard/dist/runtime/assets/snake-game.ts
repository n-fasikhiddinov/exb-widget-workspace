import { React } from "jimu-core"

export type SnakePoint = {
    row: number
    col: number
}

export type SnakeDirection = "up" | "down" | "left" | "right"

export type SnakeCellType = "empty" | "snake" | "head" | "food"

export type SnakeGameCell = SnakePoint & {
    type: SnakeCellType
}

type SnakeGameState = {
    snake: SnakePoint[]
    food: SnakePoint | null
    direction: SnakeDirection
    nextDirection: SnakeDirection
}

type UseSnakeGameOptions<T extends HTMLElement> = {
    rootRef: React.RefObject<T | null>
    rows?: number
    cols?: number
    startShortcut?: string
    tickMs?: number
    enabled?: boolean
    wrapWalls?: boolean
}

type UseSnakeGameResult = {
    isPlaying: boolean
    cells: SnakeGameCell[]
    score: number
    highScore: number
    startGame: () => void
    stopGame: () => void
}

const DEFAULT_ROWS = 7
const DEFAULT_COLS = 24
const DEFAULT_TICK_MS = 150
const START_SHORTCUT = "ctrl+shift+1"
const SNAKE_HIGH_SCORE_KEY = "sgm_dashboard_snake_high_score"

const DIRECTIONS: Record<SnakeDirection, SnakePoint> = {
    up: { row: -1, col: 0 },
    down: { row: 1, col: 0 },
    left: { row: 0, col: -1 },
    right: { row: 0, col: 1 },
}

const OPPOSITE_DIRECTIONS: Record<SnakeDirection, SnakeDirection> = {
    up: "down",
    down: "up",
    left: "right",
    right: "left",
}

function samePoint(a: SnakePoint, b: SnakePoint): boolean {
    return a.row === b.row && a.col === b.col
}

function hasPoint(list: SnakePoint[], point: SnakePoint): boolean {
    return list.some((item) => samePoint(item, point))
}

function makeInitialSnake(rows: number, cols: number): SnakePoint[] {
    const row = Math.floor(rows / 2)
    const headCol = Math.max(2, Math.floor(cols / 2))

    return [
        { row, col: headCol },
        { row, col: headCol - 1 },
        { row, col: headCol - 2 },
    ]
}

function createFood(rows: number, cols: number, snake: SnakePoint[]): SnakePoint | null {
    const freeCells: SnakePoint[] = []

    for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
            const point = { row, col }
            if (!hasPoint(snake, point)) freeCells.push(point)
        }
    }

    if (!freeCells.length) return null
    return freeCells[Math.floor(Math.random() * freeCells.length)]
}

function createInitialState(rows: number, cols: number): SnakeGameState {
    const snake = makeInitialSnake(rows, cols)

    return {
        snake,
        food: createFood(rows, cols, snake),
        direction: "right",
        nextDirection: "right",
    }
}

function shortcutMatches(event: KeyboardEvent, shortcut: string): boolean {
    if (shortcut.toLowerCase() !== START_SHORTCUT) return false

    // При Shift + 1 в разных раскладках event.key может быть "1" или "!".
    // event.code стабильнее, потому что смотрит на физическую клавишу.
    const isDigitOne = event.code === "Digit1" || event.key === "1" || event.key === "!"
    return event.ctrlKey && event.shiftKey && isDigitOne
}

function isMouseInsideRoot(rootRef: React.RefObject<HTMLElement | null>, cachedValue: boolean): boolean {
    const root = rootRef.current
    if (!root) return false

    // mouseenter/mouseleave иногда могут не сработать после перерендера.
    // :hover оставлен как дополнительная проверка, чтобы запуск был надежнее.
    return cachedValue || root.matches(":hover")
}

function getDirectionFromKey(key: string): SnakeDirection | null {
    const normalized = key.toLowerCase()

    if (normalized === "arrowup" || normalized === "w" || normalized === "ц") return "up"
    if (normalized === "arrowdown" || normalized === "s" || normalized === "ы") return "down"
    if (normalized === "arrowleft" || normalized === "a" || normalized === "ф") return "left"
    if (normalized === "arrowright" || normalized === "d" || normalized === "в") return "right"

    return null
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

function buildCells(rows: number, cols: number, state: SnakeGameState): SnakeGameCell[] {
    const cells: SnakeGameCell[] = []

    for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
            const point = { row, col }
            const isHead = state.snake.length > 0 && samePoint(state.snake[0], point)
            const isSnake = !isHead && hasPoint(state.snake, point)
            const isFood = state.food ? samePoint(state.food, point) : false

            cells.push({
                row,
                col,
                type: isHead ? "head" : isFood ? "food" : isSnake ? "snake" : "empty",
            })
        }
    }

    return cells
}

export function useSnakeGame<T extends HTMLElement>({
    rootRef,
    rows = DEFAULT_ROWS,
    cols = DEFAULT_COLS,
    startShortcut = START_SHORTCUT,
    tickMs = DEFAULT_TICK_MS,
    enabled = true,
    wrapWalls = false,
}: UseSnakeGameOptions<T>): UseSnakeGameResult {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [state, setState] = React.useState<SnakeGameState>(() => createInitialState(rows, cols))
    const [highScore, setHighScore] = React.useState(() => readStoredNumber(SNAKE_HIGH_SCORE_KEY))
    const stateRef = React.useRef(state)
    const isPlayingRef = React.useRef(isPlaying)
    const isMouseInsideRef = React.useRef(false)

    const syncHighScore = React.useCallback((score: number) => {
        setHighScore((current) => {
            const next = Math.max(current, Math.floor(score))
            if (next !== current) saveStoredNumber(SNAKE_HIGH_SCORE_KEY, next)
            return next
        })
    }, [])

    const syncState = React.useCallback((nextState: SnakeGameState) => {
        stateRef.current = nextState
        setState(nextState)
        syncHighScore(Math.max(0, nextState.snake.length - 3))
    }, [syncHighScore])

    const resetGame = React.useCallback(() => {
        syncState(createInitialState(rows, cols))
    }, [cols, rows, syncState])

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

        root.addEventListener("mouseenter", handleMouseEnter)
        root.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            root.removeEventListener("mouseenter", handleMouseEnter)
            root.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [enabled, rootRef])

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
                syncHighScore(Math.max(0, stateRef.current.snake.length - 3))
                stopGame()
                return
            }

            const nextDirection = getDirectionFromKey(event.key)
            if (!nextDirection) return

            event.preventDefault()
            event.stopPropagation()

            const currentState = stateRef.current
            if (OPPOSITE_DIRECTIONS[currentState.direction] === nextDirection) return

            syncState({
                ...currentState,
                nextDirection,
            })
        }

        window.addEventListener("keydown", handleKeyDown, true)

        return () => {
            window.removeEventListener("keydown", handleKeyDown, true)
        }
    }, [enabled, rootRef, startGame, startShortcut, stopGame, syncHighScore, syncState])

    React.useEffect(() => {
        if (!isPlaying || !enabled) return

        const intervalId = window.setInterval(() => {
            const currentState = stateRef.current
            const direction = currentState.nextDirection
            const delta = DIRECTIONS[direction]
            const head = currentState.snake[0]
            let nextHead: SnakePoint = {
                row: head.row + delta.row,
                col: head.col + delta.col,
            }

            const isOutOfField = nextHead.row < 0 || nextHead.row >= rows || nextHead.col < 0 || nextHead.col >= cols

            if (isOutOfField) {
                if (!wrapWalls) {
                    syncHighScore(Math.max(0, currentState.snake.length - 3))
                    resetGame()
                    return
                }

                nextHead = {
                    row: (nextHead.row + rows) % rows,
                    col: (nextHead.col + cols) % cols,
                }
            }

            const willEat = currentState.food ? samePoint(nextHead, currentState.food) : false
            const snakeWithoutTail = willEat ? currentState.snake : currentState.snake.slice(0, -1)

            if (hasPoint(snakeWithoutTail, nextHead)) {
                syncHighScore(Math.max(0, currentState.snake.length - 3))
                resetGame()
                return
            }

            const nextSnake = [nextHead, ...currentState.snake]
            if (!willEat) nextSnake.pop()

            if (nextSnake.length >= rows * cols) {
                syncHighScore(Math.max(0, nextSnake.length - 3))
                stopGame()
                return
            }

            syncState({
                snake: nextSnake,
                food: willEat ? createFood(rows, cols, nextSnake) : currentState.food,
                direction,
                nextDirection: direction,
            })
        }, tickMs)

        return () => {
            window.clearInterval(intervalId)
        }
    }, [cols, enabled, isPlaying, resetGame, rows, stopGame, syncHighScore, syncState, tickMs, wrapWalls])

    return {
        isPlaying,
        cells: buildCells(rows, cols, state),
        score: Math.max(0, state.snake.length - 3),
        highScore,
        startGame,
        stopGame,
    }
}
