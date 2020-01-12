import React from 'react';
import { 
    Typography,
    Container, 
    makeStyles 
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import SettingsForm from 'components/User/SettingsForm';
import Loader from 'components/Loader';
import { saveSettings } from 'actions/settings';

const useStyles = makeStyles(theme => ({
    settings: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(1)
    }
}))

function Settings(props) {
    const classes = useStyles();
    const history = useHistory();
    const { currentUser, loading, saveSettings, error } = props;

    const onSave = settings => {
        saveSettings(settings)
            .then(r => !r.error && history.push('/me'));
    }

    return (
        <React.Fragment>
            <Container maxWidth='sm' className={classes.settings}>
                <Typography variant='h4'>
                    Your Settings
                </Typography>
                {currentUser &&
                    <SettingsForm user={currentUser} onSave={onSave} errors={error?.errors}/>
                }
                {(!currentUser || loading) &&
                    <Loader/>
                }
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    currentUser: state.auth.user,
    loading: state.settings.loading,
    error: state.settings.error
})

export default connect(mapStateToProps, { saveSettings })(Settings);
