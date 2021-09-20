import React from 'react';
import Post from './Post'
import '../styles/PostsList.css'

const PostsList = ({nasaData}) => {

    return (
        <article>
            {nasaData.map((apod) => (
                    <Post apod={apod} key={apod.date} />
            ))}
        </article>
    )
}

export default PostsList;