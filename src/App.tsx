import { useState } from 'react'
import Home from './pages/home/Home'
import {Container} from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className="App">
      <Home/>
    </Container>
  )
}

export default App
