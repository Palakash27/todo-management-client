import React, { useEffect, useState } from "react";
import ProfileModal from "../components/Common/ProfileModal";
import { IMAGES } from "../constants/images";
import { useAuthContext } from "../contexts/AuthContext";
import { userService } from "../services/user.service";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
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

    const handleEditPicture = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container mx-auto mt-8 flex justify-center items-center">
            <div className="bg-white shadow-md rounded-md p-8 items-center flex flex-col">
                <div className="flex">
                    <div className="mr-8 relative">
                        <img
                            src={
                                user && user.avatar
                                    ? user.avatar
                                    : IMAGES.Avatar1
                            }
                            alt="Profile"
                            className="w-24 h-24 rounded-full cursor-pointer"
                            onClick={handleEditPicture}
                        />
                        <button
                            onClick={handleEditPicture}
                            className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer"
                        >
                            Edit
                        </button>
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
            {showModal && (
                <ProfileModal
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                    user={user}
                    setUser={setUser}
                />
            )}
        </div>
    );
};

export default Profile;
