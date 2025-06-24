
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AdminMenu, UserMenu } from "../routes/SidebarMenus";

const Sidebar = ({ role = "admin" }) => {
    const [openSubmenus, setOpenSubmenus] = useState({});
    const location = useLocation();
    console.log(location.pathname, "pathname")
    const menus = role === "admin" ? AdminMenu : UserMenu;

    const toggleSubmenu = (index) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className={`sidebar-container-main ${role === "admin" ? 'bg-white' : 'bg-white'}`}>
            <h4 className="mb-4 text-white">Admin Panel</h4>
            <ul className="nav flex-column">
                {menus.map((item, index) => (
                    <li key={index} className="nav-item">
                        {item.subMenu ? (
                            <>
                                <button
                                    className={`nav-link w-100 d-flex justify-content-between sidebar-menu pb-2 pt-3 border-none" 
                                    ${location.pathname === item.path ? "active" : ""}`}
                                    onClick={() => toggleSubmenu(index)}
                                >
                                    <div className="d-flex">
                                        <p className="my-auto">{item.icon}</p>
                                        <p className="ms-2">{item.name}</p>
                                    </div>
                                    <div>
                                        <span className="material-symbols-outlined">
                                            {openSubmenus[index] ? "expand_less" : "expand_more"}
                                        </span>
                                    </div>
                                </button>
                                <div className={`collapse ${openSubmenus[index] ? "show" : ""}`}>
                                    <ul className="submenu-list">
                                        {item.subMenu.map((sub, subIndex) => (
                                            <li className={`nav-item submenu-menus ${location.pathname === sub.path ? "active" : ""
                                                }`} key={subIndex}>
                                                <NavLink
                                                    to={sub.path}>
                                                    <span className="me-2">{sub.icon}</span>
                                                    {sub.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <NavLink
                                to={item.path}
                                className={` d-flex sidebar-menu align-items-center ${location.pathname === item.path ? "active" : ""
                                    }`}
                            >
                                <span className="sidebar-icon">{item.icon}</span>
                                <span className="ms-2">{item.name}</span>
                            </NavLink>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
