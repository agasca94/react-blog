import { combineReducers } from 'redux';
import auth from './auth';
import blog from './blog';
import post from './post';
import user from './user';
import settings from './settings';

const rootReducer = combineReducers({
    auth,
    blog,
    post,
    user,
    settings
})

export default rootReducer;
