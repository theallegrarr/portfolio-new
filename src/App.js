import React from 'react';
import image from './headshot.png';
import library from './gear.png';
import ruler from './ruler.png';
import server from './laptop.png';
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
            <span role='img' aria-label="thumb">A full-stack developer passionate about creating. 👍</span>
            <p>I am a full-stack freelance developer and AWS consultant specialising in web and mobile apps and their supporting architecture, 
            integrating with the latest AWS solutions.</p>
            <p>Widely experienced, I have worked in the industry for 15 years including running a hosting company and a software development agency. 
            I am AWS Certified and offer consultancy and freelance support in Macclesfield and Manchester.
            Quick to understand and identify a solution, I provide a thorough service that delivers top results using the most appropriate technology. </p>
          </div>
          <div className='img-area'>
            <img src={image} alt='face'></img>
          </div>
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
            <li>Apache</li>
          </ul>
        </div>
      </div>
      </div>

    </div>
  );
}

export default App;
