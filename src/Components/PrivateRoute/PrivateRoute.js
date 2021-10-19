import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth()
    if (loading) {
        return (
            <div class="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>)
    }

    return (

        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;