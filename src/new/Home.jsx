import React from 'react';

import {list} from './utils/badges'

import "./style.css"

/**
 * 
 * @todo
 * 1, Latest Videos (YT API)
 * 2, Latest Articles
 * 3, My Activity (GitHub)
 * 4, Tech Stack Icons 
 */

export default function HomeX() {


  return (<div>
    <div className="cta-text">
        <h3>
            I’m Nurudeen, Full Stack Developer.
        </h3>
        <p className="more-info">
            I specialize in rapidly prototyping software companies and web applications. 
            I talk about my journey on <a href="https://www.youtube.com/channel/UCvF499ChQBnWb5ex162EiMg"  target="_blank" rel="noopener noreferrer">Youtube</a>, 
            commit code to <a className="git" href="https://github.com/theallegrarr"  target="_blank" rel="noopener noreferrer">Github</a>, 
            and tell stories on <a className="dev" href="https://dev.to/theallegrarr"  target="_blank" rel="noopener noreferrer">DEV</a>
        </p>
    </div>
    <div className="badges">
        {list.map((item, i) => (
            <div key={i} className="badge" id="java-badge">
                <img className="icons" id={`${item.name}-icon`} src={item.icon} alt={item.name} />
                <h4>{item.name}</h4>
            </div>
        ))}
    </div>
  </div>)
}