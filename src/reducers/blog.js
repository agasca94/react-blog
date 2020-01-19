import * as types from 'actions/types';
import createStateReducer from './state';
import { combineReducers } from 'redux';

const stateReducer = createStateReducer([
    [types.FETCH_POSTS_REQUEST],
    [types.FETCH_POSTS_SUCCESS],
    [types.FETCH_POSTS_ERROR]
]);

const dataReducer = (state={ posts: {}, users: {} }, action) => {
    switch(action.type){
    case types.FETCH_POSTS_SUCCESS:
        return {
            posts: {
                byId: action.payload.entities.posts,
                allIds: action.payload.result
            },
            users: action.payload.entities.users
        }
    default:
        return state;
    }
}

export default combineReducers({
    data: dataReducer,
    state: stateReducer
})
