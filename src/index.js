import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

import App from './App';

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </Provider>

), document.getElementById('root'));
