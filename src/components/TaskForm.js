import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ initialData, onSubmit }) => {
    const [title, setTitle] = useState(initialData?.title || "");
    const [description, setDescription] = useState(
        initialData?.description || ""
    );
    const [status, setStatus] = useState(initialData?.status || "To Do");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const taskData = {
            title,
            description,
            status,
        };

        try {
            await onSubmit(taskData);
            setTitle("");
            setDescription("");
            setStatus("To Do");

            // Navigate to the home page
            navigate("/");
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 max-w-md mx-auto">
            <div className="mb-4">
                <input
                    autoFocus
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="border rounded-md p-2 w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="border rounded-md p-2 w-full"
                ></textarea>
            </div>
            <div className="mb-4">
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border rounded-md p-2 w-full"
                >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
