import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, TextField, Button, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    editor: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(1)
    }
}))

function NewArticle() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth='md' className={classes.editor}>
                <Typography variant='h4' align='center'>
                    Post Title
                </Typography>
                <form style={{width: '100%'}}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="title"
                        label="Title"
                        name="title"
                        required
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="contents"
                        label="Content"
                        name="contents"
                        required
                        multiline
                        rows='30'
                    />
                    <Box display='flex' justifyContent='flex-end'>
                        <Button variant="contained" color="primary" disableElevation size='large'>
                            Save
                        </Button>
                    </Box>
                </form>
            </Container>
        </React.Fragment>
    );
}

export default NewArticle;
