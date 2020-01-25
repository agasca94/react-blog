import React from 'react';
import { 
    Card,
    CardContent,
    Typography,
    IconButton,
    CardActions,
    InputBase,
    makeStyles
} from '@material-ui/core';
import {
    Delete,
    Edit,
    Save,
    Cancel
} from '@material-ui/icons'
import UserInfoItem from './UserInfoItem';

const useStyles = makeStyles(theme => ({
    cardContainer: {
        padding: theme.spacing(1)
    },
    cardContent: {
        padding: theme.spacing(0,2,1,2)
    }
}));

function CommentCard(props) {
    const { comment, author, editable, onDelete, onSave } = props;
    const [editing, setEditing] = React.useState(false);
    const [commentDraft, setComment] = React.useState(comment.contents);
    const classes = useStyles();
    
    const saveComment = () => {
        onSave(commentDraft)
            .then(() => setEditing(false))
    }

    return (
        <div className={classes.cardContainer}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <UserInfoItem author={author} post={comment}/>

                    {!editing &&
                        <Typography  variant="body1" component="p">
                            {comment.contents}
                        </Typography>
                    }
                    {editing && 
                        <InputBase 
                            autoFocus
                            placeholder='Edit your comment...'
                            fullWidth
                            multiline
                            value={commentDraft}
                            onChange={e => setComment(e.target.value)}
                        />
                    }
                </CardContent>

                {editable && !editing &&
                    <CardActions>
                        <IconButton onClick={() => setEditing(true)} size='small'>
                            <Edit />
                        </IconButton>
                        <IconButton onClick={onDelete} size='small'>
                            <Delete />
                        </IconButton>
                    </CardActions>
                }
                {editable && editing &&
                    <CardActions>
                        <IconButton onClick={saveComment} size='small'>
                            <Save />
                        </IconButton>
                        <IconButton onClick={() => setEditing(false)} color='secondary' size='small'>
                            <Cancel />
                        </IconButton>
                    </CardActions>
                }
            </Card>
        </div>
    );
}

export default CommentCard;
