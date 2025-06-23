export const AdminMenu = [
    {
        path: "/admin/admin-dashboard",
        icon: <span class="material-symbols-outlined">dashboard_2
        </span>,
        name: "Dashboard",
    },
    {
        path: "/admin/home",
        icon: <span class="material-symbols-outlined">dashboard_2
        </span>,
        name: "HomePage",
    },
    {
        path: "/admin/tour",
        icon: <span class="material-symbols-outlined">dashboard_2
        </span>,
        name: "Tour Overview",
    },

    {
        path: "/admin/feedback",
        icon: <span class="material-symbols-outlined">
            feedback
        </span>,
        name: "User",
        subMenu: [
            {
                path: "/admin/termsAndCondition",
                icon: <i className="fa-solid fa-pen-to-square"></i>,
                name: "Terms And Condition",
            },
            {
                path: "/admin/privacyPolicy",
                icon: <i className="fa-regular fa-paper-plane"></i>,
                name: "Privacy Policy",
            },
        ],
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