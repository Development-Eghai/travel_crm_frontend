import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DestinationFilters from "./pages/user/DestinationFilters";
import TourOverview from "./pages/user/TourOverview";
import Layout from "./container/Layout";
import Blogs from "./pages/user/Blogs";
import BlogsDetail from "./pages/user/BlogsDetail";
import ContactUs from "./pages/user/ContactUs";
import Payments from "./pages/user/Payments";
import TermsAndConditions from "./pages/user/TermsAndConditions";
import PrivacyPolicy from "./pages/user/PrivacyPolicy";
import AboutUs from "./pages/user/AboutUs";
import DestinationPreview from "./pages/admin/TripManagement/Destination/DestinationPreview";
import DestinationCreation from "./pages/admin/TripManagement/Destination/DestinationCreation";
import SearchResults from "./pages/user/SearchResults";
import HelloWorld from "./pages/user/HelloWorld";
import TravelForm from "./pages/user/TravelForm";

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
                    <Route path="/search-results" element={<SearchResults />} />
                    <Route path="/travel-form" element={<TravelForm />} />
                    <Route path="/hello-world" element={<HelloWorld />} />
                    <Route path="/tour-overview" element={<TourOverview />} />
                    <Route path="/admin/*" element={<Layout />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs-detail" element={<BlogsDetail />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/Payments" element={<Payments />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/about-us" element={<AboutUs />} />

                    {/* Preview */}
                    <Route path="/destination/:slug?/:id?" element={<DestinationPreview />} />

                    <Route path="/admin" element={<Layout />}>
                        <Route path="destination-create/:id?" element={<DestinationCreation />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default AppRoutes
