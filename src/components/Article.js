import React from 'react';


const Article = ({ title, date, preview }) => {
    return (
        <article>
            <h3> {title} </h3>
            <small>{date ? date : 'December 25, 2022'}</small>
            <p> {preview} </p>
        </article>
    )
};

export default Article;