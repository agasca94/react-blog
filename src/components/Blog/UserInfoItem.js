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
import { formatDate } from 'utils';

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
    },
    itemRoot: {
        width: 'inherit'
    }
}))

function UserInfoItem(props) {
    const { post, author, theme } = props;
    const date = new Date(post.created_at);
    const classes = useStyles();
    const lightTheme = theme === 'light';

    return (
        <ListItem disableGutters className={classes.itemRoot}>
            <ListItemAvatar>
                <Avatar alt={author.username} src={author.picture} />
            </ListItemAvatar>
            <ListItemText 
                primary={
                    <Typography variant='body1'>
                        <Link 
                            className={lightTheme ? classes.primaryText : classes.whiteText} 
                            component={ReactLink} 
                            to={`/@${author.username}`}
                        >
                            {author.username}
                        </Link>
                    </Typography>
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
