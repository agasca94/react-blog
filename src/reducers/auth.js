import * as types from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
    case types.SIGN_IN_REQUEST:
        return {
            ...state,
            user: null,
            error: null
        }
    case types.SIGN_IN_SUCCESS:
        return {
            ...state,
            user: action.user,
            error: null
        }
    
    case types.SIGN_IN_ERROR:
        return {
            ...state,
            user: null,
            error: action.error
        }
    default:
        return state;
    }
}
