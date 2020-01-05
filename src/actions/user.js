import * as types from './types';
import api from '../api'

export const fetchUser = username => async dispatch => {
    dispatch(fetchUserRequest());
    try {
        const res = await api.fetchUser(username);
        dispatch(fetchUserSuccess(res.data));
    } catch (e) {
        dispatch(fetchUserError(e.response.data));
    }
}

export const fetchUserRequest = () => ({
    type: types.FETCH_USER_REQUEST
})

export const fetchUserSuccess = (user) => ({
    type: types.FETCH_USER_SUCCESS,
    user
})

export const fetchUserError = error => ({
    type: types.FETCH_USER_ERROR,
    error
})
