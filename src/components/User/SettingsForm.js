import React from 'react';
import {
    Box, 
    TextField, 
    Button, 
} from '@material-ui/core';
import ResourceForm from 'components/ResourceForm';

const normalizeUser = user => ({
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || ''
})

const SettingsForm = function(props) {
    const { user, onSave, errors } = props;

    return (
        <ResourceForm resource={user} normalize={normalizeUser} onSubmit={onSave} style={{width: '100%'}}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                error={errors?.hasOwnProperty('name')}
                helperText={errors?.name}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                error={errors?.hasOwnProperty('email')}
                helperText={errors?.email}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="bio"
                label="Bio"
                name="bio"
                multiline
                rows='6'
                error={errors?.hasOwnProperty('bio')}
                helperText={errors?.bio}
            />
            <Box display='flex' justifyContent='flex-end'>
                <Button type='submit' variant="contained" color="primary" disableElevation size='large'>
                    Save
                </Button>
            </Box>
        </ResourceForm>
    );
};

export default SettingsForm;
