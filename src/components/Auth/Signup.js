import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:3001/api/user/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullName,
                        email,
                        password,
                        username,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Signup failed");
            }

            navigate("/login"); // Redirect to login page after successful signup
        } catch (error) {
            console.error("Signup error:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                </div>
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
                <div className="mb-4">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
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
            <p className="mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                    Log in
                </Link>
            </p>
        </div>
    );
};

export default Signup;
