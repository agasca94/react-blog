import React from 'react';
import { makeStyles, SnackbarContent } from '@material-ui/core';
import { amber } from '@material-ui/core/colors';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles1 = makeStyles(theme => ({
    warning: {
        backgroundColor: amber[700],
        width: '75%',
        marginTop: theme.spacing(2)
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));
  
function WarningMessage(props) {
    const classes = useStyles1();
    const { message } = props;
  
    return (
        <SnackbarContent
            className={classes.warning}
            aria-describedby="client-snackbar"
            message={
                <span className={classes.message}>
                    <WarningIcon/>
                    {message}
                </span>
            }
        />
    );
}

export default WarningMessage;
