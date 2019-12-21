import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import Post from './Post';

function BlogMainContent(props) {
    const { posts, title } = props;
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {title} 
            </Typography>
            <Divider/>
            {posts.map(post => 
                <Post key={post.id} post={post}></Post>
            )}
        </React.Fragment>
    );
}

export default BlogMainContent;
