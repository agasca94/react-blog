import * as types from 'actions/types';

export default (state={}, action) => {
    switch(action.type) {
    case types.FETCH_POST_REQUEST:
        return {
            ...state,
            currentPost: null,
            loading: true,
            error: null
        }
    case types.SAVE_POST_REQUEST:
        return {
            ...state,
            loading: true,
            error: null
        }
    case types.FETCH_POST_ERROR:
        return {
            ...state,
            currentPost: null,
            loading: false,
            error: action.error
        }
    case types.SAVE_POST_ERROR:
        return {
            ...state,
            loading: false,
            error: action.error
        }
    case types.FETCH_POST_SUCCESS:
    case types.SAVE_POST_SUCCESS:
        return {
            ...state,
            currentPost: action.payload,
            loading: false,
            error: null
        }
    default:
        return state;
    }
}
