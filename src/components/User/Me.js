import React from 'react';
import { Settings, ExitToApp } from '@material-ui/icons';
import { 
    Box, 
    Avatar, 
    Typography, 
    Container, 
    Button,
    CssBaseline,
    Tabs,
    Tab,
    makeStyles
} from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogMainContent from 'components/Blog/BlogMainContent';
import Loader from 'components/Loader';
import { fetchUser, fetchFavorites, fetchUserPosts, unloadProfile } from 'actions/user';
import { signOut } from 'actions/auth';

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

function Me(props) {
    const classes = useStyles();
    const { username } = useParams();
    const { signOut, currentUser, fetchedUser, fetchUser, fetchFavorites, fetchUserPosts, owned, favorites, unloadProfile } = props;
    const user = username ? fetchedUser : currentUser;

    const [activeTab, setActiveTab] = React.useState(0);

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

    if (!user) {
        return <Loader/>
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <Box bgcolor='primary.main'>
                <Container className={classes.banner} maxWidth='sm'>
                    <Avatar 
                        align='center'
                        className={classes.large} 
                        src='https://static.productionready.io/images/smiley-cyrus.jpg'/>
                    <Typography variant='h4' className={classes.username}>
                        {user.username}
                    </Typography>
                    {!username &&
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
                    }
                </Container>
            </Box>
            <Container maxWidth='md' className={classes.posts}>
                <Typography paragraph>
                    {user.bio}
                </Typography>

                <Tabs
                    value={activeTab}
                    indicatorColor="secondary"
                    textColor="secondary"
                    onChange={(_, newValue) => setActiveTab(newValue)}
                >
                    <Tab label="My posts" />
                    <Tab label="Favorites" />
                </Tabs>
                {activeTab === 0 &&
                    <BlogMainContent title='' posts={owned}/>
                }
                {activeTab === 1 &&
                    <BlogMainContent title='' posts={favorites}/>
                }
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = ({ auth, users, posts, profile }) => {
    const postsById = posts.data.byId;
    const usersById = users.data.byId;
    const { favoritesIds, ownedIds } = profile.data;

    const favorites = favoritesIds?.map(postId => ({
        ...postsById[postId],
        author: usersById[postsById[postId].author]
    }))

    const owned = ownedIds?.map(postId => ({
        ...postsById[postId],
        author: usersById[postsById[postId].author]
    }))

    return {
        currentUser: auth.data.currentUser,
        fetchedUser: users.data.byId[users.data.currentUserId],
        favorites,
        owned
    }
}

export default connect(mapStateToProps, { signOut, fetchUser, fetchFavorites, fetchUserPosts, unloadProfile })(Me);
