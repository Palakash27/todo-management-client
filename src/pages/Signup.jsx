import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useAuthContext } from "../contexts/AuthContext";
import { userService } from "../services/user.service";

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const { isLoggedIn } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(fullName, email, password, username);
            navigate(ROUTES.LOGIN); // Redirect to login page after successful signup
        } catch (error) {
            setError(error.message || "Signup failed");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        autoComplete="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value.trim())}
                        placeholder="Username"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        autoComplete="name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value.trim())}
                        placeholder="Full Name"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        autoComplete="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value.trim())}
                        placeholder="Email"
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
                    Sign Up
                </button>
            </form>
            {error && (
                <div className="mb-4 mt-4 text-red-500">
                    <p>{error}</p>
                </div>
            )}
            <p className="mt-4">
                Already have an account?{" "}
                <Link to={ROUTES.LOGIN} className="text-blue-500">
                    Log in
                </Link>
            </p>
        </div>
    );
};

export default Signup;
