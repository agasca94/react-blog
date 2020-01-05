import api from '../api'
import * as types from './types';

export const login = (email, password) => async (dispatch) => {
    dispatch(authRequest());
    try {
        const res = await api.login(email, password);
        return dispatch(signInSuccess(res.data));
    }
    catch (e) {
        return dispatch(authError(e.response.data));
    }
}

export const register = (name, username, email, password) => async (dispatch) => {
    dispatch(authRequest());
    try {
        const res = await api.register(name, username, email, password);
        return dispatch(signInSuccess(res.data));
    }
    catch (e) {
        return dispatch(authError(e.response.data));
    }
}

export const getMe = () => async (dispatch) => {
    dispatch(authRequest());
    try {
        const res = await api.getMe();
        return dispatch(getMeSuccess(res.data));
    }
    catch (e) {
        return dispatch(authError(e.response.data));
    }
}

export const authRequest = () => ({
    type: types.AUTH_REQUEST
})

export const authError = error => ({
    type: types.AUTH_ERROR,
    error
})

export const getMeSuccess = user => ({
    type: types.GET_ME_SUCCESS,
    user
})

export const signInSuccess = user => ({
    type: types.SIGN_IN_SUCCESS,
    user
})

export const signOut = () => ({
    type: types.SIGN_OUT
})
