import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';
import { Link as ReactLink } from 'react-router-dom'
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { login, register } from '../actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(8, 0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    }
}));

function registerLink() {
    return (
        <Link to='/register' component={ReactLink} variant="body2">
            Don't have an account? Sign up
        </Link>
    );
}

function loginLink() {
    return (
        <Link to='/login' component={ReactLink} variant="body2">
            Already have an account? Sign in
        </Link>
    );
}

function Login(props) {
    const classes = useStyles();
    const { type } = props;
    const form = type === 'login' ? <LoginForm onLogin={props.login}/> : <RegisterForm onRegister={props.register}/>;
    const bottomLink = type === 'login' ? loginLink() : registerLink();

    return(
        <Container className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                {type === 'login' ? 'Sign In' : 'Sign Up'}
            </Typography>
            {form}
            <Grid container>
                <Grid item xs>
                    {bottomLink}
                </Grid>
            </Grid>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );
}

export default connect(null, { login, register })(Login);
