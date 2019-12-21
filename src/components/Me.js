import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import BlogMainContent from './BlogMainContent';
import SettingsIcon from '@material-ui/icons/Settings';
import { Box, Avatar, Typography, Container, Button } from '@material-ui/core';
import { Link as ReactLink } from 'react-router-dom';

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
    username: {
        color: theme.palette.common.white
    },
    posts: {
        marginTop: theme.spacing(2)
    },
    settingsButton: {
        color: theme.palette.grey[400],
        borderColor: theme.palette.grey[400],
        marginTop: theme.spacing(2)
    }
}))

function Me() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth='lg'>
                <Header title='YABA'/>
            </Container>
            <Box
                bgcolor='primary.main'
            >
                <Container className={classes.banner} maxWidth='sm'>
                    <Avatar 
                        align='center'
                        className={classes.large} 
                        src='https://static.productionready.io/images/smiley-cyrus.jpg'/>
                    <Typography variant='h4' className={classes.username}>
                        agasca
                    </Typography>
                    <Button
                        to='/settings'
                        component={ReactLink}
                        size='small'
                        variant='outlined'
                        className={classes.settingsButton}
                        startIcon={<SettingsIcon />}
                    >
                        Edit
                    </Button>
                </Container>
            </Box>
            <Container maxWidth='md' className={classes.posts}>
                <Typography paragraph>
                    A bit about me...
                </Typography>
                <BlogMainContent title='Mis publicaciones' posts={[]}></BlogMainContent>
            </Container>
        </React.Fragment>
    )
}

export default Me;
