import * as types from 'actions/types';
import createStateReducer from './state';
import { combineReducers } from 'redux';

const stateReducer = createStateReducer([
    [types.FETCH_POSTS_REQUEST],
    [types.FETCH_POSTS_SUCCESS],
    [types.FETCH_POSTS_ERROR]
]);

const usersReducers = (state={}, { type, payload }) => {
    switch(type){
    case types.FETCH_POSTS_SUCCESS:
        return payload.entities.users;
    default:
        return state;
    }
}

const postsById = (state={}, { type, payload }) => {
    switch(type){
    case types.FETCH_POSTS_SUCCESS:
        return payload.entities.posts;

    case types.FAVORITE_POST_SUCCESS:
        const post = state[payload.id]
        if (!post)  {
            return state;
        }
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
        return payload.result;

    case types.DELETE_POST_SUCCESS:
        return state.filter(postId => payload.deleted !== postId)

    default:
        return state;
    }
}

const postsReducer = combineReducers({
    byId: postsById,
    allIds: allPosts
})

const dataReducer = combineReducers({
    users: usersReducers,
    posts: postsReducer
})

export default combineReducers({
    data: dataReducer,
    state: stateReducer
})
