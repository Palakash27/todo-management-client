import React from "react";
import { Link } from "react-router-dom";
import TaskBoard from "./TaskBoard";

export default function Home() {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-4">
                Task Management Application
            </h1>
            <Link
                to="/create-task"
                className="bg-blue-500 text-white rounded-md p-2"
            >
                Create New Task
            </Link>
            <TaskBoard />
        </div>
    );
}
