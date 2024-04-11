import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ title, tasks, onDragOver, onDrop }) => {
    return (
        <div
            className="w-1/3 border rounded-lg p-4"
            onDrop={onDrop}
            onDragOver={onDragOver}
        >
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task._id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
