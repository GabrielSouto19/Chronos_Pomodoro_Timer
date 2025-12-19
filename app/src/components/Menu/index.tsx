import {HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'



export function Menu(){
    
    return <nav className={styles.menu}>
        <a href="#" className={styles.menuLink}>
            <HomeIcon size={40}/>  
        </a>
        
        <a href="#" className={styles.menuLink}>
            <HistoryIcon size={40}/>  
        </a>
        
        <a href="#" className={styles.menuLink}>
            <SettingsIcon size={40}/>  
        </a>
        
        <a href="#" className={styles.menuLink}>
            <SunIcon size={40}/>  
        </a>
    </nav>

}