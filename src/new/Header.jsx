import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import heart from './assets/Heart.svg'

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false)
    const animate = () => {
        setMenuOpen(!menuOpen)
    }

    return(<div className="nav">
        <Link to="/"><img src={heart} alt="heart" />Nurudeen Amedu</Link>
        <div className="menu-items">
            <Link to="/articles">Articles</Link>
            {/* <Link to="/videos">Videos</Link>
            <Link to="/courses">Courses</Link> */}
            <a href="mailto:nurudeen.amedu@gmail.com" className="nav-contact">
                Let's Chat!
            </a>
        </div>

        <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={(e) => {
            e.preventDefault()
            animate()
        }}>
            <div className="menu-btn__burger"></div>
        </div>

        
        <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
            <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                <Link to="/articles">Articles</Link>
                {/* <Link to="/videos">Videos</Link>
                <Link to="/courses">Courses</Link> */}
                <a href="mailto:nurudeen.amedu@gmail.com" className="nav-contact">
                    Let's Chat!
                </a>
            </ul>
        </div>

    </div>)
}