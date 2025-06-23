import { NavLink } from "react-router-dom";
import { AdminMenu, UserMenu } from "../routes/SidebarMenus";

const Sidebar = ({ role = "admin" }) => {
    const menu = role === "admin" ? AdminMenu : UserMenu;

    return (
        <div className={`sidebar-container-main ${role === "admin" ? 'bg-white' : 'bg-white'}`}>
            {menu.map((item, index) => (
                <NavLink to={item.path} key={index} className="d-flex sidebar-menu">
                    <span className="sidebar-icon">{item.icon}</span>
                    <span className="mt-2 ms-2">{item.name}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default Sidebar;
