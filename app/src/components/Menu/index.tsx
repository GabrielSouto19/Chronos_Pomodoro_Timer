import {HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState } from 'react'



type AvailableThemes = 'dark'|'light'


export function Menu(){

    const [theme,setTheme] = useState<AvailableThemes>("dark")

    function handleThemeChange(
        event:React.MouseEvent<HTMLAnchorElement>
    ){
        event.preventDefault()

        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark"? "light": "dark"
            return nextTheme
        })

        
    }

    return <nav className={styles.menu}>
        <h1>{theme}</h1>
        <a href="#" className={styles.menuLink} aria-label='Ir para Home' title='Home'>
            <HomeIcon size={40}/>  
        </a>
        
        <a href="#" className={styles.menuLink} aria-label='ir para Histórico' title='Ver Histórico'>
            <HistoryIcon size={40}/>  
        </a>
        
        <a href="#" className={styles.menuLink} aria-label='Ir para configurações' title='Configurações'>
            <SettingsIcon size={40}/>  
        </a>
        
        <a href="#" className={styles.menuLink} aria-label='Mudar Tema' title='Mudar Tema' onClick={handleThemeChange} >
            <SunIcon size={40}/>  
        </a>
    </nav>

}