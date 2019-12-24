import * as types from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
    case types.ON_SIGNED_IN:
        return {
            ...state,
            user: action.user
        }

    default:
        return state;
    }
}
