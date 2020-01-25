import * as types from 'actions/types';
import createStateReducer from './state';
import { combineReducers } from 'redux';

const stateReducer = createStateReducer([
    [types.AUTH_REQUEST],
    [types.SIGN_IN_SUCCESS, types.GET_ME_SUCCESS],
    [types.AUTH_ERROR],
])

const dataReducer = (state={}, action) => {
    switch(action.type) {
    
    case types.AUTH_REQUEST:
    case types.AUTH_ERROR:
        return {
            ...state,
            currentUser: null,
        }
    case types.SIGN_OUT: 
        return {
            token: null,
            currentUser: null
        }
    case types.SAVE_SETTINGS_SUCCESS:
    case types.GET_ME_SUCCESS: 
        return {
            ...state,
            currentUser: action.payload
        }
        
    case types.SIGN_IN_SUCCESS: 
        return {
            currentUser: action.payload,
            token: action.payload.token
        }
        
    default:
        return state;
    }
}

export default combineReducers({
    data: dataReducer,
    state: stateReducer
})
