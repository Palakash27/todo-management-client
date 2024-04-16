import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { useNavigate } from "react-router-dom";
import { taskService } from "../../services/task.service";

const TaskBoard = ({ searchQuery }) => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await taskService.fetchTasks();
            setTasks(data);
        };
        fetchTasks();
    }, []);

    useEffect(() => {
        const filterTasksBySearch = (searchQuery) => {
            console.log(searchQuery);
            console.log(tasks);
            return tasks.filter((task) => {
                return (
                    task.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    task.description
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                );
            });
        };
        let filteredTasks = filterTasksBySearch(searchQuery);
        setFilteredTasks(filteredTasks);
    }, [searchQuery, tasks]);

    // Function to filter tasks by status
    const filterTasksByStatus = (status) => {
        if (searchQuery.trim() === "") {
            return tasks.filter((task) => task.status === status);
        }
        return filteredTasks.filter((task) => task.status === status);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const onDrop = async (e, category) => {
        let id = e.dataTransfer.getData("task-id");

        // Fetch task data by id
        const data = await taskService.fetchTaskById(id);
        data.status = category;

        // Update task status
        await taskService.updateTask(id, data);
        navigate(0);
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start m-4 bg-gray-50">
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
