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
        path: "",
        icon: <i class="fa-solid fa-suitcase-rolling"></i>,
        name: "Blogs Management",
        subMenu: [
            {
                path: "/admin/category-blog",
                icon: <i class="fa-solid fa-location-dot"></i>,
                name: "Create Blog Category",
            },
            {
                path: "/admin/blog-List",
                icon: <i class="fa-solid fa-location-dot"></i>,
                name: "Create Blog",
            },
        ],
    },
    {
        path: "/admin/tour-packages",
        icon: <span class="material-symbols-outlined">dashboard_2
        </span>,
        name: "Trip Packages",
    },
    {
        path: "/admin/blogs",
        icon: <span class="material-symbols-outlined">dashboard_2
        </span>,
        name: "Blogs",
    },
    {
        path: "/admin/inquiries",
        icon: <span class="material-symbols-outlined">dashboard_2
        </span>,
        name: "Inquiries",
    },
    {
        path: "/admin/bookings",
        icon: <span class="material-symbols-outlined">dashboard_2
        </span>,
        name: "Bookings",
    },

    {
        path: "/admin/users",
        icon: <span class="material-symbols-outlined">dashboard_2
        </span>,
        name: "Users",
    },
    {
        path: "/admin/settings",
        icon: <span class="material-symbols-outlined">dashboard_2
        </span>,
        name: "Settings",
    },

    // {
    //     path: "/admin/feedback",
    //     icon: <span class="material-symbols-outlined">
    //         feedback
    //     </span>,
    //     name: "User",
    //     subMenu: [
    //         {
    //             path: "/admin/termsAndCondition",
    //             icon: <i className="fa-solid fa-pen-to-square"></i>,
    //             name: "Terms And Condition",
    //         },
    //         {
    //             path: "/admin/privacyPolicy",
    //             icon: <i className="fa-regular fa-paper-plane"></i>,
    //             name: "Privacy Policy",
    //         },
    //     ],
    // },


]
export const UserMenu = [
    {
        path: "/user/user-dashboard",
        icon: <span class="material-symbols-outlined">dashboard_2
        </span>,
        name: "Dashboard",
    },
]