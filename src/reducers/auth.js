import * as types from 'actions/types';

export default (state={}, action) => {
    switch(action.type) {
    case types.AUTH_REQUEST:
        return {
            ...state,
            user: null,
            error: null
        }
    case types.AUTH_ERROR:
        return {
            ...state,
            user: null,
            error: action.error
        }
    case types.SAVE_SETTINGS_SUCCESS:
    case types.GET_ME_SUCCESS:
        return {
            ...state,
            user: action.payload,
            error: null
        }
    case types.SIGN_IN_SUCCESS:
        return {
            ...state,
            token: action.payload.token,
            user: action.payload,
            error: null
        }
    case types.SIGN_OUT:
        return {
            ...state,
            token: null,
            user: null
        }
    default:
        return state;
    }
}
