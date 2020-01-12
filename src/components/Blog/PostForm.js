import React from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import ResourceForm from 'components/ResourceForm';

const normalizePost = post => ({
    title: post?.title || '',
    description: post?.description || '',
    contents: post?.contents || ''
})

function PostForm(props) {
    const { post, onSave, errors } = props;

    return (
        <ResourceForm resource={post} normalize={normalizePost} onSubmit={onSave} style={{width: '100%'}}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="title"
                label="Title"
                required
                autoFocus
                error={errors?.hasOwnProperty('title')}
                helperText={errors?.title}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="description"
                label="Description"
                placeholder='Whats your article about?'
                required
                multiline
                rows='3'
                autoFocus
                error={errors?.hasOwnProperty('description')}
                helperText={errors?.description}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="contents"
                label="Content"
                placeholder='Write your article (in markdown)'
                required
                multiline
                rows='30'
                error={errors?.hasOwnProperty('contents')}
                helperText={errors?.contents}
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
