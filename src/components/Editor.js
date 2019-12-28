import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchPost, createPost, updatePost } from '../actions/posts';
import PostForm from './PostForm';

const useStyles = makeStyles(theme => ({
    editor: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(1)
    }
}))

const Editor = (props) => {
    const classes = useStyles();
    const { postId } = useParams();
    const { fetchPost, createPost, updatePost, post } = props;
    const onSave = post => 
        postId ? 
            updatePost(postId, post) : 
            createPost(post)

    React.useEffect(() => {
        if (postId) fetchPost(postId)
    }, [postId, fetchPost]);

    return (
        <React.Fragment>
            <Container maxWidth='md' className={classes.editor}>
                <Typography variant='h4' align='center'>
                    {postId ? 'Edit post' : 'New post'}
                </Typography>
                <PostForm onSave={onSave} post={post} />
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    post: state.blog.post
})

export default connect(
    mapStateToProps,
    { fetchPost, createPost, updatePost })
(Editor);
