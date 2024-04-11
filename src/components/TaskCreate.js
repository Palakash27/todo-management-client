import React from "react";
import TaskForm from "./TaskForm";

const TaskCreate = () => {
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
        <div>
            <h2>Create Task</h2>
            <TaskForm onSubmit={handleSubmit} />
        </div>
    );
};

export default TaskCreate;
