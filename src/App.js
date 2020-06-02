import React from 'react';
import image from './headshot.png';
import library from './gear.png';
import ruler from './ruler.png';
import server from './laptop.png';
import github from './icons/github.svg';
import mail from './icons/gmail.svg';
import linkedin from './icons/linkedin.svg';
import youtube from './icons/youtube.svg';
import twitter from './icons/twitter.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <p>Nurudeen Amedu</p>
      </div>
      
      <div className='cta-container'>
        <div className='cta'>
          <div className='text'>
            <div className='icons'>
              <a 
              href="https://www.youtube.com/channel/UCvF499ChQBnWb5ex162EiMg" 
              target="_blank"
              rel="noopener noreferrer">
                <img src={youtube} alt='yt'/>
              </a>
              <a 
              href="https://github.com/theallegrarr" 
              target="_blank"
              rel="noopener noreferrer">
                <img src={github} alt='yt'/>
              </a>
              <a 
              href="https://www.linkedin.com/in/nurudeen-amedu/" 
              target="_blank"
              rel="noopener noreferrer">
                <img src={linkedin} alt='yt'/>
              </a>
              <a 
              href="https://twitter.com/GeekSawE" 
              target="_blank"
              rel="noopener noreferrer">
                <img src={twitter} alt='yt'/>
              </a>
              <a href="mailto:nurudeen.amedu@gmail.com">
                <img src={mail} alt='yt'/>
              </a>
            </div>
            <span role='img' aria-label="thumb">Full-stack developer with a passion for creating. 👍</span>
            <p>I am a full-stack developer specialising in web and mobile apps and their supporting architecture.</p>
            <p>Widely experienced, I have worked as a freelancer in the industry for over 3 years developing web and other desktop software for users and agencies. 
            I have a degree in Computer Science and have also completed the <a href="https://lambdaschool.com/courses/full-stack-web-development" alt="fs-wd" target="blank">Full Stack Web Development course at Lambda School</a>.
            I am a fast learner who is always result driven and solution oriented, I can provide a thorough service that delivers top results using the most appropriate technology.</p>
          </div>
          <div className='img-area'>
            <img src={image} alt='face'></img>
          </div>
        </div>
      </div>
      <div className='sec-menu-box'>
        <div className='sec-menu'>
          <a 
          href="https://medium.com/@nurudeen.amedu" 
          target="_blank"
          rel="noopener noreferrer"> Medium
          </a>
          <a 
          href="https://dev.to/theallegrarr" 
          target="_blank"
          rel="noopener noreferrer">
            <img src={youtube} alt='yt'/> DEV.to
          </a>
          <a 
          href="https://www.udemy.com/user/nurudeen-amedu/" 
          target="_blank"
          rel="noopener noreferrer">
            <img src={youtube} alt='yt'/> Udemy
          </a>
          <a 
          href="https://www.bitdegree.org/instructor/451457-nurudeen-amedu" 
          target="_blank"
          rel="noopener noreferrer">
            <img src={youtube} alt='yt'/> BitDegree
          </a>
        </div>
      </div>
      <div className='stacks-container'>
      <div className='stacks'>

        <div className='stack-card'>
        <div className='title'>
            <img src={ruler} alt='lib'></img>
            <h2>Languages</h2>
          </div>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>C++</li>
            <li>Java</li>
            <li>PHP</li>
            <li>HTML, CSS, LESS</li>
            <li>SQL</li>
            <li>C#</li>
          </ul>
        </div>
        <div className='stack-card'>
          <div className='title'>
            <img src={library} alt='lib'></img>
            <h2>Frameworks/Libraries</h2>
          </div>
          <ul>
            <li>React, Next.js</li>
            <li>Node.js</li>
            <li>Ionic 3,4,5</li>
            <li>Django</li>
            <li>Maven, Spring</li>
            <li>Green Sock Animation API (GSAP)</li>
            <li>MQL4, MQL5</li>
            <li>Quantopian</li>
            <li>cAlgo</li>
          </ul>
        </div>
        <div className='stack-card'>
          <div className='title'>
            <img src={server} alt='lib'></img>
            <h2>DevOps</h2>
          </div>
          <ul>
            <li>Amazon Web Services</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Nginx</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
      </div>

    </div>
  );
}

export default App;
