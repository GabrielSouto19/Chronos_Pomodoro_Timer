import { Input } from '../Input'
import { Button } from '../Button'
import { Cycles } from '../Cycles'
import { PlayCircleIcon } from 'lucide-react'

export function MainForm(){


    return (
        <form action="" className="form">  
            <div className="formRow">
                <Input 
                labelText='task'
                id='meuInput'
                type='text'
                placeholder='Digite sua task'
                >
                </Input>
            </div>
            
            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            
            <div className="formRow">
                <Cycles/>
            </div>

            <div className="formRow">
                <Button icon={<PlayCircleIcon/>}>Enviar</Button>
                {/* <Button icon={<StopCircleIcon/>} color='red'>Enviar</Button> */}
            </div>
        
        </form>
    )
}