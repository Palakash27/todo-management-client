import React from "react";
import { useNavigate } from "react-router-dom";

import { getRandomColor } from "../../utils/colorUtils";

const TaskItem = ({ task }) => {
    const { _id: id, title, description } = task;
    const navigate = useNavigate();

    const handleEditTask = async () => {
        navigate(`/edit-task/${id}`);
    };

    const handleDeleteTask = async () => {
        try {
            const response = await fetch(
                `http://localhost:3001/api/tasks/${id}`,
                {
                    method: "DELETE",
                }
            );
            if (!response.ok) {
                throw new Error("Failed to delete task");
            }
            console.log("Task deleted successfully");
            navigate(0);
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const handleOnDrag = (e, id) => {
        e.dataTransfer.setData("task-id", id);
    };

    return (
        <li
            className="p-4 mb-4 rounded-md"
            style={{ backgroundColor: getRandomColor() }}
            draggable
            onDragStart={(e) => handleOnDrag(e, id)}
        >
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm mb-2">{description}</p>
            <div className="flex justify-between mt-2">
                <button
                    onClick={handleEditTask}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                >
                    Edit
                </button>
                <button
                    onClick={handleDeleteTask}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
