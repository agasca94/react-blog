import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import PostPreview from './PostPreview';

function BlogMainContent(props) {
    const { posts, title } = props;
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {title} 
            </Typography>
            <Divider/>
            {posts.map(post => 
                <PostPreview key={post.id} post={post} />
            )}
        </React.Fragment>
    );
}

export default BlogMainContent;
