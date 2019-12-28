import React from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import { handleObjectChange } from './formUtils';

function PostForm(props) {
    const [post, setPost] = React.useState({
        title: '',
        contents: ''
    })
    
    const handle = handleObjectChange(setPost);

    React.useEffect(() => {
        if (props.post) setPost({...props.post});
    }, [props.post]);

    return (
        <form style={{width: '100%'}}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="title"
                label="Title"
                required
                autoFocus
                value={post.title}
                onChange={handle}
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
                value={post.contents}
                onChange={handle}
            />
            <Box display='flex' justifyContent='flex-end'>
                <Button variant="contained" color="primary" disableElevation size='large' onClick={() => props.onSave(post)}>
                    Save
                </Button>
            </Box>
        </form>
    );
}

export default PostForm;
