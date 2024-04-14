import React, { useState, useEffect } from "react";
import TaskForm from "../Common/TaskForm";
import { useParams, useNavigate } from "react-router-dom";

const TaskEdit = () => {
    const { id } = useParams();
    const [taskData, setTaskData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTaskDetails = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3001/api/tasks/${id}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch task details");
                }
                const data = await response.json();
                setTaskData(data);
            } catch (error) {
                console.error("Error fetching task details:", error);
            }
        };

        fetchTaskDetails();
    }, [id]);

    const handleSubmit = async (formData) => {
        const response = await fetch(`http://localhost:3001/api/tasks/${id}`, {
            method: "PUT",
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
            <h2 className="text-2xl font-semibold">Edit Task</h2>

            {taskData ? (
                <TaskForm initialData={taskData} onSubmit={handleSubmit} />
            ) : (
                <p>Loading task details...</p>
            )}
        </div>
    );
};

export default TaskEdit;
