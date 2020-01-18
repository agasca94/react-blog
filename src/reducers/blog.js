import * as types from 'actions/types';

const initialState = {
    entities: {
        posts: {},
        users: {}
    }
}

export default (state=initialState, action) => {
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
            
            ...action.entities,
            
            page: action.pagination.page,
            pages: action.pagination.pages,

            loading: false,
            error: null
        }
    default:
        return state;
    }
}
