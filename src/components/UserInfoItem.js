import React from 'react';
import { Link, 
    Avatar, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    Typography,
    makeStyles
} from '@material-ui/core';
import { Link as ReactLink } from 'react-router-dom';
import { formatDate } from './dateUtils';

const useStyles = makeStyles(theme => ({
    whiteText: {
        color: theme.palette.common.white
    },
    greyText: {
        color: theme.palette.grey[500]
    },
    primaryText: {
        color: theme.palette.primary
    },
    secondaryText: {
        color: theme.palette.text.secondary
    }
}))

function UserInfoItem(props) {
    const { post, theme } = props;
    const date = new Date(post.created_at);
    const classes = useStyles();
    const lightTheme = theme === 'light';

    return (
        <ListItem disableGutters>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://static.productionready.io/images/smiley-cyrus.jpg" />
            </ListItemAvatar>
            <ListItemText 
                primary={
                    <Link className={lightTheme ? classes.primaryText : classes.whiteText} component={ReactLink} to={`@${post.author.username}`}>
                        <Typography variant='h6'>
                            {post.author.username}
                        </Typography>
                    </Link>
                }
                secondary={formatDate(date)}
                secondaryTypographyProps={{
                    className: lightTheme ? classes.secondaryText : classes.greyText
                }}
            />
        </ListItem>
    );
}

UserInfoItem.defaultProps = {
    theme: 'light'
}

export default UserInfoItem;
