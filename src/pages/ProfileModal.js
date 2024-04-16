import React from "react";
import { IMAGES } from "../constants/images";
import { userService } from "../services/user.service";
import Avatar from "./Avatar"; // Component for displaying avatars

const ProfileModal = ({ showModal, handleCloseModal, user, setUser }) => {
    const handleAvatarSelection = async (avatarUrl) => {
        try {
            console.log(user);
            // Update the user's profile picture
            const updatedUser = await userService.updateProfilePicture(
                user.id,
                avatarUrl
            );
            setUser(updatedUser);
            handleCloseModal();
        } catch (error) {
            console.error("Error updating profile picture:", error);
        }
    };

    // List of avatar URLs
    const avatars = Object.keys(IMAGES).map((key) => IMAGES[key]);
    console.log(avatars);
    return (
        <div
            className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 ${
                showModal ? "" : "hidden"
            }`}
        >
            <div className="bg-white rounded-md p-8 max-w-md w-full">
                <h2 className="text-lg font-semibold mb-4">
                    Select Profile Picture
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {avatars.map((avatar, index) => (
                        <Avatar
                            key={index}
                            src={avatar}
                            alt={`Avatar ${index + 1}`}
                            onClick={() => handleAvatarSelection(avatar)}
                            className="w-16 h-16" // Adjust size as needed
                        />
                    ))}
                </div>
                <button
                    onClick={handleCloseModal}
                    className="mt-4 bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 w-full"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ProfileModal;
