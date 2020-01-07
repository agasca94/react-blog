import React from 'react';
import {
    CircularProgress,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    loader: {
        position: 'absolute',
        left: '50%',
        top: '40%'
    }
}))

function Loader() {
    const classes = useStyles();

    return <CircularProgress size={80} className={classes.loader}/>;
}

export default Loader;
