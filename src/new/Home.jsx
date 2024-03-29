import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {list,resolveIcon,tmoniList, bhlist} from './utils/badges'
import { config } from './utils/get_articles';

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
    const [articles, setArticles] = useState([])
    useEffect(() => {
        //GitHubCalendar(".calendar", "theallegrarr", { responsive: true });
        axios(config)
            .then(function (response) {
                setArticles(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


  return (<div>
    <div className="cta-text">
        <h3>
            I’m Nurudeen, Full Stack Developer.
        </h3>
        <p className="more-info">
            I specialize in rapidly devloping software applications for companies and individuals. 
            Visualize my process on <a href="https://www.youtube.com/channel/UCvF499ChQBnWb5ex162EiMg"  target="_blank" rel="noopener noreferrer">Youtube</a>, 
            check my repos <a className="git" href="https://github.com/theallegrarr"  target="_blank" rel="noopener noreferrer">Github</a>, 
            and read my stories on <a className="dev" href="https://dev.to/theallegrarr"  target="_blank" rel="noopener noreferrer">DEV</a>
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
    <div className="articles">
        <div className="header">
            <h1>Latest Articles</h1>
            <a className="dev" href="https://dev.to/theallegrarr"  target="_blank" rel="noopener noreferrer">follow me {">>"}</a>
        </div>
        <div className="latests">
            {articles.map((article, i) => (
                <div key={i} className="article">
                    <span className="title">
                        <img src={resolveIcon(article.tag_list)} alt={article.title} />
                        <a href={article.url}  target="_blank" rel="noopener noreferrer" >{article.title}</a>
                    </span>
                    <p className="date">
                        {new Date(article.published_timestamp).toString()}
                    </p>
                </div>
            ))}
        </div>
    </div>
    <div className="articles">
        <div className="header">
            <h1>Some Projects</h1>
            <a className="dev" href="https://github.com/theallegrarr"  target="_blank" rel="noopener noreferrer">my github {">>"}</a>
        </div>
        <div className="projects">
            <div className="project-card">
                <h2 className="project-head">
                    Thrivemoni
                </h2>
                <div className="badges">
                    {tmoniList.map((item, i) => (
                        <div key={i} className="badge" id="java-badge">
                            <img className="icons" id={`${item.name}-icon`} src={item.icon} alt={item.name} />
                            <h4>{item.name}</h4>
                        </div>
                    ))}
                </div>
                <p className="project-info">
                    Built and maintain featues for the admin and user area, also created an iOS app with SwiftUI
                </p>
                <a href="https://thrivemoni.com"  target="_blank" rel="noopener noreferrer" className="view-more">
                    View Project
                </a>
            </div>
            <div className="project-card blue">
                <h2 className="project-head">
                    BuyHoldTrack
                </h2>
                <div className="badges">
                    {bhlist.map((item, i) => (
                        <div key={i} className="badge" id="java-badge">
                            <img className="icons" id={`${item.name}-icon`} src={item.icon} alt={item.name} />
                            <h4>{item.name}</h4>
                        </div>
                    ))}
                </div>
                <p className="project-info">
                    Real Estate Inventory and tracking system which allows users to add, update and visualize data related to real estate properties they own
                </p>
                <a href="https://www.buyholdtrack.com"  target="_blank" rel="noopener noreferrer" className="view-more">
                    View Project
                </a>
            </div>
        </div>
    </div>
    <div className="articles bottom">
        <div className="header">
            <h1>GitHub Activity</h1>
            <a className="dev" href="https://github.com/theallegrarr"  target="_blank" rel="noopener noreferrer">my github {">>"}</a>
        </div>
        <div class="calendar">=
            Loading calendar...
        </div>
    </div>
  </div>)
}

// published_timestamp title tag_list url