import React from 'react';
import { Link,
    Box, 
    Avatar, 
    Grid, 
    Typography, 
    Container, 
    makeStyles 
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link as ReactLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Copyright from 'components/Copyright';
import WarningMessage from 'components/WarningMessage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { login, register } from 'actions/auth';

const types = {
    LOGIN: 'login',
    REGISTER: 'register'
}

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

const registerLink = () => (
    <Link to='/login' component={ReactLink} variant="body2">
        Already have an account? Sign in
    </Link>
);

const loginLink = () => (
    <Link to='/register' component={ReactLink} variant="body2">
        Don't have an account? Sign up
    </Link>
);

const loginForm = ({ login, error }) => 
    <LoginForm onLogin={login} errors={error?.errors}/>;

const registerForm = ({ register, error }) => 
    <RegisterForm onRegister={register} errors={error?.errors}/>;

function Login(props) {
    const classes = useStyles();
    const { type, error, user } = props;

    if (user) {
        return <Redirect to={'/blog'}/>
    }

    const form = type === types.LOGIN ? 
        loginForm(props) : 
        registerForm(props);

    const bottomLink = type === types.LOGIN ? 
        loginLink() : 
        registerLink();

    return(
        <Container className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                {type === types.LOGIN ? 'Sign In' : 'Sign Up'}
            </Typography>
            {form}
            <Grid container>
                <Grid item xs>
                    {bottomLink}
                </Grid>
            </Grid>
            {error &&
                <WarningMessage message={error.message}/>
            }
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );
}

const mapStateToProps = ({ auth: { data, state } }) => ({
    error: state.error,
    user: data.currentUser
})

export default connect(
    mapStateToProps, 
    { login, register }
)(Login);
