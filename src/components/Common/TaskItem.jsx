import React from "react";
import { useNavigate } from "react-router-dom";

import { taskService } from "../../services/task.service";
import { getRandomColor } from "../../utils/colorUtils";

const TaskItem = ({ task }) => {
    const { _id: id, title, description } = task;
    const navigate = useNavigate();

    const handleEditTask = async () => {
        navigate(`/tasks/${id}/edit`);
    };

    const handleDeleteTask = async () => {
        taskService.deleteTask(id);
        navigate(0);
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
                    className="bg-white px-3 py-1 rounded-md mr-2"
                >
                    &#x270D;
                </button>
                <button
                    onClick={handleDeleteTask}
                    className="bg-white px-3 py-1 rounded-md"
                >
                    &#128465;
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
