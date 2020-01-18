import api from '../api'
import * as types from './types';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const post = new schema.Entity('posts', {
    author: user
})

export const fetchPosts = () => async dispatch => {
    dispatch(fetchPostsRequest())
    try {
        const { data } = await api.fetchPosts();
        const { data: posts, meta: pagination } = data;
        const normalizedData = normalize(posts, [post]);
        return dispatch(fetchPostsSuccess(normalizedData, pagination));
    }
    catch (e) {
        return dispatch(fetchPostsError(e.response.data));
    }
}


export const fetchPostsRequest = () => ({
    type: types.FETCH_POSTS_REQUEST
})
export const fetchPostsSuccess = (entities, pagination) => ({
    type: types.FETCH_POSTS_SUCCESS,
    entities,
    pagination
})
export const fetchPostsError = error => ({
    type: types.FETCH_POSTS_ERROR,
    error
})
