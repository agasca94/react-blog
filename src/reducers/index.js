import { combineReducers } from 'redux';
import auth from './auth';
import blog from './posts';
import user from './user';

const rootReducer = combineReducers({
    auth,
    blog,
    user
})

export default rootReducer;
