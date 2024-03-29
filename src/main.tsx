import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'antd/dist/antd.css';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>

    </React.StrictMode>
)
