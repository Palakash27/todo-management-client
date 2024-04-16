import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useAuthContext } from "../../contexts/AuthContext";

export default function NavBar() {
    const { isLoggedIn } = useAuthContext();

    if (!isLoggedIn) {
        return (
            <nav className="flex justify-center space-x-4">
                <Link to={ROUTES.LOGIN} className="text-blue-500">
                    Login
                </Link>
                <Link to={ROUTES.SIGN_UP} className="text-blue-500">
                    Signup
                </Link>
            </nav>
        );
    }

    return (
        <nav className="flex justify-center space-x-4">
            <Link to={ROUTES.HOME} className="text-blue-500">
                Home
            </Link>
            <Link to={ROUTES.PROFILE} className="text-blue-500">
                Profile
            </Link>
        </nav>
    );
}
