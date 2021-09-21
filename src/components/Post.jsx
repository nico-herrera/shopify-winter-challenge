import React, { useState } from 'react';
import '../styles/Post.css';

const Post = ({apod}) => {
    const [liked, setLiked] = useState(false)

    return (
        <section className="post-container center">
            <img src={apod.url} alt={`Nasa's APOD of the Day: ${apod.title}`} className="post-img"/>
            <h2 className="post-title">{apod.title} <span className="post-date">{apod.date}</span></h2>
            <p className="post-explanation">{apod.explanation}</p>
            {liked ?
                    <button className={`post-button ${liked ? 'liked' : null}`} onClick={() => setLiked(!liked)}>Unlike</button> 
                    :
                    <button className={`post-button ${liked ? null : 'not-liked'}`} onClick={() => setLiked(!liked)}>Like</button>}
        </section>
        )
}

export default Post;