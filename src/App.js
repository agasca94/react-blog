import React from 'react';
import {
    Route,
    Switch,
    useLocation
} from 'react-router-dom';
import Header from './components/Header';
import Auth from './components/Auth';
import Blog from './components/Blog';
import Settings from './components/Settings';
import Me from './components/Me';
import PrivateRoute from './components/PrivateRoute';
import Editor from './components/Editor';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { getMe } from './actions/auth';

function renderToolbar(path) {
    const AUTH_ROUTES = ['/', '/register', '/login'];
    return !AUTH_ROUTES.includes(path)
}

function App(props) {
    const { pathname } = useLocation();
    const { user, getMe, token } = props;

    React.useEffect(() => {
        if (token) getMe()
    }, [getMe, token]);

    return (
        <div>
            {renderToolbar(pathname) && 
                <Container maxWidth='lg'>
                    <Header title='YABA' currentUser={user}/>
                </Container>
            }
            <Switch>
                <Route path='/blog' component={Blog}/>
                <Route path='/@:username' component={Me}/>
                <PrivateRoute path='/editor/:postId' component={Editor}/>
                <PrivateRoute path='/editor' component={Editor}/>
                <PrivateRoute path='/settings' component={Settings}/>
                <Route path='/' component={Auth}/>
            </Switch>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.auth.user,
    token: state.auth.token
})

export default connect(mapStateToProps, { getMe })(App);
