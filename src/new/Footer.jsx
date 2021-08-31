import React from 'react'

import chat from './assets/message.svg'
import linkedin from './assets/linkedin.svg'
import gmail from './assets/gmail.svg'

export default function Footer(){

    return(
        <>
            <div className="contact-me">
                <h1>Have a Project for Me?</h1>
                <p>
                    Let’s have a conversation! I’d love to hear about what you’re working on and find a way to work together.
                </p>
                <a href="mailto:nurudeen.amedu@gmail.com" className="contact">
                    <img src={chat} alt="chat" /> 
                    Let's Chat!
                </a>
            </div>
            <div className="footer padded">
                <div className="f-container">
                    <div className="lines">
                        <p className="line">
                            Implemented with React by Nurudeen Amedu 
                        </p>
                        <p className="line">
                            Design inspired by <a href="https://www.figma.com/community/file/824810955262478067"  target="_blank" rel="noopener noreferrer">Ryan Warner</a>
                        </p>
                        <p className="line">
                            Icons from <a href="https://icons8.com"  target="_blank" rel="noopener noreferrer">Icons8</a> and <a href="https://www.flaticon.com"  target="_blank" rel="noopener noreferrer">FlatIcon</a>
                        </p>
                    </div>
                    <div className="f-icons">
                        <a className="first-icon" href="https://www.linkedin.com/in/nurudeen-amedu/"  target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linked in"/>
                        </a>
                        <a className="s-icon" href="mailto:nurudeen.amedu@gmail.com"  target="_blank" rel="noopener noreferrer">
                            <img src={gmail} alt="gmail" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}