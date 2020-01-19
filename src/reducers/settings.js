import * as types from 'actions/types';
import createStateReducer from './state';
import { combineReducers } from 'redux';

const stateReducer = createStateReducer([
    [types.SAVE_SETTINGS_REQUEST],
    [types.SAVE_SETTINGS_SUCCESS],
    [types.SAVE_SETTINGS_ERROR]
]);

export default combineReducers({
    state: stateReducer
})
