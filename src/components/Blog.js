import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { CssBaseline, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import BlogMainContent from './BlogMainContent';

const posts = [
    {
        id: 1,
        title: 'A new post',
        created_at: 'April 1, 2020',
        author: {name: 'Arturo', username: 'agasca'},
        contents: `
Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.
Aenean lacinia bibendum nulla sed consectetur.

## Heading

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

### Sub-heading

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    },
    {
        id: 2,
        title: 'A new post',
        created_at: 'April 1, 2020',
        author: {name: 'Arturo', username: 'agasca'},
        contents: `
Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.
Aenean lacinia bibendum nulla sed consectetur.

## Heading

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

### Sub-heading

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    },
    {
        id: 3,
        title: 'A new post',
        created_at: 'April 1, 2020',
        author: {name: 'Arturo', username: 'agasca'},
        contents: `
Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.
Aenean lacinia bibendum nulla sed consectetur.

## Heading

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

### Sub-heading

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    },
]
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

function Blog() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth='lg'>
                <Header title='YABA'/>
                <main>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Grid item xs={12} md={8}>
                            <BlogMainContent
                                posts={posts}
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

export default Blog;
