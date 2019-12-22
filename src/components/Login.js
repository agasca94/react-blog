import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';
import { Link as ReactLink } from 'react-router-dom'
import { Container } from '@material-ui/core';
import authStyles from './authStyles';

function Login() {
    const classes = authStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleChange = setter => e => setter(e.target.value);

    return(
        <Container className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign In
            </Typography>
            <form className={classes.form}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={handleChange(setEmail)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handleChange(setPassword)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link to='/register' component={ReactLink} variant="body2">
                            Don't have an account? Sign up
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </form>
        </Container>
    );
}

export default Login;
