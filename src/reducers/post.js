import * as types from 'actions/types';
import createStateReducer from './state';
import { combineReducers } from 'redux';

const stateReducer = createStateReducer([
    [types.SAVE_POST_REQUEST, types.FETCH_POST_REQUEST],
    [types.SAVE_POST_SUCCESS, types.FETCH_POST_SUCCESS],
    [types.SAVE_POST_ERROR, types.FETCH_POST_ERROR]
]);

const postReducer = (state=null, action) => {
    switch(action.type) {

    case types.FETCH_POST_REQUEST:
    case types.FETCH_POST_ERROR:
        return  null;

    case types.FETCH_POST_SUCCESS:
    case types.SAVE_POST_SUCCESS:
        return  action.payload;

    default:
        return state;
    }
}

const dataReducer = combineReducers({
    currentPost: postReducer
})

export default combineReducers({
    data: dataReducer,
    state: stateReducer
})
