import styles from './styles.module.css'

type InputProps = {
    id:string,
    labelText?:string ;
// interrogação representa que  o preencimetno é ocional
} & React.ComponentProps<'input'>



export function Input({id,type,labelText, ...rest}:InputProps){
    return <>

         {labelText && <label htmlFor={id}> {labelText}</label>}
    {/* {...rest} */}
        <input className={styles.input} id={id} type={type}  {...rest} />
    </>
    
}