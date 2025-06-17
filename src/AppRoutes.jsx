import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const DestinationDetail = lazy(() => import("./pages/user/destinationDetail"));
const Homepage = lazy(() => import("./pages/user/Homepage"));

const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/destination" element={<DestinationDetail />} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRoutes
