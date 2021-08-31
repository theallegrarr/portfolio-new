import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {list,resolveIcon} from './utils/badges'
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
    <div className="articles">
        <div className="header">
            <h1>Latest Articles</h1>
            <a className="dev" href="https://dev.to/theallegrarr"  target="_blank" rel="noopener noreferrer">follow me {">>"}</a>
        </div>
        <div className="latests">
            {articles.map((article, i) => (
                <div key={i} className="article">
                    <a href={article.url}  target="_blank" rel="noopener noreferrer" className="title">
                        <img src={resolveIcon(article.tag_list)} alt={article.title} />
                        <h4>{article.title}</h4>
                    </a>
                    <p className="date">
                        {new Date(article.published_timestamp).toString()}
                    </p>
                </div>
            ))}
        </div>
    </div>
  </div>)
}

// published_timestamp title tag_list url