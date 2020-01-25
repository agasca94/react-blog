import * as types from 'actions/types';
import createStateReducer from './state';
import { combineReducers } from 'redux';

const stateReducer = createStateReducer([
    [types.FETCH_COMMENTS_REQUEST, types.SAVE_COMMENT_REQUEST, types.DELETE_COMMENT_REQUEST],
    [types.FETCH_COMMENTS_SUCCESS, types.SAVE_COMMENT_SUCCESS, types.DELETE_COMMENT_SUCCESS],
    [types.FETCH_COMMENTS_ERROR, types.SAVE_COMMENT_ERROR, types.DELETE_COMMENT_ERROR]
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
    
    case types.FETCH_COMMENTS_REQUEST:
    case types.DELETE_POST_SUCCESS:
    case types.UNLOAD_POST:
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

    case types.FETCH_COMMENTS_REQUEST:
    case types.DELETE_POST_SUCCESS:
    case types.UNLOAD_POST:
        return [];
    
    default:
        return state;
    }
}

const dataReducer = combineReducers({
    byId: commentsById,
    allIds: allComments
})

export default combineReducers({
    data: dataReducer,
    state: stateReducer
})
