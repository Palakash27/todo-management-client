const getToken = () => {
    const tokenString = window.localStorage.getItem("token");
    return tokenString ?? null;
};

const setToken = (token) => {
    window.localStorage.setItem("token", token);
};

const removeToken = () => {
    window.localStorage.removeItem("token");
};

export const localStorage = {
    getToken,
    setToken,
    removeToken,
};
