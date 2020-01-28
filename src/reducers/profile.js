import * as types from 'actions/types';
import { combineReducers } from 'redux';

const favoritesReducer = (state=[], { type, payload }) => {
    switch(type) {
    case types.FETCH_FAVORITES_SUCCESS:
        return payload.result;

    case types.UNLOAD_PROFILE:
        return [];

    default:
        return state;
    }
}

const ownedReducer = (state=[], { type, payload }) => {
    switch(type) {
    case types.FETCH_USER_POSTS_SUCCESS:
        return payload.result;

    case types.UNLOAD_PROFILE:
        return [];

    default:
        return state;
    }
}

const dataReducer = combineReducers({
    favoritesIds: favoritesReducer,
    ownedIds: ownedReducer
})

export default combineReducers({
    data: dataReducer
})
