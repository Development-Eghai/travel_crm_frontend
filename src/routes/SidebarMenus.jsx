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
        icon: <i class="fa-brands fa-microblog"></i>,
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
        path: "/admin/lead-management",
        icon: <i class="fa-solid fa-circle-user"></i>,
        name: "Lead Management",
    },
    {
        path: "/admin/quote-builder",
        icon: <i class="fa-solid fa-money-bill-trend-up"></i>,
        name: "QuoteBuilder",
    },
    {
        path: "/admin/global-settings",
        icon: <i class="fa-solid fa-gear"></i>,
        name: "GlobalSettings",
    },
    {
        path: "",
        icon: <i class="fa-solid fa-warehouse"></i>,
        name: "Inventory",
        subMenu: [
            {
                path: "/admin/not-available-1",
                icon: <span class="material-symbols-outlined">
                hotel
                </span>,
                name: "Hotels",
            },
            {
                path: "/admin/not-available-2",
                icon: <span class="material-symbols-outlined">
                person_play
                </span>,
                name: "Activities",
            },
            {
                path: "/admin/not-available-3",
                icon:<span class="material-symbols-outlined">
                local_taxi
                </span>,
                name: "Cab Bookings",
            },

        ],
    },
    {
        path: "",
        icon: <i class="fa-brands fa-adversal"></i>,
        name: "Sales & Marketing",
        subMenu: [
            {
                path: "/admin/not-available",
                icon: <span class="material-symbols-outlined">
                diversity_3
                </span>,
                name: "Leads",
            },
            {
                path: "/admin/not-available",
                icon: <span class="material-symbols-outlined">
                format_quote
                </span>,
                name: "Quotations",
            },
            {
                path: "/admin/not-available",
                icon:<span class="material-symbols-outlined">
                featured_seasonal_and_gifts
                </span>,
                name: "Offers & Coupons",
            },
            {
                path: "/admin/not-available",
                icon:<span class="material-symbols-outlined">
                local_atm
                </span>,
                name: "Banners",
            },

        ],
    },
    {
        path: "",
        icon: <i class="fa-solid fa-newspaper"></i>,
        name: "Sales & Marketing",
        subMenu: [
            {
                path: "/admin/not-available",
                icon: <span class="material-symbols-outlined">
                contract_edit
                </span>,
                name: "CMS",
            },
            {
                path: "/admin/not-available",
                icon: <span class="material-symbols-outlined">
                search_gear
                </span>,
                name: "SEO Settings",
            },
        ],
    },
    {
        path: "",
        icon: <i class="fa-solid fa-walkie-talkie"></i>,
        name: "Communication",
        subMenu: [
            {
                path: "/admin/not-available",
                icon: <i class="fa-solid fa-envelope-circle-check"></i>,
                name: "Email Marketing",
            },
            {
                path: "/admin/not-available",
                icon: <i class="fa-brands fa-whatsapp"></i>,
                name: "Whatsapp Marketing",
            },
        ],
    }, {
        path: "",
        icon: <i class="fa-solid fa-gears"></i>,
        name: "System Settings",
        subMenu: [
            {
                path: "/admin/not-available",
                icon: <i class="fa-solid fa-wrench"></i>,
                name: "Settings",
            },
            {
                path: "/admin/not-available",
                icon: <i class="fa-solid fa-circle-user"></i>,
                name: "User Roles",
            },
        ],
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