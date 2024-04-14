import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AuthRoute = ({ component: Component, path }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
