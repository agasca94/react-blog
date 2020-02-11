import React from 'react';
import { 
    Avatar,
    makeStyles,
    IconButton,
    Box
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    input: {
        display: 'none'
    }
}))

function ImagePicker({ onChange, value, name }) {
    const classes = useStyles();
    const [image, setImage] = React.useState(value);

    const onImageUploaded = e => {
        const file = e.target.files[0];

        setImage(URL.createObjectURL(file));

        onChange({
            target: {
                name,
                value: file
            }
        });
    }

    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Avatar
                src={image}
                className={classes.large}
            />
            <input 
                accept="image/*" 
                className={classes.input}
                id="icon-button-file" 
                type="file"
                onChange={onImageUploaded}
                name={name}
            />
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </Box>
    );
}

export default ImagePicker;
