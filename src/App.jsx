import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/Common/AppRoutes";
import Header from "./components/Common/Header";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
    return (
        <Router>
            <AuthProvider>
                <Header />
                <AppRoutes />
            </AuthProvider>
        </Router>
    );
}
