import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams, useHistory } from 'react-router-dom';
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
    const history = useHistory();
    const { fetchPost, createPost, updatePost, post, error } = props;
    const savePost = post => 
        postId ? 
            updatePost(postId, post) : 
            createPost(post)
    const onSave = post => {
        savePost(post)
            .then(res => !res.error && history.push('/blog'))
    }

    React.useEffect(() => {
        if (postId) fetchPost(postId)
    }, [postId, fetchPost]);

    return (
        <React.Fragment>
            <Container maxWidth='md' className={classes.editor}>
                <Typography variant='h4' align='center'>
                    {postId ? 'Edit post' : 'New post'}
                </Typography>
                <PostForm onSave={onSave} post={post} errors={error?.errors} />
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    post: state.blog.post,
    error: state.blog.error
})

export default connect(
    mapStateToProps,
    { fetchPost, createPost, updatePost })
(Editor);
