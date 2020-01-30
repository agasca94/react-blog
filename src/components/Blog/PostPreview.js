import React from 'react';
import { Typography, 
    Divider,
    Button,
    Snackbar,
    makeStyles,
    Box
} from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
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
    const { post, author, currentUser, favoritePost } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const onClick = () => {
        if (currentUser) {
            favoritePost(post);
        } else {
            setOpen(true);
        }
    }
    return (
        <React.Fragment>
            <div className={classes.post}>
                <Box display='flex' alignItems='center'>
                    <div style={{flex: 1}}>
                        <UserInfoItem post={post} author={author} />
                    </div>
                    <Button
                        color='secondary'
                        size='small'
                        variant={post.is_favorited ? 'contained' : 'outlined'}
                        className={classes.button}
                        startIcon={<Favorite />}
                        onClick={onClick}
                    >
                        {post.favorites_count}
                    </Button>
                </Box>
                <Link className={classes.markdownLink} to={`/post/${post.id}`}>
                    <Typography variant='h6'>
                        {post.title}
                    </Typography>
                    <PostMarkdown contents={post.description}/>
                </Link>
            </div>
            <Divider />

            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                message="You need to login to favorite this post"
                autoHideDuration={4000}
                action={
                    <Button color="secondary" size="small" component={Link} to='/login'>
                        Log In
                    </Button>
                }
            />
        </React.Fragment>
    )
}

export default Post;
