import { React, SessionManager, getAppStore } from "jimu-core"

import {
    Theme,
    ThemeType,
    THEME
} from "../../configs/config"
import {
    LANGS,
    TranslationKey,
    Translations
} from "../../configs/translations"
import {
    BellIcon,
    ContentsIcon,
    DownloadIcon,
    LanguageIcon,
    ThemeIcon,
    LogoIcon
} from "../../configs/icons"
import "./Header.css"

type contentTypes = "notification" | "download" | "content" | "theme" | "language" | "profile" | null
interface HeaderProps {
    getLang: TranslationKey
    setLang: (value: TranslationKey) => void
    getTheme: ThemeType
    setTheme: (value: ThemeType) => void
}

export default function Header({
    getLang,
    setLang,
    getTheme,
    setTheme,
}: HeaderProps) {
    const userRef = React.useRef(getAppStore().getState())
    const [getAvatar, setAvatar] = React.useState<string | null>(null)
    const [getContent, setContent] = React.useState<contentTypes>(null)

    const onLogout = React.useCallback(() => {
        SessionManager.getInstance().signOut().then(() => {
            const logoutUrl = `${userRef.current.portalUrl}/sharing/rest/oauth2/signout?redirect_uri=${window.location.origin}${window.location.pathname}`;
            window.location.href = logoutUrl;
        }).catch((err: any) => {
            console.error("Ошибка при выходе:", err);
            window.location.reload();
        });
    }, []);

    React.useEffect(() => {
        let cancelled = false;

        (async () => {
            const session = SessionManager.getInstance().getMainSession();
            if (!session) {
                if (!cancelled) setAvatar(null);
                return;
            }
            const user = await session.getUser();
            if (!user?.thumbnail) {
                if (!cancelled) setAvatar(null);
                return;
            }
            const base = session.portal.replace(/\/+$/, "");
            const path =
                `${base}/community/users/${encodeURIComponent(user.username)}` +
                `/info/${encodeURIComponent(user.thumbnail)}`;
            const avatarUrl = session.token ? `${path}?token=${encodeURIComponent(session.token)}` : path;
            if (!cancelled) setAvatar(avatarUrl);
        })();

        return () => cancelled = true;
    }, []);

    const contents = (type: contentTypes) => {
        switch (type) {
            case "notification":
                return [
                    <div className="notificationBlock">notificationBlock</div>,
                    <div className="notificationBlock">notificationBlock</div>,
                    <div className="notificationBlock">notificationBlock</div>,
                    <div className="notificationBlock">notificationBlock</div>
                ]
            case "content":
                return [
                    <div className="contentBlock">contentBlock</div>,
                    <div className="contentBlock">contentBlock</div>,
                    <div className="contentBlock">contentBlock</div>,
                    <div className="contentBlock">contentBlock</div>,
                    <div className="contentBlock">contentBlock</div>,
                ]
            case "theme":
                return <div className="themeBlock">
                    {THEME.map((theme: ThemeType) =>
                        <div className={`theme ${theme === getTheme && "active"}`}
                            style={{
                                backgroundImage: `linear-gradient( 45deg, rgb(${Theme[theme]["--main-bg"]}), rgb(${Theme[theme]["--area-bg"]}) )`
                            }}
                            onClick={() => setTheme(theme)}
                        >{theme}</div>
                    )}
                </div>
            case "language":
                return Object.entries(LANGS).map(([key, value], index: number) =>
                    <div className={`language ${key === getLang && "active"}`} key={index}
                        onClick={() => setLang(key as TranslationKey)}
                    >{value}</div>
                )
            case "profile":
                return <div className="profileBlock">
                    <div className="profileImgBlock">
                        <div className="profileAvatar" onClick={onLogout}><img src={getAvatar} /></div>
                    </div>
                    <div className="userInfoBlock">
                        <div className="userFullName">
                            {userRef.current.user.lastName} {userRef.current.user.firstName[0]}.
                        </div>
                        <div className="username">{userRef.current.user.username}</div>
                        <div className="logOutBtn"
                            onClick={onLogout}
                        >{Translations["logOut"][getLang]}</div>
                    </div>
                </div>
        }
    }

    return (
        <div className="headerArea">
            <div className="headerTitleArea">
                <LogoIcon
                    size={["120px", "60px"]}
                    color={`rgb(${Theme[getTheme]["--color"]})`}
                />
                <span></span>
                <div className="headerTitleBlock">
                    <div className="headerTitle">{Translations["headerTitle"][getLang]}</div>
                    <div className="headerParagraph">{Translations["headerParagraph"][getLang]}</div>
                </div>
            </div>
            <div className="headerSearch"></div>
            <div className="headerBtns">
                <div className="headerBtn" onClick={() => setContent(getContent === "notification" ? null : "notification")}>
                    <BellIcon
                        size="22px"
                        color={`rgb(${Theme[getTheme]["--color"]})`}
                    />
                </div>
                <div className="headerBtn">
                    <DownloadIcon
                        size="22px"
                        color={`rgb(${Theme[getTheme]["--color"]})`}
                    />
                </div>
                <div className="headerBtn" onClick={() => setContent(getContent === "content" ? null : "content")}>
                    <ContentsIcon
                        size="22px"
                        color={`rgb(${Theme[getTheme]["--color"]})`}
                    />
                </div>
                <div className="headerBtn" onClick={() => setContent(getContent === "language" ? null : "language")}>
                    <LanguageIcon
                        size="22px"
                        color={`rgb(${Theme[getTheme]["--color"]})`}
                    />
                </div>
                <div className="headerBtn" onClick={() => setContent(getContent === "theme" ? null : "theme")}>
                    <ThemeIcon
                        size="22px"
                        color={`rgb(${Theme[getTheme]["--color"]})`}
                    />
                </div>
                <div className="userAvatar" onClick={() => setContent(getContent === "profile" ? null : "profile")}>
                    <img src={getAvatar} />
                </div>

                {getContent && <div className="additionalArea">
                    {contents(getContent)}
                </div>}
            </div>
        </div>
    )
}