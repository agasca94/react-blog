import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { Typography, Link , makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    markdown: {
        ...theme.typography.body2,
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

function PostMarkdown(props) {
    const { contents } = props;
    const classes = useStyles();

    return (
        <ReactMarkdown className={classes.markdown} options={options}>
            {contents}
        </ReactMarkdown>
    )
}

export default PostMarkdown;
