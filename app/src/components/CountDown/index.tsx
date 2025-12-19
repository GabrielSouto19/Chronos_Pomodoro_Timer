
import styles from './styles.module.css'

import { useState } from 'react'


type CountDownProps = {
    children:React.ReactNode,

}

export function CountDown({children}:CountDownProps){

	return (
        <>
        <div className= {styles.container}>{} 00:00</div>

   

        </>


	)

    


    

}