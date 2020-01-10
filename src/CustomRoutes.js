import {Redirect, Route} from "react-router";
import {auth} from "./auth";
import React from "react";

export const PrivateRoute = ({ component: Component, ...children }) => (
    <Route {...children} render={(props) => (
        auth.check()
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)