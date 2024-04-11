import React from "react";
import TaskForm from "./TaskForm";
import { useNavigate } from "react-router-dom";

const TaskCreate = () => {
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        const response = await fetch("http://localhost:3001/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error("Failed to create task");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg bg-white">
            <button
                onClick={() => navigate("/")}
                className="text-blue-500 text-sm mr-2 mb-4"
            >
                Back
            </button>
            <h2 className="text-2xl font-semibold mb-4">Create Task</h2>
            <TaskForm onSubmit={handleSubmit} />
        </div>
    );
};

export default TaskCreate;
