import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Me from './components/Me';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/posts' component={Blog}></Route>
                <Route path='/me' component={Me}></Route>
                <Route path='/' component={Home}></Route>
            </Switch>
        </Router>
    );
}

export default App;
