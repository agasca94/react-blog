import * as types from 'actions/types';

export default (state={}, action) => {
    switch(action.type) {
    case types.FETCH_POSTS_REQUEST:
        return {
            ...state,
            loading: true,
            error: null
        }
    case types.FETCH_POSTS_ERROR:
        return {
            ...state,
            loading: false,
            error: action.error
        }
    case types.FETCH_POSTS_SUCCESS:
        return {
            ...state,
            posts: action.posts,
            loading: false,
            error: null
        }
    default:
        return state;
    }
}
