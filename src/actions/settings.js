import api from '../api'
import * as types from './types';

export const saveSettings = (settings) => async (dispatch) => {
    dispatch(saveSettingsRequest());
    try {
        const res = await api.updateUser(settings);
        return dispatch(saveSettingsSuccess(res.data));
    }
    catch (e) {
        return dispatch(saveSettingsError(e.response.data));
    }
}

export const saveSettingsRequest = () => ({
    type: types.SAVE_SETTINGS_REQUEST
})

export const saveSettingsError = error => ({
    type: types.SAVE_SETTINGS_ERROR,
    error
})

export const saveSettingsSuccess = user => ({
    type: types.SAVE_SETTINGS_SUCCESS,
    user
})
