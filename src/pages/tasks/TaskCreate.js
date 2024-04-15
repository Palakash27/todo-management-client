import React from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../../components/Common/TaskForm";
import { ROUTES } from "../../constants/routes";
import { taskService } from "../../services/task.service";

const TaskCreate = () => {
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        await taskService.createTask(formData);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg bg-white">
            <button
                onClick={() => navigate(ROUTES.HOME)}
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
