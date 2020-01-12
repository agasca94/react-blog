import React from 'react';
import { makeStyles, 
    Grid, 
    Paper, 
    CssBaseline 
} from '@material-ui/core';
import {
    Route,
    Switch
} from 'react-router-dom';
import AuthLayout from './AuthLayout';

const useStyles = makeStyles(_ => ({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
}));

function Auth() {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Switch>
                    <Route path='/login'>
                        <AuthLayout type='login'/>
                    </Route>

                    <Route path='/register'>
                        <AuthLayout type='register'/>
                    </Route>

                    <Route path='/'>
                        <AuthLayout type='login'/>
                    </Route>
                </Switch>
            </Grid>
        </Grid>
    )
}

export default Auth;
