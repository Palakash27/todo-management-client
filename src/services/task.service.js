import { TASKS } from "../constants/apiEndpoints";
import { apiRequest } from "../utils/apiRequest";

const createTask = async (data) => {
    try {
        const response = await apiRequest(TASKS, {
            method: "POST",
            body: data,
        });
        if (!response.ok) {
            throw new Error("Failed to create task");
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating task:", error);
    }
};

const fetchTasks = async () => {
    try {
        const response = await apiRequest(TASKS);
        if (!response.ok) {
            throw new Error("Failed to fetch tasks");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
};

const fetchTaskById = async (id) => {
    try {
        const response = await apiRequest(`${TASKS}/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch task");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching task:", error);
    }
};

const updateTask = async (id, data) => {
    try {
        const response = await apiRequest(`${TASKS}/${id}`, {
            method: "PUT",
            body: data,
        });
        if (!response.ok) {
            throw new Error("Failed to update task");
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating task:", error);
    }
};

const deleteTask = async (id) => {
    try {
        const response = await apiRequest(`${TASKS}/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete task");
        }
        return await response.json();
    } catch (error) {
        console.error("Error deleting task:", error);
    }
};

export const taskService = {
    createTask,
    fetchTasks,
    fetchTaskById,
    updateTask,
    deleteTask,
};
