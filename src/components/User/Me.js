import React from 'react';
import { Settings, ExitToApp } from '@material-ui/icons';
import { 
    Box, 
    Avatar, 
    Typography, 
    Container, 
    Button,
    CssBaseline,
    makeStyles
} from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'components/Loader';
import { fetchUser, fetchFavorites, fetchUserPosts, unloadProfile } from 'actions/user';
import { signOut } from 'actions/auth';
import UserPosts from './UserPosts';

const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    banner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30vh'
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
    settingsButton: {
        marginRight: theme.spacing(1),
        color: theme.palette.grey[300],
        borderColor: theme.palette.grey[300],
    },
    logoutButton: {
        color: theme.palette.error.light,
        borderColor: theme.palette.error.light,
    },
}))

function UserActions({ signOut, classes }) {

    return (
        <Container className={classes.bannerActions}>
            <Button
                to='/settings'
                component={Link}
                size='small'
                variant='outlined'
                className={classes.settingsButton}
                startIcon={<Settings/>}
            >
                Edit
            </Button>
            <Button
                onClick={signOut}
                size='small'
                variant='outlined'
                className={classes.logoutButton}
                startIcon={<ExitToApp/>}
            >
                Logout
            </Button>
        </Container>
    );
}

function Me(props) {
    const classes = useStyles();
    const { username } = useParams();
    const {
        fetchUser, 
        fetchFavorites, 
        fetchUserPosts, 
        signOut, 
        unloadProfile,
        currentUser,
        fetchedUser
    } = props;
    const user = username ? fetchedUser : currentUser;

    React.useEffect(() => {
        if (username) {
            fetchUser(username);
            fetchFavorites(username);
            fetchUserPosts(username);
        }
    }, [fetchUser, fetchFavorites, fetchUserPosts, username]);

    React.useEffect(() => {
        const currentUsername = currentUser?.username;
        if (!username && currentUsername) {
            fetchFavorites(currentUsername);
            fetchUserPosts(currentUsername);
        }
    }, [fetchUser, fetchFavorites, fetchUserPosts, currentUser, username]);

    React.useEffect(() => () => unloadProfile(), [unloadProfile]);

    const userActions = currentUser ? 
        UserActions({ signOut, classes }) : 
        null;

    if (!user) return <Loader/>

    return (
        <React.Fragment>
            <CssBaseline/>
            <Box bgcolor='primary.main'>
                <Container className={classes.banner} maxWidth='sm'>
                    <Avatar 
                        align='center'
                        className={classes.large} 
                        src={user.picture}/>
                    <Typography variant='h4' className={classes.username}>
                        {user.username}
                    </Typography>
                    {userActions}
                </Container>
            </Box>
            <Container maxWidth='md' className={classes.posts}>
                <Typography paragraph>
                    {user.bio}
                </Typography>

                <UserPosts/>
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = ({ auth, users }) => {
    return {
        currentUser: auth.data.currentUser,
        fetchedUser: users.data.byId[users.data.currentUserId]
    }
}

export default connect(
    mapStateToProps, 
    { 
        signOut, 
        fetchUser, 
        fetchFavorites, 
        fetchUserPosts, 
        unloadProfile 
    }
)(Me);
