// import { Heading } from './components/Heading'
import { Container } from './components/Container'
import { Menu } from './components/Menu'
import { Logo } from './components/Logo'
import { CountDown } from './components/CountDown'
import { Input } from './components/Input'
import { Cycles } from './components/Cycles'
import { Button } from './components/Button'

import './styles/theme.css'
import './styles/global.css'
import {  PlayCircleIcon } from 'lucide-react'

export function App(){
  
  return <>
  <Container>
    <Logo/>
  </Container>
  
  <Container>
    <Menu>

    </Menu>
    
  </Container>
  
  <Container>
    <CountDown></CountDown>  
  </Container>

  
  <Container>
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
      </div>




    </form>
  </Container>










  </>

};