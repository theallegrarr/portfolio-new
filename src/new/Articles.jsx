import React, {useState, useEffect} from 'react'
import axios from 'axios'

import  {config} from './utils/get_articles'


export default function Articles(){
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

    return(
        <>
            <h1 className="a-heading">
                Articles
            </h1>
            {
                articles.map((article, i) => (
                    <div key={i} className="l-article">
                        <p className="date">
                            {new Date(article.published_timestamp).toString()}
                        </p>
                        <h3 className="l-header">
                            {article.title}
                        </h3>
                        <h4 className="snippet">
                            {article.description}
                        </h4>
                        <a className="date" href={article.url}  target="_blank" rel="noopener noreferrer" >
                            Read more...
                        </a>
                    </div>
                ))
            }
        </>
    )
}