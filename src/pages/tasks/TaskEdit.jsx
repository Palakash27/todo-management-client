import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../../components/Common/TaskForm";
import { ROUTES } from "../../constants/routes";
import { taskService } from "../../services/task.service";

const TaskEdit = () => {
    const { id } = useParams();
    const [taskData, setTaskData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTaskDetails = async () => {
            const data = await taskService.fetchTaskById(id);
            setTaskData(data);
        };

        fetchTaskDetails();
    }, [id]);

    const handleSubmit = async (formData) => {
        await taskService.updateTask(id, formData);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg bg-white">
            <button
                onClick={() => navigate(ROUTES.HOME)}
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
