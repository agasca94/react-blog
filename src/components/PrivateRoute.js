import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, token, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                token ? (
                    <Component {...props}/>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    />
                )
            }
        />
    );
}

const mapStateToProps = ({ auth: { data } }) => ({
    token: data.token
})

export default connect(mapStateToProps)(PrivateRoute);
