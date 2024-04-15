import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskBoard from "../components/Common/TaskBoard";
import { ROUTES } from "../constants/routes";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-between items-center">
                <Link
                    to={`${ROUTES.TASKS._BASE}/${ROUTES.TASKS.CREATE}`}
                    className="bg-blue-500 text-white rounded-md p-2 m-4"
                >
                    Create New Task
                </Link>
                <input
                    autoComplete="off"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value.trim())}
                    placeholder="Search tasks..."
                    className="border rounded-md p-2 m-4"
                />
            </div>
            <TaskBoard searchQuery={searchQuery} />
        </div>
    );
}
