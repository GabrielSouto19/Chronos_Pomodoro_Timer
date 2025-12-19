// import { Heading } from './components/Heading'
import { Container } from './components/Container'
import { Menu } from './components/Menu'
import { Logo } from './components/Logo'
import { CountDown } from './components/CountDown'

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
        <label htmlFor="task" >Task</label>
        <input type="text"placeholder='Sua Task' id='task' />
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