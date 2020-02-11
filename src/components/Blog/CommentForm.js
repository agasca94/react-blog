import React from 'react';
import {
    Divider,
    Button,
    makeStyles,
    Paper,
    InputBase,
    Avatar
} from '@material-ui/core';
import { handleChange } from 'utils';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2,2),
        border: '1px solid rgba(0, 0, 0, 0.12)'
    },
    button: {
        color: theme.palette.common.white,
        backgroundColor: 'green',
        textTransform: 'none'
    },
    footer: {
        paddingTop: theme.spacing(1)
    },
    avatar: {
        float: 'right'
    }

}))

function CommentForm(props) {
    const classes = useStyles();
    const { onPost, currentUser } = props;
    const [comment, setComment] = React.useState('');
    const handle = handleChange(setComment);

    return (
        <Paper className={classes.root} elevation={0}>
            <InputBase 
                className={classes.input}
                placeholder='Write a comment...'
                fullWidth
                multiline
                rows='4'
                value={comment}
                onChange={handle}
            />
            <Divider/>
            <div className={classes.footer}>
                <Button onClick={() => onPost(comment)} className={classes.button}>
                    Post comment
                </Button>
                <Avatar 
                    className={classes.avatar} 
                    src={currentUser.picture}/>
            </div>
        </Paper>
    );
}

export default CommentForm;
