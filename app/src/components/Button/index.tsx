import type React from 'react'
import styles from './styles.module.css'

type ButtonProps = {
    icon: React.ReactNode;
    color?:"green" | "red";

// interrogação representa que  o preencimetno é ocional
} & React.ComponentProps<'button'>



export function Button({icon,color="green", ...props}:ButtonProps){
    return <>
        <button className={styles.button}  {...props} >
            {icon}
        </button  >
    </>
    
}