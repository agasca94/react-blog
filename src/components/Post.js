import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { Link as ReactLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    markdown: {
        ...theme.typography.body2,
    },
    post: {
        padding: theme.spacing(3, 0)
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}))

const options = {
    overrides: {
        h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
        h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
        p: { component: Typography, props: { paragraph: true } },
        a: { component: Link }
    }
}

function Post(props) {
    const { post } = props;
    const classes = useStyles();

    return (
        <div className={classes.post}>
            <Typography gutterBottom={true} variant='h5'>
                {post.title}
            </Typography>
            <Avatar className={classes.small} alt="Remy Sharp" src="https://static.productionready.io/images/smiley-cyrus.jpg" />
            <Typography gutterBottom={true} variant='caption' paragraph={true}>
                {post.created_at} by <Link component={ReactLink} to={`@${post.author.username}`}>{post.author.name}</Link>
            </Typography>
            <ReactMarkdown className={classes.markdown} options={options}>
                {post.contents}
            </ReactMarkdown>
        </div>
    )
}

export default Post;
