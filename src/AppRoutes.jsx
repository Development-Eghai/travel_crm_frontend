import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DestinationFilters from "./pages/user/DestinationFilters";
import TourOverview from "./pages/user/TourOverview";
import Layout from "./container/Layout";
import Blogs from "./pages/user/Blogs";
import BlogsDetail from "./pages/user/BlogsDetail";
import ContactUs from "./pages/user/ContactUs";

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
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs-detail" element={<BlogsDetail />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRoutes
