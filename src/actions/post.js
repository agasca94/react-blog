import api from '../api'
import callApi from './api';
import * as types from './types';

export const fetchPost = postId => 
    callApi(
        [types.FETCH_POST_REQUEST, types.FETCH_POST_SUCCESS, types.FETCH_POST_ERROR],
        api.fetchPost,
        postId
    )

export const savePost = (post, postId) => 
    callApi(
        [types.SAVE_POST_REQUEST, types.SAVE_POST_SUCCESS, types.SAVE_POST_ERROR],
        postId ? api.updatePost : api.createPost,
        post, postId
    )
