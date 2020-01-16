import React from 'react';
import { 
    Card,
    CardContent,
    Typography,
    makeStyles
} from '@material-ui/core';
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
    const { comment } = props;
    const classes = useStyles();
    
    return (
        <div className={classes.cardContainer}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <UserInfoItem post={comment}/>
                    <Typography  variant="body1" component="p">
                        {comment.contents}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default CommentCard;
