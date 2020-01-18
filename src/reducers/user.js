import * as types from 'actions/types';

export default function(state={}, action) {
    switch(action.type){
    case types.FETCH_POST_REQUEST:
        return {
            error: null
        }
    case types.FETCH_USER_SUCCESS:
        return {
            error: null,
            ...action.payload
        }
    case types.FETCH_USER_ERROR:
        return {
            error: action.error
        }
    default: 
        return state
    }
}
