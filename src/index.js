import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { client } from './api/client';
import store from './store';
import { signOut } from './actions/auth';

import App from './App';

const { dispatch } = store;
client.interceptors.response.use(
    response => response,
    error => {
        const { status } = error.response;
        if (status === 401) {
            dispatch(signOut());
        }
        return Promise.reject(error);
    }
);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </Provider>

), document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
