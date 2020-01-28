import * as types from 'actions/types';
import createStateReducer from './state';
import { combineReducers } from 'redux';

const stateReducer = createStateReducer([
    [types.FETCH_POSTS_REQUEST, types.FETCH_POST_REQUEST, types.SAVE_POST_REQUEST],
    [types.FETCH_POSTS_SUCCESS, types.FETCH_POST_SUCCESS, types.SAVE_POST_SUCCESS],
    [types.FETCH_POSTS_ERROR, types.FETCH_POST_ERROR, types.SAVE_POST_ERROR],
], { currentPage:1 });

const currentPostId = (state=null, { type, payload }) => {
    switch(type) {
    case types.DELETE_POST_SUCCESS:
    case types.FETCH_POST_REQUEST:
    case types.FETCH_POST_ERROR:
    case types.UNLOAD_POST:
        return  null;

    case types.FETCH_POST_SUCCESS:
    case types.SAVE_POST_SUCCESS:
        return payload.result;

    default:
        return state;
    }
}

const postsById = (state={}, { type, payload }) => {
    switch(type){
    case types.FETCH_POSTS_SUCCESS:
        return {
            ...state,
            ...payload.entities.posts
        }

    case types.FETCH_FAVORITES_SUCCESS:
    case types.FETCH_USER_POSTS_SUCCESS:
    case types.FETCH_POST_SUCCESS:
    case types.SAVE_POST_SUCCESS:
        return {
            ...state,
            ...payload.entities.posts
        }

    case types.FAVORITE_POST_SUCCESS:
        const post = state[payload.id]
        if (!post)  return state;

        return {
            ...state,
            [post.id]: {
                ...post,
                is_favorited: payload.is_favorited,
                favorites_count: payload.favorites_count
            }  
        }

    case types.DELETE_POST_SUCCESS:
        const { [payload.deleted]: _, ...rest } = state;
        return rest;

    default:
        return state;
    }
}

const allPosts = (state=[], { type, payload }) => {
    switch(type){
    case types.FETCH_POSTS_SUCCESS:
        return state.concat(payload.result);

    case types.DELETE_POST_SUCCESS:
        return state.filter(postId => payload.deleted !== postId)

    default:
        return state;
    }
}

const dataReducer = combineReducers({
    currentPostId,
    byId: postsById,
    allIds: allPosts,
})

export default combineReducers({
    data: dataReducer,
    state: stateReducer
})
