import * as types from 'actions/types';
import createStateReducer from './state';
import { combineReducers } from 'redux';

const stateReducer = createStateReducer([
    [types.FETCH_USER_REQUEST],
    [types.FETCH_USER_SUCCESS],
    [types.FETCH_USER_ERROR]
]);

const userReducer = (state=null, action) => {
    switch(action.type) {

    case types.FETCH_USER_SUCCESS:
        return  action.payload;

    default:
        return state;
    }
}

const dataReducer = (state={}, action) => {
    return {
        user: userReducer(state.user, action)
    }
}

export default combineReducers({
    data: dataReducer,
    state: stateReducer
})
