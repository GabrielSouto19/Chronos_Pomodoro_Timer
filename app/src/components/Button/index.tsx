import type React from 'react'
import styles from './styles.module.css'

type ButtonProps = {
    icon: React.ReactNode;
    color?:"green" | "red";

// interrogação representa que  o preencimetno é ocional
} & React.ComponentProps<'button'>
// fazendo um comentário somente para fazer o commit 



export function Button({icon,color="green", ...props}:ButtonProps){
    return <>
        <button className={`${styles.button} ${styles.color}`}  {...props} >
            {icon}
        </button  >
    </>
    
}