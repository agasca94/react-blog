import * as types from 'actions/types';
import createStateReducer from './state';
import { combineReducers } from 'redux';

const stateReducer = createStateReducer([
    [types.FETCH_USER_REQUEST],
    [types.FETCH_USER_SUCCESS],
    [types.FETCH_USER_ERROR]
]);

const currentUserId = (state=null, { type, payload }) => {
    switch(type) {

    case types.FETCH_USER_SUCCESS:
        return  payload.result;

    default:
        return state;
    }
}

const usersById = (state={}, { type, payload }) => {
    switch(type) {
    case types.FETCH_POSTS_SUCCESS:
        return payload.entities.users;

    case types.FETCH_POST_SUCCESS:
    case types.FETCH_COMMENTS_SUCCESS:
    case types.FETCH_USER_SUCCESS:
    case types.SAVE_COMMENT_SUCCESS:
    case types.SAVE_POST_SUCCESS:
        return {
            ...state,
            ...payload.entities.users
        }

    default:
        return state;
    }
}

const dataReducer = combineReducers({
    currentUserId,
    byId: usersById,
    // allIds: allUsers
})

export default combineReducers({
    data: dataReducer,
    state: stateReducer
})
