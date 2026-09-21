import { React } from "jimu-core"
import type { WidgetTheme } from "../../config"

export const ICON_ACTIVE = "#00BBF2"
export const ICON_DARK = "#FFFFFF"
export const ICON_LIGHT = "#000000"

const SEARCH_PATH =
    "M21.968 20.7932L16.765 15.5901C18.1165 13.9371 18.7811 11.8279 18.6211 9.6987C18.4611 7.56951 17.4889 5.58326 15.9055 4.15079C14.3221 2.71832 12.2487 1.94923 10.1142 2.0026C7.97969 2.05597 5.94734 2.92772 4.43753 4.43753C2.92772 5.94734 2.05597 7.97969 2.0026 10.1142C1.94923 12.2487 2.71832 14.3221 4.15079 15.9055C5.58326 17.4889 7.56951 18.4611 9.6987 18.6211C11.8279 18.7811 13.9371 18.1165 15.5901 16.765L20.7932 21.968L21.968 20.7932ZM10.3355 16.9827C9.02085 16.9827 7.73569 16.5928 6.64257 15.8624C5.54946 15.132 4.69747 14.0939 4.19437 12.8793C3.69126 11.6647 3.55962 10.3282 3.81611 9.03874C4.07259 7.74932 4.70567 6.56491 5.63529 5.63529C6.56491 4.70567 7.74932 4.07259 9.03874 3.81611C10.3282 3.55962 11.6647 3.69126 12.8793 4.19437C14.0939 4.69747 15.132 5.54946 15.8624 6.64257C16.5928 7.73569 16.9827 9.02085 16.9827 10.3355C16.9807 12.0979 16.2797 13.7874 15.0336 15.0336C13.7874 16.2797 12.0979 16.9807 10.3355 16.9827Z"

const LANGUAGE_PATH =
    "M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.34591 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34872 20.9426 6.80684 19.0679 4.9321C17.1932 3.05736 14.6513 2.00287 12 2ZM19.2058 7.83333H16.5217C15.9208 6.44082 15.1297 5.1384 14.1708 3.96333C16.2929 4.54077 18.1019 5.93123 19.2058 7.83333ZM15.75 12C15.7432 12.8485 15.6095 13.6911 15.3533 14.5H8.64667C8.39055 13.6911 8.25685 12.8485 8.25 12C8.25685 11.1516 8.39055 10.3089 8.64667 9.5H15.3533C15.6095 10.3089 15.7432 11.1516 15.75 12ZM9.315 16.1667H14.685C13.9777 17.5631 13.0735 18.8507 12 19.99C10.9261 18.851 10.0219 17.5634 9.315 16.1667ZM9.315 7.83333C10.0223 6.43689 10.9265 5.1493 12 4.01C13.0739 5.14898 13.9781 6.43663 14.685 7.83333H9.315ZM9.83334 3.96333C8.87305 5.13815 8.08049 6.44058 7.47834 7.83333H4.79417C5.89905 5.93036 7.70972 4.5398 9.83334 3.96333ZM4.05084 9.5H6.91667C6.70064 10.316 6.58864 11.1559 6.58334 12C6.58864 12.8441 6.70064 13.684 6.91667 14.5H4.05084C3.53862 12.8727 3.53862 11.1273 4.05084 9.5ZM4.79417 16.1667H7.47834C8.08049 17.5594 8.87305 18.8618 9.83334 20.0367C7.70972 19.4602 5.89905 18.0696 4.79417 16.1667ZM14.1708 20.0367C15.1297 18.8616 15.9208 17.5592 16.5217 16.1667H19.2058C18.1019 18.0688 16.2929 19.4592 14.1708 20.0367ZM19.9492 14.5H17.0833C17.2994 13.684 17.4114 12.8441 17.4167 12C17.4114 11.1559 17.2994 10.316 17.0833 9.5H19.9475C20.4597 11.1273 20.4597 12.8727 19.9475 14.5H19.9492Z"

const CALENDAR_PATH =
    "M7 2V4M17 2V4M4 8H20M5 4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4Z"

const LOCATION_PATH =
    "M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"

function ThemedIcon(props: {
    theme: WidgetTheme
    active?: boolean
    path: string
    stroke?: boolean
    className?: string
}) {
    const { theme, active = false, path, stroke = false, className } = props
    const showDark = theme === "Dark" && !active
    const showLight = theme === "Light" && !active
    const common = {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": true as const,
    }

    const renderPath = (fill: string, visible: boolean, extraClass?: string) => {
        if (stroke) {
            return (
                <svg {...common} className={[className, extraClass, visible ? "sv-icon-visible" : ""].filter(Boolean).join(" ")}>
                    <path
                        d={path}
                        stroke={fill}
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        }

        return (
            <svg {...common} className={[className, extraClass, visible ? "sv-icon-visible" : ""].filter(Boolean).join(" ")}>
                <path d={path} fill={fill} />
            </svg>
        )
    }

    return (
        <>
            {renderPath(ICON_DARK, showDark, "sv-icon-layer")}
            {renderPath(ICON_LIGHT, showLight, "sv-icon-layer")}
            {renderPath(ICON_ACTIVE, active, "sv-icon-layer sv-icon-layer-active")}
        </>
    )
}

export function HeaderSearchIcon(props: { theme: WidgetTheme; active?: boolean; className?: string }) {
    return <ThemedIcon theme={props.theme} active={props.active} path={SEARCH_PATH} className={props.className} />
}

export function HeaderLanguageIcon(props: { theme: WidgetTheme; active?: boolean; className?: string }) {
    return <ThemedIcon theme={props.theme} active={props.active} path={LANGUAGE_PATH} className={props.className} />
}

export function HeaderCalendarIcon(props: { theme: WidgetTheme; active?: boolean; className?: string }) {
    return <ThemedIcon theme={props.theme} active={props.active} path={CALENDAR_PATH} stroke className={props.className} />
}

export function HeaderLocationIcon(props: { theme: WidgetTheme; className?: string }) {
    return <ThemedIcon theme={props.theme} active path={LOCATION_PATH} stroke className={props.className} />
}

export function HeaderCheckIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
                d="M13.3333 4L6 11.3333L2.66667 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function HeaderSunIcon(props: { size?: number }) {
    const size = props.size ?? 14
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}

export function HeaderMoonIcon(props: { size?: number }) {
    const size = props.size ?? 14
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
