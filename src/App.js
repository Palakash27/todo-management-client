import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./components/Pages/Home";
import TaskEdit from "./components/Pages/TaskEdit";
import TaskCreate from "./components/Pages/TaskCreate";

// Auth
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AuthRoute from "./components/Auth/AuthRoute";
import Profile from "./components/Pages/Profile";
import useAuth from "./hooks/useAuth";

const App = () => {
    const { isAuthenticated } = useAuth();
    console.log("isAuthenticated: ", isAuthenticated);
    return (
        <>
            <h1 className="text-3xl font-semibold mb-4 mt-4 text-center">
                Task Management Application
            </h1>
            <nav className="flex justify-center space-x-4">
                {isAuthenticated ? (
                    <>
                        <a href="/" className="text-blue-500">
                            Home
                        </a>
                        <a href="/profile" className="text-blue-500">
                            Profile
                        </a>
                    </>
                ) : (
                    <>
                        <a href="/login" className="text-blue-500">
                            Login
                        </a>
                        <a href="/signup" className="text-blue-500">
                            Signup
                        </a>
                    </>
                )}
            </nav>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<AuthRoute />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/create-task" element={<TaskCreate />} />
                        <Route path="/edit-task/:id" element={<TaskEdit />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
