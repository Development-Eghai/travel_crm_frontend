import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Homepage = lazy(() => import("./pages/user/Homepage"));

const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRoutes
