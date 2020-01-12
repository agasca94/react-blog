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

function RegisterForm(props) {
    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const handleChange = setter => e => setter(e.target.value);

    return (
        <form className={classes.form}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                value={name}
                error={props.errors?.hasOwnProperty('name')}
                helperText={props.errors?.name}
                onChange={handleChange(setName)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                value={username}
                error={props.errors?.hasOwnProperty('username')}
                helperText={props.errors?.username}
                onChange={handleChange(setUsername)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
                onClick={() => props.onRegister(name, username, email, password)}
            >
                    Sign Up
            </Button>
        </form>
    );
}

export default RegisterForm;
