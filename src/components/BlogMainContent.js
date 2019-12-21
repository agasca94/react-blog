import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Post from './Post';

function BlogMainContent(props) {
    const { posts, title } = props;
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                {title} 
            </Typography>
            <Divider/>
            {posts.map(post => 
                <Post key={post.id} post={post}></Post>
            )}
        </Grid>
    );
}

export default BlogMainContent;
