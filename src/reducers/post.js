import * as types from 'actions/types';
import createStateReducer from './state';
import { combineReducers } from 'redux';

const stateReducer = createStateReducer([
    [types.SAVE_POST_REQUEST, types.FETCH_POST_REQUEST],
    [types.SAVE_POST_SUCCESS, types.FETCH_POST_SUCCESS],
    [types.SAVE_POST_ERROR, types.FETCH_POST_ERROR]
]);

const commentsReducer = (state={ byId:{}, allIds: [] }, { type, payload }) => {
    switch(type) {
    case types.FETCH_COMMENTS_SUCCESS:
        return  {
            byId: payload.entities.comments,
            allIds: payload.result,
        }
    case types.SAVE_COMMENT_SUCCESS:
        return {
            byId: {
                ...state.byId,
                ...payload.entities.comments
            },
            allIds: [payload.result].concat(state.allIds)
        }
    case types.UPDATE_COMMENT_SUCCESS:
        return {
            ...state,
            byId: {
                ...state.byId,
                ...payload.entities.comments
            }
        }
    case types.DELETE_COMMENT_SUCCESS:
        const { [payload.deleted]: value, ...byId } = state.byId;
        const allIds = state.allIds.filter(id => id !== payload.deleted);
        return {
            byId,
            allIds
        }
    
    default:
        return state;
    }
}

const usersReducer = (state={}, { type, payload }) => {
    switch(type) {

    case types.FETCH_POST_SUCCESS:
    case types.SAVE_POST_SUCCESS:
        return  {
            ...state,
            ...payload.entities.users
        }
    case types.FETCH_COMMENTS_SUCCESS:
        return {
            ...state,
            ...payload.entities.users
        }
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

    case types.FETCH_POST_REQUEST:
    case types.FETCH_POST_ERROR:
        return  null;

    case types.FETCH_POST_SUCCESS:
    case types.SAVE_POST_SUCCESS:
        return payload.entities.post[payload.result];

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
