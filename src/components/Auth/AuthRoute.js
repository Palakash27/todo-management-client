import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useAuthContext } from "../../contexts/AuthContext";

const AuthRoute = ({ component: Component, path }) => {
    const { isLoggedIn } = useAuthContext();

    if (!isLoggedIn) {
        return <Navigate to={ROUTES.LOGIN} />;
    }
    return <Outlet />;
};

export default AuthRoute;
