import { useState } from 'react'
import { Provider } from 'react-redux';
import Home from './pages/home/Home'
import './App.scss';
import './App.less';
import Advisor from './pages/advisor/Advisor';
import CMainRouter from './components/CMainRouter';
import './input.css'
import store from './redux/store';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Provider store={store}>
                <CMainRouter/>
            </Provider>

            
            {/* <Advisor/> */}
        </div>
    )
}

export default App
