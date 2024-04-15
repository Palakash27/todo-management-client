import React, { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { userService } from "../services/user.service";

const Profile = () => {
    const [user, setUser] = useState(null);
    const { isLoggedIn, logout } = useAuthContext();

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await userService.fetchUserData();
            setUser(userData);
        };
        fetchUserData();
    }, []);

    const handleLogout = () => {
        logout();
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
                        {isLoggedIn && user ? (
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
