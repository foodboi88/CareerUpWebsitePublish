import React from 'react'
import CFooter from '../../components/CFooter'
import CHeader from '../../components/CHeader'
import Advisor from '../advisor/Advisor'

const Home = () => {
    return (
        <div>
            <CHeader />
            <Advisor/>
            <CFooter />
        </div>
    )
}

export default Home