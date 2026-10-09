import { React } from "jimu-core"
import { getAccountDisplayName } from "../../../auth/getAccountDisplayName"
import { LogoutHandler } from "../../../auth/logoutHandler"
import { getExbAuthEmail } from "../../../auth/exbAuthStorage"
import { translate } from "../../../config"
import "./UserAvatar.css"

function LogoutIcon() {
    return (
        <svg
            className="user-avatar__logout-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M6 14H3C2.46957 14 1.96086 13.7893 1.58579 13.4142C1.21071 13.0391 1 12.5304 1 12V4C1 3.46957 1.21071 2.96086 1.58579 2.58579C1.96086 2.21071 2.46957 2 3 2H6M11 11L15 8M15 8L11 5M15 8H6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function getAvatarLetter(email?: string | null): string {
    const source = email?.trim()
    if (!source) {
        return "A"
    }

    return source.charAt(0).toUpperCase()
}

interface UserAvatarProps {
    getLang: string
}

export default function UserAvatar({ getLang }: UserAvatarProps) {
    const logoutHandler = React.useMemo(() => new LogoutHandler(), [])
    const rootRef = React.useRef<HTMLDivElement>(null)
    const id = React.useId()
    const btnId = `${id}-trigger`
    const panelId = `${id}-panel`
    const [open, setOpen] = React.useState(false)
    const [accountName, setAccountName] = React.useState(() => getAccountDisplayName())

    const displayEmail = getExbAuthEmail()
    const letter = getAvatarLetter(displayEmail)
    const displayName = accountName.trim()
    const triggerAriaLabel = displayName
        ? displayName
        : translate["Chiqish"][getLang]

    const handleLogout = React.useCallback(() => {
        setOpen(false)
        logoutHandler.logout()
    }, [logoutHandler])

    React.useEffect(() => {
        if (!open) return
        setAccountName(getAccountDisplayName())
    }, [open])

    React.useEffect(() => {
        if (!open) return

        const onDocPointer = (event: PointerEvent) => {
            const el = rootRef.current
            if (el && !el.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false)
        }

        document.addEventListener("pointerdown", onDocPointer, true)
        document.addEventListener("keydown", onKey)

        return () => {
            document.removeEventListener("pointerdown", onDocPointer, true)
            document.removeEventListener("keydown", onKey)
        }
    }, [open])

    return (
        <div ref={rootRef} className="user-avatar-wrap">
            <button
                type="button"
                id={btnId}
                className={`user-avatar sv-border ${open ? "user-avatar--open" : ""}`}
                aria-label={triggerAriaLabel}
                title={triggerAriaLabel}
                aria-expanded={open}
                aria-haspopup="menu"
                aria-controls={open ? panelId : undefined}
                onClick={() => setOpen((current) => !current)}
            >
                {letter}
            </button>
            {open ? (
                <div
                    id={panelId}
                    role="menu"
                    className="user-avatar__menu"
                    aria-labelledby={btnId}
                >
                    {displayName ? (
                        <p className="user-avatar__name">{displayName}</p>
                    ) : null}
                    <button
                        type="button"
                        role="menuitem"
                        className="user-avatar__logout"
                        onClick={handleLogout}
                    >
                        <LogoutIcon />
                        <span>{translate["Hisobdan chiqish"][getLang]}</span>
                    </button>
                </div>
            ) : null}
        </div>
    )
}
