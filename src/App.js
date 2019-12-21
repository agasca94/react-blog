import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Auth from './components/Auth';
import Blog from './components/Blog';
import Settings from './components/Settings';
import Me from './components/Me';
import Editor from './components/Editor';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/blog' component={Blog}></Route>
                <Route path='/@:username' component={Me}></Route>
                <Route path='/settings' component={Settings}></Route>
                <Route path='/editor' component={Editor}></Route>
                <Route path='/' component={Auth}></Route>
            </Switch>
        </Router>
    );
}

export default App;
