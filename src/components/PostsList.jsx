import React from 'react';
import Post from './Post'
import '../styles/PostsList.css'

const PostsList = ({nasaData}) => {

    return (
        <article styles={{height: '100%'}} className="post-list">
            {nasaData.map((apod) => (
                    <Post apod={apod} key={apod.date} />
            ))}
        </article>
    )
}

export default PostsList;