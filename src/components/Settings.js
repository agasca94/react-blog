import React from 'react';
import Container from '@material-ui/core/Container'
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    settings: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(1)
    }
}))

function Settings() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth='lg'>
                <Header title='YABA'/>
            </Container>

            <Box maxWidth='lg' className={classes.settings}>
                <Typography variant='h4'>
                    Your Settings
                </Typography>
                <form>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="bio"
                        label="Bio"
                        name="bio"
                        multiline
                        rows='6'
                    />
                    <Box display='flex' justifyContent='flex-end'>
                        <Button variant="contained" color="primary" disableElevation size='large'>
                            Save
                        </Button>
                    </Box>
                </form>
            </Box>
        </React.Fragment>
    );
}

export default Settings;
