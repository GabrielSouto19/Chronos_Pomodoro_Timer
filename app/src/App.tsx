// import { Heading } from './components/Heading'
import { Container } from './components/Container'
import { Menu } from './components/Menu'
import { Logo } from './components/Logo'
import { CountDown } from './components/CountDown'
import { Input } from './components/Input'

import './styles/theme.css'
import './styles/global.css'

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
          type='text'
          id='task'
          labelText='task'
          placeholder='Digite sua task'
          
        >task
        </Input>
      </div>

      
      <div className="formRow">
        <p>Nesse ciclo descanse por 5 min.</p>
      </div>

      
      <div className="formRow">
        <p>ciclos.</p>
        <p>0 0 0 0 0</p>
      </div>
      
      <div className="formRow">
        <button>Enviar</button>
      </div>




    </form>
  </Container>










  </>

};