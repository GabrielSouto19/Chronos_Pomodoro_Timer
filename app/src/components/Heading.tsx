import styles from './Heading.module.css'


export function Heading(props){
    console.log(props)
    return <h1 className={styles.heading}>{props.children} e {props.attr}</h1>
}