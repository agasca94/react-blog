import * as types from './types';
import callApi from './api';
import api from '../api';
import { schema } from 'normalizr';

const user = new schema.Entity('users');
const post = new schema.Entity('posts', {
    author: user
});

export const fetchUser = username => 
    callApi(
        [types.FETCH_USER_REQUEST, types.FETCH_USER_SUCCESS, types.FETCH_USER_ERROR],
        () => api.fetchUser(username),
        user
    )

export const fetchUserPosts = username =>
    callApi(
        [types.FETCH_USER_POSTS_REQUEST, types.FETCH_USER_POSTS_SUCCESS, types.FETCH_USER_POSTS_ERROR],
        () => api.fetchUserPosts(username),
        [post]
    )

export const fetchFavorites = username =>
    callApi(
        [types.FETCH_FAVORITES_REQUEST, types.FETCH_FAVORITES_SUCCESS, types.FETCH_FAVORITES_ERROR],
        () => api.fetchUserFavorites(username),
        [post]
    )

export const unloadProfile = () => ({
    type: types.UNLOAD_PROFILE
})
