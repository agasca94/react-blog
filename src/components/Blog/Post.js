import React from 'react';
import { 
    CssBaseline,
    Box,
    Container,
    Typography,
    Divider,
    Button,
    Chip,
    Avatar,
    makeStyles,
} from '@material-ui/core';
import { 
    Edit,
    Delete,
    Favorite 
} from '@material-ui/icons';
import { 
    Link, 
    useParams, 
    useHistory 
} from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'components/Loader';
import CommentListContainer from './CommentListContainer';
import UserInfoItem from './UserInfoItem';
import PostMarkdown from './PostMarkdown';
import { 
    fetchPost, 
    fetchComments, 
    deletePost,  
    favoritePost, 
    unloadPost 
} from 'actions/post';

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
        marginTop: theme.spacing(2),
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
    tagsContainer: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}))

function Post(props) {
    const classes = useStyles();
    const history = useHistory();
    const { postId } = useParams();
    const { 
        post, 
        author, 
        currentUser,
        fetchPost,
        fetchComments,
        unloadPost,

        deletePost, 
        favoritePost, 
    } = props;

    React.useEffect(() => {
        fetchPost(postId)
        fetchComments(postId)

        return () => unloadPost()
    }, [fetchPost, fetchComments, postId, unloadPost])

    const onDelete = () => 
        deletePost(postId)
            .then(res => 
                !res.error && history.replace('/blog')
            )

    if (!post) return <Loader />

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
                                    onClick={onDelete}
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
                <div className={classes.tagsContainer}>
                    {post.tags?.map(tag => (
                        <Chip
                            style={{marginRight: '8px'}}
                            key={tag}
                            variant='outlined'
                            color="secondary" 
                            label={`#${tag}`}
                            avatar={<Avatar>{tag[0]}</Avatar>} 
                        />
                    ))}
                </div>
                <Divider />
            </Container>
            
            <Container maxWidth='md' className={classes.commentsContainer}>
                <CommentListContainer postId={postId} />
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps = ({ auth, posts, users }) => {
    const { currentUser } = auth.data;
    const { currentPostId, byId: postsById } = posts.data;
    const { byId: usersById } = users.data;

    const currentPost = postsById[currentPostId];
    const author = usersById[currentPost?.author];

    return {
        post: currentPost,
        author,
        currentUser,
    }   
}

export default connect(
    mapStateToProps, 
    { 
        fetchPost, 
        fetchComments, 
        deletePost,
        favoritePost, 
        unloadPost 
    }
)(Post);
