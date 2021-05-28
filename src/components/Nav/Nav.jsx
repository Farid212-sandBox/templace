import React from 'react'
import './Nav.css'

import { Link } from 'react-router-dom'
import { NavLinks } from '../../constants/index'

const Nav = () => {
    return (
        <div className="Nav">
            <ul>
                {NavLinks.map((el, key)=>(
                    <li key={key}>
                        <Link to={el.to}>{el.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Nav
