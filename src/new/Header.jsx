import React from 'react'
import { Link } from 'react-router-dom'

import heart from './assets/Heart.svg'

export default function Header(){

    return(<div className="nav">
        <Link to="/"><img src={heart} alt="heart" />Nurudeen Amedu</Link>
        <div className="menu-items">
            <Link to="/articles">Articles</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/courses">Courses</Link>
        </div>
    </div>)
}