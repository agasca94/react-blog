import React from 'react';
import { Typography, Divider, makeStyles } from '@material-ui/core';
import UserInfoItem from './UserInfoItem';
import PostMarkdown from './PostMarkdown';

const useStyles = makeStyles(theme => ({
    post: {
        padding: theme.spacing(3, 0)
    },
}))

function Post(props) {
    const { post } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.post}>
                <Typography variant='h5'>
                    {post.title}
                </Typography>
                <UserInfoItem post={post} />
                <PostMarkdown contents={post.contents}/>
            </div>
            <Divider />
        </React.Fragment>
    )
}

export default Post;
