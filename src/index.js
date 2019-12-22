import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';

ReactDOM.render((
    <Router>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>

), document.getElementById('root'));
