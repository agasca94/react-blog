import api from '../api'
import * as types from './types';

export const login = (email, password) => async (dispatch) => {
    const response = await api.login(email, password);
    const data = response.data;
    dispatch(onSignedIn(data));
}

export const register = (name, username, email, password) => async (dispatch) => {
    const response = await api.register(name, username, email, password);
    const data = response.data;
    dispatch(onSignedIn(data));
}

export const onSignedIn = (user) => ({
    type: types.ON_SIGNED_IN,
    user
})
