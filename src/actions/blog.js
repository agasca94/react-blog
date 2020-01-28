import api from '../api'
import callApi from './api';
import * as types from './types';
import { schema } from 'normalizr';

const user = new schema.Entity('users');
const post = new schema.Entity('posts', {
    author: user
})

export const fetchPosts = (page=1) => 
    callApi(
        [types.FETCH_POSTS_REQUEST, types.FETCH_POSTS_SUCCESS, types.FETCH_POSTS_ERROR],
        () => api.fetchPosts(page),
        [post]
    )
