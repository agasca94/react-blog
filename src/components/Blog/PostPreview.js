import React from 'react';
import { Typography, Divider, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import UserInfoItem from './UserInfoItem';
import PostMarkdown from './PostMarkdown';

const useStyles = makeStyles(theme => ({
    post: {
        paddingBottom: theme.spacing(3)
    },
    markdownLink: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))

function Post(props) {
    const { post } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.post}>
                <UserInfoItem post={post} />

                <Link className={classes.markdownLink} to={`/post/${post.id}`}>
                    <Typography variant='h6'>
                        {post.title}
                    </Typography>
                    <PostMarkdown contents={post.description}/>
                </Link>
            </div>
            <Divider />
        </React.Fragment>
    )
}

export default Post;
