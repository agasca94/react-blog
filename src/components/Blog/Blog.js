import React from 'react';
import debounce from 'lodash.debounce';
import { 
    CssBaseline, 
    Container, 
    Grid, 
    Typography,
    Divider,
    makeStyles 
} from '@material-ui/core';
import { connect } from 'react-redux';
import Sidebar from 'components/Sidebar';
import { fetchPosts } from 'actions/blog';
import PostListContainer from './PostListContainer';

const sidebar = {
    title: 'About',
    description: 'Just another blogging app made with React and a Python backend',
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
    const { 
        fetchPosts,
        loading, 
        currentPage, 
        totalPages 
    } = props;

    React.useEffect(() => {
        if (!currentPage)
            fetchPosts()
    }, [fetchPosts, currentPage]);
    
    const handleScroll = React.useCallback(() => {
        if (loading || currentPage === totalPages) return;

        if (
            window.innerHeight + document.documentElement.scrollTop
            !== document.getElementById('root').offsetHeight
        ) return;
        
        fetchPosts(currentPage + 1);
    }, [loading, currentPage, fetchPosts, totalPages]);

    React.useEffect(() => {
        const debouncedHandlder = debounce(handleScroll, 100);
        window.addEventListener('scroll', debouncedHandlder);
        return () => {
            window.removeEventListener('scroll', debouncedHandlder);
        }
    }, [handleScroll]);

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth='lg'>
                <main>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6" gutterBottom>
                                Last published 
                            </Typography>
                            <Divider/>
                            <PostListContainer source='allIds'/>
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

const mapStateToProps = ({ posts: { state } }) => {
    const { loading, currentPage, totalPages } = state.posts;
    
    return {
        loading,
        currentPage,
        totalPages
    }
}

export default connect(mapStateToProps, { fetchPosts })(Blog);
