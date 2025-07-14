export const AdminMenu = [
    {
        path: "/admin/admin-dashboard",
        icon:<i class="fa-solid fa-chart-line"></i>,
        name: "Dashboard",
    },
    {
        path: "",
        icon: <i class="fa-solid fa-suitcase-rolling"></i>,
        name: "Trip Management",
        subMenu: [
            {
                path: "/admin/destination-list",
                icon: <i class="fa-solid fa-location-dot"></i>,
                name: "Add Destination",
            },
            {
                path: "/admin/activity",
                icon: <i class="fa-solid fa-location-dot"></i>,
                name: "Add Activity",
            },
            {
                path: "/admin/tour-list",
                icon: <i className="fa-regular fa-paper-plane"></i>,
                name: " Add Tour",
            },
            {
                path: "/admin/category-create",
                icon: <i className="fa-regular fa-paper-plane"></i>,
                name: " Add Category",
            },
            {
                path: "/admin/create-tour-type",
                icon: <i className="fa-regular fa-paper-plane"></i>,
                name: " Add Tour Type",
            },
        ],
    },
    {
        path: "/admin/hotel-List",
        icon:<i class="fa-solid fa-chart-line"></i>,
        name: "Hotel Management",
    },
    {
        path: "/admin/Activity-list",
        icon:<i class="fa-solid fa-chart-line"></i>,
        name: "Activity Management",
    },

]

export const UserMenu = [
    {
        path: "/user/user-dashboard",
        icon: <span class="material-symbols-outlined">dashboard_2
        </span>,
        name: "Dashboard",
    },
]