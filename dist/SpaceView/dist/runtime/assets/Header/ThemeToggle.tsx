import { React } from "jimu-core"
import { Moon, Sun } from "lucide-react"
import type { WidgetTheme } from "../../config"
import "./ThemeToggle.css"

interface ThemeToggleProps {
    theme: WidgetTheme
    onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
    const isDark = theme === "Dark"

    return (
        <button
            type="button"
            className={`sv-theme-toggle sv-border ${isDark ? "sv-theme-toggle-dark" : ""}`}
            role="switch"
            aria-checked={isDark}
            aria-label={isDark ? "Dark theme" : "Light theme"}
            onClick={onToggle}
        >
            <Sun className="sv-theme-toggle-icon sv-theme-toggle-icon-sun" size={14} aria-hidden="true" />
            <Moon className="sv-theme-toggle-icon sv-theme-toggle-icon-moon" size={14} aria-hidden="true" />
            <span className="sv-theme-toggle-thumb" aria-hidden="true">
                {isDark ? <Moon size={13} strokeWidth={2.25} /> : <Sun size={13} strokeWidth={2.25} />}
            </span>
        </button>
    )
}
