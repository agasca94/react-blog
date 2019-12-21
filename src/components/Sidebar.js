import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {Link  as ReactLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200]
    },
    sidebarSection: {
        marginTop: theme.spacing(3)
    }
}))

export default function Sidebar(props){
    const classes = useStyles();
    const { description, title, archives } = props;
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant='h6' gutterBottom>
                    {title}
                </Typography>
                <Typography>{description}</Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archives
            </Typography>
            {archives.map(archive => (
                <Link to={archive.url} component={ReactLink} display='block' variant='body1' key={archive.title}>
                    {archive.title}
                </Link>
            ))}
        </Grid>
    );
}

Sidebar.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    archives: PropTypes.array
}
