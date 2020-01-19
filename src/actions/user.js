import * as types from './types';
import callApi from './api';
import api from '../api'

export const fetchUser = username => 
    callApi(
        [types.FETCH_USER_REQUEST, types.FETCH_USER_SUCCESS, types.FETCH_USER_ERROR],
        () => api.fetchUser(username)
    )
