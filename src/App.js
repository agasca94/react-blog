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
import Editor from './components/Editor';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';

function renderToolbar(path) {
    const AUTH_ROUTES = ['/', '/register', '/login'];
    return !AUTH_ROUTES.includes(path)
}

function App(props) {
    const { pathname } = useLocation();
    console.log(props)
    return (
        <div>
            {renderToolbar(pathname) && 
                <Container maxWidth='lg'>
                    <Header title='YABA' currentUser={props.user}/>
                </Container>
            }
            <Switch>
                <Route path='/blog' component={Blog}></Route>
                <Route path='/@:username' component={Me}></Route>
                <Route path='/settings' component={Settings}></Route>
                <Route path='/editor' component={Editor}></Route>
                <Route path='/' component={Auth}></Route>
            </Switch>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(App);
