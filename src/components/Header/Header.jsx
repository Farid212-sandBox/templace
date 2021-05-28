import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'
import { HeaderLinks } from '../../constants/index'

const Header = () => {
    return (
        <div className="Header">
            <ul>
                {HeaderLinks.map((el, key)=>(
                    <li key={key}>
                        <Link to={el.to}>{el.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Header
