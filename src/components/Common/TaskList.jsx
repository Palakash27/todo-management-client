import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ title, tasks, onDragOver, onDrop }) => {
    const [sortOrder, setSortOrder] = useState("asc");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        setShowDropdown(false);
    };

    const sortedTasks = [...tasks].sort((a, b) => {
        return sortOrder === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
    });

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div
            className="w-2/3 md:w-1/3 border rounded-lg p-4 m-2"
            onDrop={onDrop}
            onDragOver={onDragOver}
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md"
                    >
                        Sort
                    </button>
                    {showDropdown && (
                        <ul className="absolute bg-white border border-gray-200 rounded-md py-1 w-24 top-8 right-0 z-10">
                            <li>
                                <button
                                    onClick={handleSortChange}
                                    value="asc"
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    Sort A-Z
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleSortChange}
                                    value="desc"
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    Sort Z-A
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <ul>
                {sortedTasks.map((task) => (
                    <TaskItem key={task._id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
