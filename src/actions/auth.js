import api from '../api'
import * as types from './types';

export const login = (email, password) => async (dispatch) => {
    dispatch(signInRequest());
    try {
        const res = await api.login(email, password);
        return dispatch(signInSuccess(res.data));
    }
    catch (e) {
        return dispatch(signInError(e.response.data));
    }
}

export const register = (name, username, email, password) => async (dispatch) => {
    dispatch(signInRequest());
    try {
        const res = await api.register(name, username, email, password);
        return dispatch(signInSuccess(res.data));
    }
    catch (e) {
        return dispatch(signInError(e.response.data));
    }
}

export const signInRequest = () => ({
    type: types.SIGN_IN_REQUEST
})

export const signInSuccess = (user) => ({
    type: types.SIGN_IN_SUCCESS,
    user
})

export const signInError = (error) => ({
    type: types.SIGN_IN_ERROR,
    error
})
