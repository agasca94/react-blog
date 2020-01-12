import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Typography, Container, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { fetchPost, createPost, updatePost } from 'actions/posts';

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
    const { user, fetchPost, createPost, updatePost, post, error } = props;
    const savePost = post => 
        postId ? 
            updatePost(postId, post) : 
            createPost(post)
    const onSave = post => {
        savePost(post)
            .then(res => 
                !res.error && history.push(`/post/${res.post.id}`)
            )
    }

    React.useEffect(() => {
        if (postId && post && user) {
            if (post.author.id !== user.id) {
                history.replace('/blog')
            }
        }
    }, [postId, post, user, history])

    React.useEffect(() => {
        if (postId) fetchPost(postId)
    }, [postId, fetchPost]);

    return (
        <React.Fragment>
            <Container maxWidth='md' className={classes.editor}>
                <Typography variant='h4' align='center'>
                    {postId ? 'Edit post' : 'New post'}
                </Typography>
                <PostForm onSave={onSave} post={postId ? post : {}} errors={error?.errors} />
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    post: state.blog.post,
    error: state.blog.error,
    user: state.auth.user
})

export default connect(
    mapStateToProps,
    { fetchPost, createPost, updatePost })
(Editor);
