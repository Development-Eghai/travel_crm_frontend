export const AdminMenu = [
    {
        path: "/admin/admin-dashboard",
        icon: <i class="fa-solid fa-grip"></i>,
        name: "Dashboard",
    },
    {
        path: "",
        icon: <i className="fa-solid fa-suitcase-rolling"></i>,
        name: "Trip Management",
        subMenu: [
            {
                path: "/admin/destination-list",
                icon: <span class="material-symbols-outlined">
                distance
                </span>,
                name: "Destinations",
            },
            {
                path: "/admin/activity",
                icon: <span class="material-symbols-outlined">hiking</span>,
                name: "Activities",
            },
            {
                path: "/admin/tour-list",
                icon: <span class="material-symbols-outlined">
                connecting_airports
                </span>,
                name: " All Trips",
            },
            {
                path: "/admin/category-create",
                icon: <span class="material-symbols-outlined">
                bus_railway
                </span>,
                name: "Categories",
            },
            {
                path: "/admin/create-tour-type",
                icon: <span class="material-symbols-outlined">
                checked_bag_question
                </span>,
                name: "Trip Type",
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
                icon: <span class="material-symbols-outlined">
                add_comment
                </span>,
                name: "Blog Tag",
            },
            {
                path: "/admin/categories-blog",
                icon: <span class="material-symbols-outlined">
                dynamic_feed
                </span>,
                name: "Blog Category",
            },
            {
                path: "/admin/blogs-List",
                icon: <span class="material-symbols-outlined">
                article_person
                </span>,
                name: "Blogs",
            },

        ],
    },
    {
        path: "/admin/hotel-List",
        icon: <i className="fa-solid fa-chart-line"></i>,
        name: "Hotel Management",
    },
    {
        path: "/admin/Activity-list",
        icon: <i className="fa-solid fa-chart-line"></i>,
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