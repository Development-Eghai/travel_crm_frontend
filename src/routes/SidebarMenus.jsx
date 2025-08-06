export const AdminMenu = [
    {
        path: "/admin/admin-dashboard",
        icon:<i className="fa-solid fa-chart-line"></i>,
        name: "Dashboard",
    },
    {
        path: "",
        icon: <i className="fa-solid fa-suitcase-rolling"></i>,
        name: "Trip Management",
        subMenu: [
            {
                path: "/admin/destination-list",
                icon: <i className="fa-solid fa-location-dot"></i>,
                name: "Add Destination",
            },
            {
                path: "/admin/activity",
                icon: <i className="fa-solid fa-location-dot"></i>,
                name: "Add Activity",
            },
            {
                path: "/admin/tour-list",
                icon: <i className="fa-regular fa-paper-plane"></i>,
                name: " Add Trip",
            },
            {
                path: "/admin/category-create",
                icon: <i className="fa-regular fa-paper-plane"></i>,
                name: " Add Category",
            },
            {
                path: "/admin/create-tour-type",
                icon: <i className="fa-regular fa-paper-plane"></i>,
                name: " Add Trip Type",
            },
        ],
    },
    {
        path: "",
        icon: <i className="fa-solid fa-suitcase-rolling"></i>,
        name: "Blogs Management",
        subMenu: [
            {
                path: "/admin/tag-blogs",
                icon: <i className="fa-solid fa-location-dot"></i>,
                name: "Add Blog Tag",
            },
            {
                path: "/admin/categories-blog",
                icon: <i className="fa-solid fa-location-dot"></i>,
                name: "Add Blog Category",
            },
            {
                path: "/admin/blogs-List",
                icon: <i className="fa-solid fa-location-dot"></i>,
                name: "Add Blogs",
            },
            
        ],
    },
    {
        path: "/admin/hotel-List",
        icon:<i className="fa-solid fa-chart-line"></i>,
        name: "Hotel Management",
    },
    {
        path: "/admin/Activity-list",
        icon:<i className="fa-solid fa-chart-line"></i>,
        name: "Activity Management",
    },
    {
        path: "/admin/lead-management",
        icon: <i className="fa-solid fa-user-plus"></i>,
        name: "Lead Management",
    },
    {
        path: "/admin/global-settings",
        icon: <i className="fa-solid fa-user-plus"></i>,
        name: "Global Settings",
    },
]

export const UserMenu = [
    {
        path: "/user/user-dashboard",
        icon: <span className="material-symbols-outlined">dashboard_2
        </span>,
        name: "Dashboard",
    },
]