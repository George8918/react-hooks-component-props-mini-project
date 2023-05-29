import React from 'react';

function Article({title,date,preview}) {
    const formattedDate = date || "January 1, 1970";

    return (
        <article>
            <h3>{title}</h3>
            <small>{formattedDate}</small>
            <P>{preview}</P>
        </article>
    )
}
export default Article;