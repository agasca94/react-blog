import { combineReducers } from 'redux';
import auth from './auth';
import blog from './posts';

const rootReducer = combineReducers({
    auth,
    blog
})

export default rootReducer;
