import { useState } from 'react'
import Home from './pages/home/Home'
import './App.scss';
import './App.less';
import Advisor from './pages/advisor/Advisor';


function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Home />
            {/* <Advisor/> */}
        </div>
    )
}

export default App
