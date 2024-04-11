import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TaskEdit from "./components/TaskEdit";
import TaskCreate from "./components/TaskCreate";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-task" element={<TaskCreate />} />
                <Route path="/edit-task/:id" element={<TaskEdit />} />
            </Routes>
        </Router>
    );
};

export default App;
