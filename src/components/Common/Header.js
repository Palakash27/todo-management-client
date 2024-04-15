import React from "react";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <>
            <h1 className="text-3xl font-semibold mb-4 mt-4 text-center">
                Task Management Application
            </h1>
            <NavBar />
        </>
    );
}
