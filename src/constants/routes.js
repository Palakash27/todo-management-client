export const ROUTES = {
    HOME: "/",
    SIGN_UP: "/signup",
    LOGIN: "/login",
    PROFILE: "/profile",
    TASKS: {
        _BASE: "tasks",
        CREATE: "create",
        _DETAIL: {
            _BASE: ":id",
            EDIT: "edit",
        },
    },
};
