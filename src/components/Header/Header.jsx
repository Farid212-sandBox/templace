import React from 'react'
import './Header.css'

import { HeaderInfo } from '../../constants/index'

const Header = () => {
    return (
        <div className="Header" style={{backgroundImage: `url(${HeaderInfo.imageLink})`, height: HeaderInfo.height}}>
            <h1>{HeaderInfo.title}</h1>
        </div>
    )
}

export default Header
