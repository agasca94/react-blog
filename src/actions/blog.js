import api from '../api'
import * as types from './types';

export const fetchPosts = () => async dispatch => {
    dispatch(fetchPostsRequest())
    try {
        const res = await api.fetchPosts();
        return dispatch(fetchPostsSuccess(res.data));
    }
    catch (e) {
        return dispatch(fetchPostsError(e.response.data));
    }
}


export const fetchPostsRequest = () => ({
    type: types.FETCH_POSTS_REQUEST
})
export const fetchPostsSuccess = posts => ({
    type: types.FETCH_POSTS_SUCCESS,
    posts
})
export const fetchPostsError = error => ({
    type: types.FETCH_POSTS_ERROR,
    error
})
