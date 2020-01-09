import React from 'react';
import { 
    CssBaseline,
    Box,
    Container,
    Typography,
    Divider,
    Button,
    makeStyles
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import UserInfoItem from './UserInfoItem';
import PostMarkdown from './PostMarkdown';
import Loader from './Loader';
import { fetchPost } from '../actions/posts';

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
}))

function Post(props) {
    const classes = useStyles();
    const { postId } = useParams();
    const { post, user, fetchPost } = props;

    React.useEffect(() => {
        fetchPost(postId)
    }, [fetchPost, postId])

    if (!post) {
        return <Loader />
    }

    const del = () => {

    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <Box bgcolor='#424242'>
                <Container className={classes.banner} maxWidth='lg'>
                    <Typography variant='h4' className={classes.username}>
                        { post.title }
                    </Typography>
                    <Box display='flex'>
                        <UserInfoItem theme='dark' post={post}/>
                        {post.author.id === user?.id &&
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
                    </Box>
                </Container>
            </Box>
            <Container maxWidth='lg' className={classes.posts}>
                <PostMarkdown contents={post.contents}/>
                <Divider />
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    post: state.blog.post,
    user: state.auth.user
})

export default connect(mapStateToProps, { fetchPost })(Post);
