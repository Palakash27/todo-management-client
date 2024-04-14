import { useState, useEffect } from "react";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("token")
    );

    useEffect(() => {
        setIsAuthenticated(localStorage.getItem("token"));
    }, [isAuthenticated]);

    const login = (token) => {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };

    return {
        isAuthenticated,
        login,
        logout,
    };
};

export default useAuth;
