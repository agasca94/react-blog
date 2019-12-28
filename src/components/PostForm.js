import React from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import ResourceForm from './ResourceForm';

const normalizaResource = (resource) => ({
    title: resource?.title || '',
    contents: resource?.contents || ''
})

function PostForm(props) {
    const { post, onSave } = props;
    const initialValues = normalizaResource(post);

    return (
        <ResourceForm style={{width: '100%'}} resource={initialValues} onSubmit={onSave}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="title"
                label="Title"
                required
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="contents"
                label="Content"
                required
                multiline
                rows='30'
            />
            <Box display='flex' justifyContent='flex-end'>
                <Button variant="contained" color="primary" disableElevation size='large' type='submit'>
                    Save
                </Button>
            </Box>
        </ResourceForm>
    );
}

export default PostForm;
