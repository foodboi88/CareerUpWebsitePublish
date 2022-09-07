import { useState } from 'react'
import Home from './pages/home/Home'
import './App.scss';
import './App.less';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App
