import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useAuthContext } from "../contexts/AuthContext";
import { userService } from "../services/user.service";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, isLoggedIn } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await userService.login(email, password);
            login(data.userToken);
        } catch (error) {
            setError(error.message || "Login failed");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        autoComplete="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value.trim())}
                        placeholder="Username or Email"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        autoComplete="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value.trim())}
                        placeholder="Password"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
            {error && (
                <div className="mb-4 mt-4 text-red-500">
                    <p>{error}</p>
                </div>
            )}
            <p className="mt-4">
                Don't have an account?{" "}
                <Link to={ROUTES.SIGN_UP} className="text-blue-500">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default Login;
