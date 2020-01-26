import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Typography, Container, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { fetchPost, savePost } from 'actions/post';

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
    const { user, fetchPost, savePost, post, error } = props;

    const onSave = post => {
        savePost(post, postId)
            .then(res => 
                !res.error && history.push(`/post/${res.payload.result}`)
            )
    }

    React.useEffect(() => {
        if (postId && post && user) {
            if (post.author !== user.id) {
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
                <PostForm 
                    onSave={onSave} 
                    post={postId ? post : {}} 
                    errors={error?.errors} 
                />
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps = ({ posts, auth }) => ({
    post: posts.data.byId[posts.data.currentPostId],
    error: posts.state.error,
    user: auth.data.currentUser
})

export default connect(
    mapStateToProps,
    { fetchPost, savePost })
(Editor);
