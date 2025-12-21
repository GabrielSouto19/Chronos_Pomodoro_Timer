type InputProps = {
    id:string,
    labelText?:string ;
// interrogação representa que  o preencimetno é ocional
} & React.ComponentProps<'input'>



export function Input({id,type,labelText}:InputProps){
    return <>

        

         <label htmlFor= {id}>{labelText? labelText:type}</label>
        <input type={type} id={id} />
    </>
    
}