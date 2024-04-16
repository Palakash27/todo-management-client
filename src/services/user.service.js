import { LOGIN, PROFILE, SIGNUP } from "../constants/apiEndpoints";
import { apiRequest } from "../utils/apiRequest";
import { localStorage } from "../utils/token";

const fetchUserData = async () => {
    const token = localStorage.getToken();
    try {
        if (token) {
            const response = await apiRequest(PROFILE);
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }

            return await response.json();
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};

const login = async (email, password) => {
    const response = await apiRequest(LOGIN, {
        method: "POST",
        body: { email, password },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return await response.json();
};

const signup = async (fullName, email, password, username) => {
    const response = await apiRequest(SIGNUP, {
        method: "POST",
        body: { fullName, email, password, username },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return await response.json();
};

const updateProfilePicture = async (userId, avatarUrl) => {
    const response = await apiRequest(`${PROFILE}/${userId}`, {
        method: "PATCH",
        body: { avatar: avatarUrl },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return await response.json();
};

export const userService = {
    fetchUserData,
    login,
    signup,
    updateProfilePicture,
};
