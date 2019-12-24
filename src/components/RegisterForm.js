import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
    const [email, setEmail] = React.useState('a');
    const [password, setPassword] = React.useState('pass');
    const [name, setName] = React.useState('a');
    const [username, setUsername] = React.useState('ironmaiden');
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
                onClick={() => props.onRegister(name, username, email, password)}
            >
                    Sign Up
            </Button>
        </form>
    );
}

export default RegisterForm;
