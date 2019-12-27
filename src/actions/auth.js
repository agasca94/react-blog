import api from '../api'
import * as types from './types';

export const login = (email, password) => (dispatch) => {
    dispatch(signInRequest());
    return api.login(email, password)
        .then(res => dispatch(signInSuccess(res.data)))
        .catch(e => dispatch(signInError(e.response.data)))
}

export const register = (name, username, email, password) => (dispatch) => {
    dispatch(signInRequest());
    return api.register(name, username, email, password)
        .then(res => dispatch(signInSuccess(res.data)))
        .catch(e => dispatch(signInError(e.response.data)))
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
