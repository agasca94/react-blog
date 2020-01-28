import { combineReducers } from 'redux';
import auth from './auth';
import posts from './posts';
import users from './users';
import profile from './profile';
import comments from './comments';
import settings from './settings';

const rootReducer = combineReducers({
    auth,
    posts,
    users,
    profile,
    comments,
    settings
})

export default rootReducer;
