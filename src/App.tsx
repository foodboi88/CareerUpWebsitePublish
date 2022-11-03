import { useState } from 'react'
import { Provider } from 'react-redux';
import Home from './pages/home/Home'
import './App.scss';
import './App.less';
import Advisor from './pages/advisor/Advisor';
import CMainRouter from './components/CMainRouter';
import './input.css'
import store from './redux/store';
import IdentityApi from './api/identity/identity.api';

function App() {
    const [count, setCount] = useState(0)

    useState(()=>{
        const token = localStorage.getItem('token')
        if(token) {
            IdentityApi.getCurrentUser().then((res: any)=>{
                console.log(res.data)
                localStorage.setItem('userInfo',JSON.stringify(res.data))
                console.log(localStorage.getItem('userInfo'))
            })
            
        }else{
            localStorage.removeItem('userInfo')

        }
    })

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
