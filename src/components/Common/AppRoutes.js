import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

// Pages
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import Signup from "../../pages/Signup";
import TaskCreate from "../../pages/tasks/TaskCreate";
import TaskEdit from "../../pages/tasks/TaskEdit";

// Auth
import AuthRoute from "../Auth/AuthRoute";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<Signup />} />
            <Route path="" element={<AuthRoute />}>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.TASKS._BASE}>
                    <Route
                        path={ROUTES.TASKS.CREATE}
                        element={<TaskCreate />}
                    />
                    <Route path={ROUTES.TASKS._DETAIL._BASE}>
                        <Route
                            path={ROUTES.TASKS._DETAIL.EDIT}
                            element={<TaskEdit />}
                        />
                    </Route>
                </Route>
                <Route path={ROUTES.PROFILE} element={<Profile />} />
            </Route>
        </Routes>
    );
}
