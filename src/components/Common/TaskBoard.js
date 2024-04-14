import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { useNavigate } from "react-router-dom";

const TaskBoard = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch tasks data from the API
        const fetchTasks = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/tasks");
                if (!response.ok) {
                    throw new Error("Failed to fetch tasks");
                }
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
                // Handle error
            }
        };

        fetchTasks();
    }, []);

    // Function to filter tasks by status
    const filterTasksByStatus = (status) => {
        return tasks.filter((task) => task.status === status);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const onDrop = async (e, category) => {
        let id = e.dataTransfer.getData("task-id");

        const getData = await fetch(`http://localhost:3001/api/tasks/${id}`);

        if (!getData.ok) {
            throw new Error("Failed to fetch task details");
        }
        const data = await getData.json();
        data.status = category;

        const updateData = await fetch(
            `http://localhost:3001/api/tasks/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        if (!updateData.ok) {
            throw new Error("Failed to create task");
        }
        navigate(0);
    };

    return (
        <div className="flex justify-between mt-4 bg-gray-50">
            <TaskList
                title="To Do"
                tasks={filterTasksByStatus("To Do")}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, "To Do")}
            />
            <TaskList
                title="In Progress"
                tasks={filterTasksByStatus("In Progress")}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, "In Progress")}
            />
            <TaskList
                title="Done"
                tasks={filterTasksByStatus("Done")}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, "Done")}
            />
        </div>
    );
};

export default TaskBoard;
