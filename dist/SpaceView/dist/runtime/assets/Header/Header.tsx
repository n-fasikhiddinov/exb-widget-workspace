import { React } from 'jimu-core'
import { rasterMap, getRasterPeriods, getLatestRasterPeriod, type RasterSource, type WidgetTheme } from '../../config'
import { LogoIcon } from '../../icons'
import UiSelect from '../../components/UiSelect/UiSelect'
import SearchBox from '../../search/SearchBox'
import ThemeToggle from './ThemeToggle'
import UserAvatar from './UserAvatar/UserAvatar'
import './Header.css'
import './HeaderModern.css'

interface HeaderProps {
  rasters: RasterSource[];
  setUrl: (url: string) => void; onChange: (type: string, data: any) => void
  getTheme: string; setTheme: (theme: WidgetTheme) => void; getLang: string; setLang: (lang: string) => void
}
export default function Header({ rasters, setUrl, onChange, getTheme, setTheme, getLang, setLang }: HeaderProps) {
  const ru = getLang === 'RU'
  const sources = rasterMap(rasters)
  const [period, setPeriod] = React.useState(() => getLatestRasterPeriod(rasters))
  React.useEffect(() => { if (!sources[period]) setPeriod(getLatestRasterPeriod(rasters)) }, [rasters])
  const periodOptions = getRasterPeriods(rasters).map(key => {
    const [year, monitor] = key.split('-')
    return { value: key, label: <><strong className="sv-period-year">{year}</strong><span>{monitor ? `${getLang === 'EN' ? 'Monitoring' : ru ? 'Мониторинг' : 'Monitoring'} ${monitor}` : getLang === 'EN' ? 'All images' : ru ? 'Все снимки' : 'Barcha tasvirlar'}</span></> }
  })
  const languages = [['UZ', 'O‘zbekcha'], ['RU', 'Русский'], ['EN', 'English']].map(([value, label]) => ({ value, label: <><strong>{value}</strong><span>{label}</span></> }))
  return <header className="sv-header">
    <div className="sv-brand"><span className="sv-brand-mark"><LogoIcon size="100%" color="currentColor" /></span><div><strong>UzSpaceView</strong><small>{getLang === 'EN' ? "Satellite monitoring" : (ru ? 'Спутниковый мониторинг' : 'Sun’iy yo‘ldosh monitoringi')}</small></div></div>
    <SearchBox lang={getLang} onChange={onChange} />
    <div className="sv-header-controls">
      <UiSelect className="sv-header-period-select" value={period} options={periodOptions} ariaLabel={getLang === 'EN' ? 'Acquisition period' : ru ? 'Период съёмки' : 'Tasvir davri'} onChange={key => { setPeriod(key); setUrl(sources[key]) }} />
      <UiSelect className="sv-header-language-select" value={getLang} options={languages} ariaLabel={getLang === 'EN' ? 'Language' : ru ? 'Язык' : 'Til'} onChange={setLang} />
      <ThemeToggle theme={getTheme as WidgetTheme} onToggle={() => setTheme(getTheme === 'Dark' ? 'Light' : 'Dark')} />
      <UserAvatar getLang={getLang} />
    </div>
  </header>
}
