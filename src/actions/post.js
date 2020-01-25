import api from '../api'
import callApi from './api';
import * as types from './types';
import { schema } from 'normalizr';

const user = new schema.Entity('users');
const post = new schema.Entity('post', {
    author: user
});
const comment = new schema.Entity('comments', {
    author: user
})

export const fetchPost = postId => 
    callApi(
        [types.FETCH_POST_REQUEST, types.FETCH_POST_SUCCESS, types.FETCH_POST_ERROR],
        () => api.fetchPost(postId),
        post
    )

export const savePost = (p, postId) => 
    callApi(
        [types.SAVE_POST_REQUEST, types.SAVE_POST_SUCCESS, types.SAVE_POST_ERROR],
        () => postId ? 
            api.updatePost(postId, p) : 
            api.createPost(p),
        post
    )

export const deletePost = postId => 
    callApi(
        [types.DELETE_POST_REQUEST, types.DELETE_POST_SUCCESS, types.DELETE_POST_ERROR],
        () => api.deletePost(postId)
    )

export const favoritePost = post => 
    callApi(
        [types.FAVORITE_POST_REQUEST, types.FAVORITE_POST_SUCCESS, types.FAVORITE_POST_ERROR],
        () => post.is_favorited ? 
            api.unfavoritePost(post.id) : 
            api.favoritePost(post.id)
    )

export const fetchComments = postId => 
    callApi(
        [types.FETCH_COMMENTS_REQUEST, types.FETCH_COMMENTS_SUCCESS, types.FETCH_COMMENTS_ERROR],
        () => api.fetchComments(postId),
        [comment]
    )

export const saveComment = (postId, comm, commentId) => 
    callApi(
        [
            types.SAVE_COMMENT_REQUEST, 
            commentId ? types.UPDATE_COMMENT_SUCCESS : types.SAVE_COMMENT_SUCCESS, 
            types.SAVE_COMMENT_ERROR
        ],
        () => commentId ? 
            api.updateComment(postId, commentId, comm) :
            api.createComment(postId, comm),
        comment
    )

export const deleteComment = (postId, commentId) => 
    callApi(
        [types.DELETE_COMMENT_REQUEST, types.DELETE_COMMENT_SUCCESS, types.DELETE_COMMENT_ERROR],
        () => api.deleteComment(postId, commentId)
    )
