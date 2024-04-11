import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import { useParams } from "react-router-dom";

const TaskEdit = () => {
    const { id } = useParams();
    const [taskData, setTaskData] = useState(null);

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
        <div>
            <h2>Edit Task</h2>
            {taskData ? (
                <TaskForm initialData={taskData} onSubmit={handleSubmit} />
            ) : (
                <p>Loading task details...</p>
            )}
        </div>
    );
};

export default TaskEdit;
