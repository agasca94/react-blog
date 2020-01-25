import React from 'react';
import { 
    CssBaseline,
    Box,
    Container,
    Typography,
    Divider,
    Button,
    makeStyles,
} from '@material-ui/core';
import { Edit, Delete, Favorite } from '@material-ui/icons';
import { Link, useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'components/Loader';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import UserInfoItem from './UserInfoItem';
import PostMarkdown from './PostMarkdown';
import { fetchPost, fetchComments, saveComment, deletePost, deleteComment, favoritePost } from 'actions/post';

const useStyles = makeStyles(theme => ({
    banner: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        height: '17vh'
    },
    bannerActions: {
        display: 'flex',
        marginTop: theme.spacing(2),
        justifyContent: 'center',
    },
    username: {
        color: theme.palette.common.white
    },
    posts: {
        marginTop: theme.spacing(2)
    },
    editButton: {
        margin: theme.spacing(0, 3),
        color: theme.palette.grey[300],
        borderColor: theme.palette.grey[300],
    },
    deleteButton: {
        color: theme.palette.error.light,
        borderColor: theme.palette.error.light,
    },
    favoriteButton: {
        margin: theme.spacing(0, 3),
    },
    commentsContainer: {
        marginTop: theme.spacing(4)
    },
}))

function Post(props) {
    const classes = useStyles();
    const { postId } = useParams();
    const history = useHistory();
    const { post, author, currentUser, token, comments, fetchPost, fetchComments, saveComment, deletePost, deleteComment, favoritePost } = props;

    React.useEffect(() => {
        fetchPost(postId)
        fetchComments(postId)
    }, [fetchPost, fetchComments, postId])

    if (!post) {
        return <Loader />
    }

    const del = () => 
        deletePost(postId)
            .then(res => !res.error && history.replace('/blog'))

    const onSaveComment = (contents, commentId) => 
        saveComment(postId, { contents }, commentId);

    return (
        <React.Fragment>
            <CssBaseline/>
            <Box bgcolor='#424242'>
                <Container className={classes.banner} maxWidth='lg'>
                    <Typography variant='h4' className={classes.username}>
                        { post.title }
                    </Typography>
                    <Box display='flex'>
                        <UserInfoItem theme='dark' author={author} post={post}/>
                        {author.id === currentUser?.id &&
                            <Box alignItems='center' display='flex'>
                                <Button
                                    to={`/editor/${postId}`}
                                    component={Link}
                                    size='small'
                                    variant='outlined'
                                    className={classes.editButton}
                                    startIcon={<Edit/>}
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={del}
                                    size='small'
                                    variant='outlined'
                                    className={classes.deleteButton}
                                    startIcon={<Delete/>}
                                >
                                    Delete
                                </Button>
                            </Box>
                        }
                        {author.id !== currentUser?.id && currentUser &&
                            <Box alignItems='center' display='flex'>
                                <Button
                                    color='secondary'
                                    size='small'
                                    variant={post.is_favorited ? 'contained' : 'outlined'}
                                    className={classes.favoriteButton}
                                    startIcon={<Favorite />}
                                    onClick={() => favoritePost(post)}
                                >
                                    {post.favorites_count}
                                </Button>
                            </Box>
                        }
                    </Box>
                </Container>
            </Box>
            <Container maxWidth='lg' className={classes.posts}>
                <PostMarkdown contents={post.contents}/>
                <Divider />
            </Container>

            <Container maxWidth='md' className={classes.commentsContainer}>
                {token &&
                    <CommentForm onPost={onSaveComment}/>
                }
                {comments.map(comment => 
                    <CommentCard 
                        key={comment.id} 
                        comment={comment} 
                        author={comment.author}
                        editable={comment.author.id === currentUser?.id}
                        onSave={contents => onSaveComment(contents, comment.id)}
                        onDelete={() => deleteComment(postId, comment.id)}
                    />
                )}
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps = ({ post, auth }) => {
    const { currentUser, token } = auth.data;
    const { currentPost, users, comments } = post.data;
    const author = users[currentPost?.author];

    const { allIds: commentsIds, byId: commentsById } = comments;
    const commentsArray = commentsIds.map(commentId => ({
        ...commentsById[commentId],
        author: users[commentsById[commentId].author]
    }))

    return {
        post: currentPost,
        author,
        comments: commentsArray,
        currentUser,
        token
    }   
}

export default connect(mapStateToProps, { fetchPost, fetchComments, saveComment, deletePost, deleteComment, favoritePost })(Post);
