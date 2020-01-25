import * as types from 'actions/types';
import createStateReducer from './state';
import { combineReducers } from 'redux';

const stateReducer = createStateReducer([
    [types.SAVE_POST_REQUEST, types.FETCH_POST_REQUEST],
    [types.SAVE_POST_SUCCESS, types.FETCH_POST_SUCCESS],
    [types.SAVE_POST_ERROR, types.FETCH_POST_ERROR]
]);

const commentsById = (state={}, { type, payload }) => {
    
    switch(type) {
    case types.FETCH_COMMENTS_SUCCESS:
        return  payload.entities.comments || state;

    case types.SAVE_COMMENT_SUCCESS:
    case types.UPDATE_COMMENT_SUCCESS:
        return {
            ...state,
            ...payload.entities.comments
        }

    case types.DELETE_COMMENT_SUCCESS:
        const { [payload.deleted]: _, ...rest } = state;
        return rest;
    
    case types.DELETE_POST_SUCCESS:
        return {}

    default:
        return state;
    }
}

const allComments = (state=[], { type, payload }) => {
    switch(type) {
    case types.FETCH_COMMENTS_SUCCESS:
        return  payload.result;

    case types.SAVE_COMMENT_SUCCESS:
        return [payload.result].concat(state);

    case types.DELETE_COMMENT_SUCCESS:
        return state.filter(id => id !== payload.deleted);

    case types.DELETE_POST_SUCCESS:
        return [];
    
    default:
        return state;
    }
}

const commentsReducer = combineReducers({
    byId: commentsById,
    allIds: allComments
})

const usersReducer = (state={}, { type, payload }) => {
    switch(type) {

    case types.FETCH_POST_SUCCESS:
    case types.SAVE_POST_SUCCESS:
    case types.FETCH_COMMENTS_SUCCESS:
    case types.SAVE_COMMENT_SUCCESS:
        return {
            ...state,
            ...payload.entities.users
        }
    
    default:
        return state;
    }
}

const postReducer = (state=null, { type, payload }) => {

    switch(type) {

    case types.DELETE_POST_SUCCESS:
    case types.FETCH_POST_REQUEST:
    case types.FETCH_POST_ERROR:
        return  null;

    case types.FETCH_POST_SUCCESS:
    case types.SAVE_POST_SUCCESS:
        return payload.entities.post[payload.result];

    case types.FAVORITE_POST_SUCCESS:
        return {
            ...state,
            is_favorited: payload.is_favorited,
            favorites_count: payload.favorites_count
        }

    default:
        return state;
    }
}

const dataReducer = combineReducers({
    currentPost: postReducer,
    users: usersReducer,
    comments: commentsReducer
})

export default combineReducers({
    data: dataReducer,
    state: stateReducer
})
