import { createStore, applyMiddleware, compose } from 'redux';
import * as types from './actions/types';
import { setToken } from './api/client';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const localStorageMiddleware = store => next => action => {
    if (action.type === types.SIGN_IN_SUCCESS) {
        if (!action.error) {
            window.localStorage.setItem('jwt', action.user.token);
            setToken(action.user.token);
        }
    } /* else if (action.type === types.LOGOUT) {
        window.localStorage.setItem('jwt', '');
        agent.setToken(null);
    } */
  
    next(action);
};
  

export default createStore(rootReducer, composeEnhancers(
    applyMiddleware(localStorageMiddleware, thunkMiddleware)
));
