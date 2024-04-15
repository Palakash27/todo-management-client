import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { localStorage } from "../utils/token";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children, ...props }) => {
    const [token, setToken] = useState(localStorage.getToken());
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeToken();
        setToken(null);
        navigate(ROUTES.LOGIN);
    };

    const login = (token) => {
        localStorage.setToken(token);
        setToken(token);
        navigate(ROUTES.HOME);
    };

    const value = {
        token,
        login,
        logout,
        isLoggedIn: !!token,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => React.useContext(AuthContext);
