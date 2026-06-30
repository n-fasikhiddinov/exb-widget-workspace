import { React } from "jimu-core"
import { Monitoring } from "./user-monitoring"

export default function Widget() {
    const Monit = React.useRef<Monitoring | null>()
    React.useEffect(() => {
        Monit.current = new Monitoring()
        Monit.current.start()
        return () => {
            Monit.current.close()
        }
    }, [])



    
    return null
}