import { useState } from 'react'
import Home from './pages/home/Home'
import './App.scss';
import './App.less';
import Advisor from './pages/advisor/Advisor';
import CMainRouter from './components/CMainRouter';


function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <CMainRouter/>
            {/* <Advisor/> */}
        </div>
    )
}

export default App
