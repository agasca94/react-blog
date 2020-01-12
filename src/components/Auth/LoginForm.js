import React from 'react';
import { makeStyles, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function LoginForm(props) {
    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleChange = setter => e => setter(e.target.value);

    return (
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
                error={props.errors?.hasOwnProperty('email')}
                helperText={props.errors?.email}
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
                error={props.errors?.hasOwnProperty('password')}
                helperText={props.errors?.password}
                onChange={handleChange(setPassword)}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => props.onLogin(email, password)}
            >
                Sign In
            </Button>
        </form>
    );
}

export default LoginForm;
