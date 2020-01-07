import * as types from '../actions/types';

export default function(state={}, action){
    switch(action.type) {
    case types.SAVE_SETTINGS_REQUEST:
        return {
            ...state,
            loading: true,
            error: null
        }
    case types.SAVE_SETTINGS_ERROR:
        return {
            ...state,
            loading: false,
            error: action.error
        }
    case types.SAVE_SETTINGS_SUCCESS:
        return {
            ...state,
            loading: false
        }
    default:
        return state;
    }
}
