import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:3001/api/user/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const data = await response.json();
            console.log(data);
            login(data.userToken); // Store the JWT token in local storage
            navigate("/"); // Redirect to home page after successful login
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
            <p className="mt-4">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default Login;
