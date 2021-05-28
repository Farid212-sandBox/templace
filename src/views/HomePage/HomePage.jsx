import React from 'react'
import './HomePage.css'

import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Main from '../../components/Main'

const HomePage = () => {
    return (
        <div className="HomePage">
            <Nav />
            <Header />
            <Main />
        </div>
    )
}

export default HomePage
