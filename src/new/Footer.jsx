import React from 'react'

import chat from './assets/message.svg'

export default function Footer(){

    return(
        <>
            <div className="contact-me">
                <h1>Have a Project for Me?</h1>
                <p>
                    Let’s have a conversation! I’d love to hear about what you’re working on and find a way to work together.
                </p>
                <button href="" className="contact">
                    <img src={chat} alt="chat" /> 
                    Let's Chat!
                </button>
            </div>
        </>
    )
}