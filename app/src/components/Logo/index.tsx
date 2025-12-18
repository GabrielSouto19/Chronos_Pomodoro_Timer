import { TimerIcon } from 'lucide-react'
import styles from './styles.module.css'



export function Logo(){
    // const { children } = props
    // console.log(props)
    return <div className={styles.logo}>
        <a href="#" className={styles.logoLink}>
            <TimerIcon size={64}/>
            <span>Chornos</span>
        </a>
    </div>

}