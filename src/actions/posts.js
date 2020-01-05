import api from '../api'
import * as types from './types';

export const fetchPost = postId => async dispatch => {
    dispatch(fetchPostRequest())
    try {
        const res = await api.fetchPost(postId);
        return dispatch(fetchPostSuccess(res.data));
    }
    catch (e) {
        return dispatch(fetchPostError(e.response.data));
    }
}

export const createPost = post => async dispatch => {
    dispatch(fetchPostRequest())
    try {
        const res = await api.createPost(post);
        return dispatch(fetchPostSuccess(res.data));
    }
    catch (e) {
        return dispatch(fetchPostError(e.response.data));
    }
}

export const updatePost = (postId, post) => async dispatch => {
    dispatch(fetchPostRequest())
    try {
        const res = await api.updatePost(postId, post);
        return dispatch(fetchPostSuccess(res.data));
    }
    catch (e) {
        return dispatch(fetchPostError(e.response.data));
    }
}

export const fetchPostRequest = () => ({
    type: types.FETCH_POST_REQUEST
})
export const fetchPostSuccess = (post) => ({
    type: types.FETCH_POST_SUCCESS,
    post
})
export const fetchPostError = (error) => ({
    type: types.FETCH_POST_ERROR,
    error
})