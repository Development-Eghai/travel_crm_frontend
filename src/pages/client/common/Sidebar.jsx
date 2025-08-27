import { NavLink } from 'react-router-dom';
import { ClientMenu } from '../../../routes/SidebarMenus'

const Sidebar = () => {

    return (
        <div className="client-sidebar d-none d-xl-block">
            <div className="sidebar-header">
                sidebar logo
            </div>
            <div className="sidebar-body">
                {ClientMenu?.map((item, i) => {
                    return (
                        <div key={i} className="sidebar-item py-2">
                            <div className="sidebar-content-heading">
                                {item.name}
                            </div>
                            {item?.subMenu?.map((sub, j) => (
                                <NavLink to={sub.path} key={j} className="row sidebar-body-content ps-4 py-2">
                                    <span className="col-1">
                                        {sub.icon}
                                    </span>
                                    <span className="col ps-3">
                                        {sub.name}
                                    </span>
                                </NavLink>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar;