import AdminDashboard from "../../src/pages/admin/AdminDashboard";
import Activity from "../pages/admin/TripManagement/Activity/Activity";
import DestinationCreation from "../pages/admin/TripManagement/Destination/DestinationCreation";
import DestinationList from "../pages/admin/TripManagement/Destination/DestinationList";
import TourList from "../pages/admin/TripManagement/Tour/TourList";
import TourCreation from "../pages/admin/TripManagement/Tour/TourCreation";



export const routes = [
    {
        path: "/admin-dashboard",
        component: AdminDashboard,
    },
    {
        path: "/create-desination",
        component: DestinationCreation,
    },
    {
        path: "/desination-list",
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
        path: "/creeta-tour",
        component: TourCreation,
    }
]