import React from "react";
import { Link } from "react-router-dom";
import TaskBoard from "../Common/TaskBoard";

export default function Home() {
    return (
        <div className="container mx-auto mt-8">
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
