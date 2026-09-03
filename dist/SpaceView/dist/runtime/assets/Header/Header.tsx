import { React } from "jimu-core"
import type { CSSProperties } from "react"
import { createPortal } from "react-dom"
import "./Header.css"

import {
    LogoIcon,
    allThemes,
    translate,
    yearRasters,
    type WidgetTheme,
} from "../../config"
import SpaceAssetIcon from "./SpaceAssetIcon"
import ThemeToggle from "./ThemeToggle"
import UserAvatar from "./UserAvatar/UserAvatar"
import {
    HeaderCalendarIcon,
    HeaderLanguageIcon,
    HeaderLocationIcon,
    HeaderSearchIcon,
} from "./headerIcons"

interface headerProps {
    setUrl: (theme: string) => void
    onChange: (type: string, data: any) => void
    getTheme: string
    setTheme: (theme: string) => void
    getLang: string
    setLang: (lang: string) => void
}

const LANG_OPTIONS: Record<string, { label: string; title: string }> = {
    UZ: { label: "UZ", title: "O'zbekcha" },
    RU: { label: "РУ", title: "Русский" },
}

function renderFlag(lang: string) {
    if (lang === "UZ") {
        return (
            <svg
                className="sv-language-flag"
                width="20"
                height="14"
                viewBox="0 0 513 357.071"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    fill="#1EB53A"
                    d="M28.477.32h456.044c15.488 0 28.159 12.672 28.159 28.16v300.111c0 15.488-12.671 28.16-28.159 28.16H28.477c-15.486 0-28.157-12.672-28.157-28.16V28.48C.32 12.992 12.991.32 28.477.32z"
                />
                <path
                    fill="#0099B5"
                    d="M512.68 178.536H.32V28.48C.32 12.992 12.991.32 28.477.32h456.044c15.488 0 28.159 12.672 28.159 28.16v150.056z"
                />
                <path fill="#CE1126" d="M.32 114.377h512.36v128.317H.32z" />
                <path fill="#fff" d="M.32 121.505h512.36v114.06H.32z" />
                <path
                    fill="#fff"
                    d="M96.068 14.574c2.429 0 4.81.206 7.129.596-20.218 3.398-35.644 20.998-35.644 42.177 0 21.178 15.426 38.778 35.644 42.176-2.319.39-4.7.596-7.129.596-23.607 0-42.772-19.165-42.772-42.772 0-23.608 19.165-42.773 42.772-42.773zm94.1 68.437-1.921 5.91h-6.216l5.029 3.654-1.92 5.911 5.028-3.654 5.028 3.654-1.921-5.911 5.029-3.654h-6.216l-1.92-5.91z"
                />
            </svg>
        )
    }

    return (
        <svg className="sv-language-flag" width="20" height="15" viewBox="0 0 20 15" fill="none" aria-hidden="true">
            <rect width="20" height="5" fill="#FFFFFF" />
            <rect y="5" width="20" height="5" fill="#0039A6" />
            <rect y="10" width="20" height="5" fill="#D52B1E" />
        </svg>
    )
}

function HeaderDropdown(props: {
    label: string
    theme: WidgetTheme
    renderIcon: (isOpen: boolean) => React.ReactNode
    menuWidth?: number
    menuClassName?: string
    contentClassName?: string
    children: React.ReactNode
}) {
    const {
        label,
        theme,
        renderIcon,
        children,
        menuWidth = 280,
        menuClassName = "",
        contentClassName = "",
    } = props
    const id = React.useId()
    const buttonRef = React.useRef<HTMLButtonElement | null>(null)
    const [isOpen, setIsOpen] = React.useState(false)

    const menuStyle = React.useMemo((): CSSProperties | undefined => {
        if (!isOpen || !buttonRef.current) return undefined
        const rect = buttonRef.current.getBoundingClientRect()
        return {
            position: "fixed",
            top: rect.bottom + 8,
            right: Math.max(8, window.innerWidth - rect.right - 4),
            width: menuWidth,
            maxWidth: "calc(100vw - 32px)",
        }
    }, [isOpen, menuWidth])

    return (
        <>
            <button
                ref={buttonRef}
                className={`sv-icon-button ${isOpen ? "sv-icon-button-open" : ""}`}
                type="button"
                aria-controls={id}
                aria-label={label}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((v) => !v)}
            >
                {renderIcon(isOpen)}
            </button>

            {isOpen &&
                createPortal(
                    <div className="sv-theme-scope" style={allThemes[theme] as CSSProperties}>
                        <div className="sv-dropdown-backdrop" onClick={() => setIsOpen(false)} />
                        <div
                            id={id}
                            className={["sv-dropdown-menu", menuClassName].filter(Boolean).join(" ")}
                            role="menu"
                            aria-label={label}
                            style={menuStyle}
                        >
                            <div className="sv-dropdown-header">
                                <div className="sv-dropdown-title">{label}</div>
                            </div>
                            <div className={["sv-dropdown-content", contentClassName].filter(Boolean).join(" ")}>
                                {children}
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    )
}

export default function Header({ setUrl, onChange, getTheme, setTheme, getLang, setLang }: headerProps) {
    const theme = getTheme as WidgetTheme
    const [getInputValue, setInputValue] = React.useState<string>("")
    const [getResult, setResult] = React.useState<any[]>([])
    const debounceRef = React.useRef<NodeJS.Timeout | null>(null)
    const [isInputFocused, setFocus] = React.useState(false)
    const [showSuggestions, setShowSuggestions] = React.useState(false)
    const searchInputRef = React.useRef<HTMLInputElement | null>(null)

    const [getSelectedYear, setSelectedYear] = React.useState<string>("2026-2")

    const updateType = (type: string, data: any) => {
        if (type === "address" && data) {
            setInputValue(data.address)
            onChange("address", data.extent)
            setShowSuggestions(false)
        }
    }

    const PlaceSearch = async (input: string) => {
        const query = `O'zbekiston ${input}`
        const url = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&SingleLine=${encodeURIComponent(query)}&outSR=4326&maxLocations=10`
        const response = await fetch(url)
        const data = await response.json()
        setResult(data.candidates || [])
    }

    const handleInput = (text: string) => {
        setInputValue(text)

        if (debounceRef.current) clearTimeout(debounceRef.current)

        debounceRef.current = setTimeout(() => {
            if (text.trim().length === 0) {
                setResult([])
                return
            }
            PlaceSearch(text)
        }, 300)
    }

    const suggestionsStyle = React.useMemo((): CSSProperties | undefined => {
        if (!showSuggestions || !searchInputRef.current) return undefined
        const rect = searchInputRef.current.getBoundingClientRect()
        return {
            position: "fixed",
            top: rect.bottom + 8,
            left: rect.left,
            width: rect.width,
        }
    }, [showSuggestions, getInputValue, getResult.length])

    const langTitle = getLang === "RU" ? "Язык" : "Til"
    const yearTitle = getLang === "RU" ? "Период" : "Davr"

    return (
        <header className="HeaderArea">
            <div className="HeaderLeftContent">
                <div className="HeaderLogo">
                    <LogoIcon size="100%" color="rgba(var(--main-second-color-rgb), 1)" />
                </div>
                <div className="HeaderTitle">UzSpaceView</div>
            </div>

            <div className="HeaderCenterContent">
                <form className="sv-searchbar-container" onSubmit={(e) => e.preventDefault()}>
                    <div className={`sv-searchbar-content sv-border ${isInputFocused ? "sv-searchbar-focused" : ""}`}>
                        <SpaceAssetIcon theme={theme} active={isInputFocused} hoverable>
                            <HeaderSearchIcon theme={theme} active={isInputFocused} />
                        </SpaceAssetIcon>
                        <input
                            ref={searchInputRef}
                            type="text"
                            className="sv-search-input"
                            value={getInputValue}
                            onChange={(event) => handleInput(event.target.value)}
                            onFocus={() => {
                                setFocus(true)
                                setShowSuggestions(true)
                            }}
                            onBlur={() => {
                                window.setTimeout(() => {
                                    setFocus(false)
                                    setShowSuggestions(false)
                                }, 150)
                            }}
                            onKeyDown={(event) => {
                                if (event.code === "Enter" && getResult[0]) {
                                    updateType("address", getResult[0])
                                }
                            }}
                            placeholder={translate["Manzilni qidirish"][getLang]}
                        />
                    </div>
                </form>

                {showSuggestions &&
                    getInputValue.length > 0 &&
                    suggestionsStyle &&
                    createPortal(
                        <div className="sv-theme-scope" style={allThemes[theme] as CSSProperties}>
                            <div className="sv-search-suggestions sv-border" style={suggestionsStyle}>
                            {getResult.map((item: any) => (
                                <button
                                    key={item.address}
                                    type="button"
                                    className="sv-search-suggestion-item"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => updateType("address", { extent: item.extent, address: item.address })}
                                >
                                    <SpaceAssetIcon theme={theme} active hoverable={false}>
                                        <HeaderLocationIcon theme={theme} />
                                    </SpaceAssetIcon>
                                    <span>{item.address}</span>
                                </button>
                            ))}
                            {getResult.length === 0 && (
                                <div className="sv-search-suggestion-empty">
                                    {getLang === "RU" ? "Ничего не найдено" : "Natija topilmadi"}
                                </div>
                            )}
                        </div>
                        </div>,
                        document.body
                    )}
            </div>

            <div className="HeaderRightContent">
                <div className="sv-icon-buttons-group">
                    <HeaderDropdown
                        label={yearTitle}
                        theme={theme}
                        menuWidth={208}
                        menuClassName="sv-dropdown-menu-compact"
                        contentClassName="sv-dropdown-content-list"
                        renderIcon={(active) => (
                            <SpaceAssetIcon theme={theme} active={active} hoverable>
                                <HeaderCalendarIcon theme={theme} active={active} />
                            </SpaceAssetIcon>
                        )}
                    >
                        {Object.keys(yearRasters).map((item: string) => (
                            <button
                                key={item}
                                type="button"
                                className={`sv-dropdown-item ${item === getSelectedYear ? "sv-dropdown-item-active" : ""}`}
                                role="menuitem"
                                onClick={() => {
                                    setSelectedYear(item)
                                    setUrl(yearRasters[item])
                                }}
                            >
                                <span>{item}</span>
                            </button>
                        ))}
                    </HeaderDropdown>

                    <HeaderDropdown
                        label={langTitle}
                        theme={theme}
                        menuWidth={208}
                        menuClassName="sv-dropdown-menu-language"
                        contentClassName="sv-dropdown-content-language"
                        renderIcon={(active) => (
                            <SpaceAssetIcon theme={theme} active={active} hoverable>
                                <HeaderLanguageIcon theme={theme} active={active} />
                            </SpaceAssetIcon>
                        )}
                    >
                        <div className="sv-language-list">
                            {Object.keys(LANG_OPTIONS).map((lang) => (
                                <button
                                    key={lang}
                                    type="button"
                                    className={`sv-language-item ${getLang === lang ? "sv-language-item-active" : ""}`}
                                    onClick={() => setLang(lang)}
                                >
                                    <span className="sv-language-item-content">
                                        {renderFlag(lang)}
                                        <span className="sv-language-item-label">{LANG_OPTIONS[lang].label}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </HeaderDropdown>

                    <ThemeToggle
                        theme={theme}
                        onToggle={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
                    />

                    <UserAvatar getLang={getLang} />
                </div>
            </div>
        </header>
    )
}
