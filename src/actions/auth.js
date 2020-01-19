import api from '../api'
import callApi from './api';
import * as types from './types';

export const login = (email, password) => 
    callApi(
        [types.AUTH_REQUEST, types.SIGN_IN_SUCCESS, types.AUTH_ERROR],
        () => api.login(email, password),
    )

export const register = (name, username, email, password) => 
    callApi(
        [types.AUTH_REQUEST, types.SIGN_IN_SUCCESS, types.AUTH_ERROR],
        () => api.register(name, username, email, password),
    )

export const getMe = () => 
    callApi(
        [types.AUTH_REQUEST, types.GET_ME_SUCCESS, types.AUTH_ERROR],
        api.getMe
    )

export const signOut = () => ({
    type: types.SIGN_OUT
})
