import { combineReducers } from 'redux';
import auth from './auth';
import blog from './posts';
import user from './user';
import settings from './settings';

const rootReducer = combineReducers({
    auth,
    blog,
    user,
    settings
})

export default rootReducer;
