import React from 'react';
import { CssBaseline, Container, Grid, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import Sidebar from 'components/Sidebar';
import BlogMainContent from './BlogMainContent';
import { fetchPosts } from 'actions/blog';

const sidebar = {
    title: 'About',
    description: 'Just another blog app made with React and a Python backend',
    archives: [
        { title: 'August 2019', url:'#'},
        { title: 'September 2019', url:'#'},
        { title: 'October 2019', url:'#'},
        { title: 'November 2019', url:'#'},
        { title: 'December 2019', url:'#'},
    ]
}

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(1)
    }
}))

function Blog(props) {
    const classes = useStyles();
    const { fetchPosts, posts } = props;

    React.useEffect(() => {
        fetchPosts()
    }, [fetchPosts])

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth='lg'>
                <main>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Grid item xs={12} md={8}>
                            <BlogMainContent
                                posts={posts || []}
                                title='Recently published'
                            />
                        </Grid>
                        
                        <Grid item xs={12} md={4}>
                            <Sidebar
                                title={sidebar.title}
                                description={sidebar.description}
                                archives={sidebar.archives}
                            />
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    posts: state.blog.posts
})

export default connect(mapStateToProps, { fetchPosts })(Blog);
