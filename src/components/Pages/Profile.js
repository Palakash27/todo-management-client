import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { isAuthenticated, logout } = useAuth();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (isAuthenticated) {
                    const token = localStorage.getItem("token");
                    const response = await fetch(
                        "http://localhost:3001/api/user/profile",
                        {
                            method: "GET",
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Failed to fetch user data");
                    }

                    const userData = await response.json();
                    setUser(userData);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [isAuthenticated]);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="container mx-auto mt-8 flex justify-center items-center">
            <div className="bg-white shadow-md rounded-md p-8 items-center flex flex-col">
                <div className="flex">
                    <div className="mr-8">
                        <img
                            src={
                                "https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                            }
                            alt="Profile"
                            className="w-24 h-24 rounded-full"
                        />
                    </div>
                    <div>
                        {isAuthenticated && user ? (
                            <div>
                                <p className="text-lg text-gray-700 mb-2">
                                    <span className="font-bold">Username:</span>{" "}
                                    {user.username}
                                </p>
                                <p className="text-lg text-gray-700 mb-2">
                                    <span className="font-bold">
                                        Full Name:
                                    </span>{" "}
                                    {user.fullName}
                                </p>
                                <p className="text-lg text-gray-700 mb-2">
                                    <span className="font-bold">Email:</span>{" "}
                                    {user.email}
                                </p>
                            </div>
                        ) : null}
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="mt-4 bg-red-500 text-white rounded-md p-2"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
