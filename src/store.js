import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as types from 'actions/types';
import { setToken } from 'api/client';
import rootReducer from "reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const localStorageMiddleware = store => next => action => {
    if (action.type === types.SIGN_IN_SUCCESS) {
        window.localStorage.setItem('jwt', action.user.token);
        setToken(action.user.token);
    } else if (action.type === types.SIGN_OUT) {
        window.localStorage.removeItem('jwt');
        setToken(null);
    }
  
    return next(action);
};

const loadToken = () => {
    const token = window.localStorage.getItem('jwt');
    if (token) {
        setToken(token)
    }
    const preloadedState = {
        auth: {
            token
        }
    }

    return preloadedState;
}

export default createStore(
    rootReducer,
    loadToken(),
    composeEnhancers(
        applyMiddleware(thunkMiddleware, localStorageMiddleware)
    )
);
