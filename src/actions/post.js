import api from '../api'
import callApi from './api';
import * as types from './types';
import { schema } from 'normalizr';

const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
    author: user
})

export const fetchPost = postId => 
    callApi(
        [types.FETCH_POST_REQUEST, types.FETCH_POST_SUCCESS, types.FETCH_POST_ERROR],
        () => api.fetchPost(postId)
    )

export const savePost = (post, postId) => 
    callApi(
        [types.SAVE_POST_REQUEST, types.SAVE_POST_SUCCESS, types.SAVE_POST_ERROR],
        () => postId ? 
            api.updatePost(postId, post) : 
            api.createPost(post),
    )

export const fetchComments = postId => async dispatch => 
    callApi(
        [types.FETCH_COMMENTS_REQUEST, types.FETCH_COMMENTS_SUCCESS, types.FETCH_POSTS_ERROR],
        () => api.fetchComments(postId),
        [comment]
    )
