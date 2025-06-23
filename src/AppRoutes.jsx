import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DestinationFilters from "./pages/user/DestinationFilters";
import TourOverview from "./pages/user/TourOverview";
import Layout from "./container/Layout";

const DestinationDetail = lazy(() => import("./pages/user/DestinationDetail"));
const Homepage = lazy(() => import("./pages/user/Homepage"));

const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/destination" element={<DestinationDetail />} />
                    <Route path="/destination-list" element={<DestinationFilters />} />
                    <Route path="/tour-overview" element={<TourOverview />} />
                    <Route path="/admin/*" element={<Layout />} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRoutes
