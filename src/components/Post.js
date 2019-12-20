import React from 'react';
import { useParams } from 'react-router-dom'

function Post() {
    const { post_id } = useParams()
    return (
        <p>Post page {post_id}</p>
    )
}

export default Post;
