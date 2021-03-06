import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Toolbar, Button, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
        textDecoration: 'none'
    },
    actionButton: {
        marginLeft: theme.spacing(1),
        textTransform: 'none'
    }
}))

function LoggedOutActions(){
    const classes = useStyles();
    return (
        <Box>
            <Button 
                className={classes.actionButton} 
                to='/login' 
                component={Link} 
                variant='outlined' 
                size='small'
            >
                Sign In
            </Button>
        </Box>
    );
}

function LoggedInActions(currentUser) {
    const classes = useStyles();
    return (
        <Box>
            <Button 
                className={classes.actionButton} 
                to='/editor'
                component={Link}
                size='large'
                startIcon={<CreateIcon/>}
            >
                New post
            </Button>
            <Button 
                className={classes.actionButton} 
                to='/settings'
                component={Link}
                size='large'
            >
                Settings
            </Button>
            <Button
                className={classes.actionButton} 
                to={'/me'}
                component={Link}
                size='large'
            >
                {currentUser.username}
            </Button>
        </Box>
    );
}

export default function Header(props) {
    const classes = useStyles();
    const { title, currentUser } = props;
    const actions = currentUser ? LoggedInActions(currentUser) : LoggedOutActions();
    return (
        <Toolbar className={classes.toolbar}>
            <Typography
                component={Link}
                to='/blog'
                variant='h4'
                color='inherit'
                align='left'
                noWrap
                className={classes.toolbarTitle}
            >
                {title}
            </Typography>
            {actions}
        </Toolbar>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    currentUser: PropTypes.object
}
