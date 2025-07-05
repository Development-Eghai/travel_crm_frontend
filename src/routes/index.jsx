import AdminDashboard from "../../src/pages/admin/AdminDashboard";
import DestinationCreation from "../pages/admin/TripManagement/Destination/DestinationCreation";
import DestinationList from "../pages/admin/TripManagement/Destination/DestinationList";


export const routes = [
    {
        path: "/admin-dashboard",
        component: AdminDashboard,
    },
    {
        path: "/create-desination",
        component: DestinationCreation,
    }
]