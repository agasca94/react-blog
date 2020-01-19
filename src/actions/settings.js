import api from '../api'
import callApi from './api';
import * as types from './types';

export const saveSettings = settings => 
    callApi(
        [types.SAVE_SETTINGS_REQUEST, types.SAVE_SETTINGS_SUCCESS, types.SAVE_SETTINGS_ERROR],
        () => api.updateUser(settings)
    )
