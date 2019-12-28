import * as types from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
    case types.FETCH_POST_REQUEST:
        return {
            ...state,
            post: null,
            error: null
        }
    case types.FETCH_POST_SUCCESS:
        return {
            ...state,
            post: action.post,
            error: null
        }
    
    case types.FETCH_POST_ERROR:
        return {
            ...state,
            post: null,
            error: action.error
        }
    default:
        return state;
    }
}
