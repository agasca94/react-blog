import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
}))

export default function Header(props) {
    const classes = useStyles();
    const { title } = props;
    return (
        <Toolbar className={classes.toolbar}>
            <Typography
                component='h2'
                variant='h5'
                color='inherit'
                align='center'
                noWrap
                className={classes.toolbarTitle}
            >
                {title}
            </Typography>
            <Button variant='outlined' size='small'>
                Sign Up
            </Button>
        </Toolbar>
    );
}

Header.propTypes = {
    title: PropTypes.string
}
