import AdminDashboard from "../../src/pages/admin/AdminDashboard";
import Activity from "../pages/admin/TripManagement/Activity/Activity";
import DestinationCreation from "../pages/admin/TripManagement/Destination/DestinationCreation";
import DestinationList from "../pages/admin/TripManagement/Destination/DestinationList";
import TourList from "../pages/admin/TripManagement/Tour/TourList";
import TourCreation from "../pages/admin/TripManagement/Tour/TourCreation";
import TourCategory from "../pages/admin/TripManagement/Category/TourCategory";
import TourType from "../pages/admin/TripManagement/TourType/TourType";
import BlogsCategory from "../pages/admin/Blogs/Category/BlogsCategory";
import BlogsList from "../pages/admin/Blogs/BlogsList";
import BlogsCreation from "../pages/admin/Blogs/BlogsCreation";



export const routes = [
    {
        path: "/admin-dashboard",
        component: AdminDashboard,
    },
    {
        path: "/destination-create",
        component: DestinationCreation,
    },
    {
        path: "/destination-list",
        component: DestinationList,
    },
    {
        path: "/activity",
        component: Activity,
    },
    {
        path: "/tour-list",
        component: TourList,
    },
    {
        path: "/tour-create",
        component: TourCreation,
    },
    {
        path: "/category-create",
        component:TourCategory,
    },
    {
        path: "/create-tour-type",
        component:TourType,
    },
    {
        path: "/category-blog",
        component:BlogsCategory,
    },
    {
        path: "/blog-List",
        component:BlogsList,
    },
    {
        path: "/blog-create",
        component:BlogsCreation,
    }
]