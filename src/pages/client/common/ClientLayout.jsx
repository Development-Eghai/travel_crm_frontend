import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useEffect } from "react";

const ClientLayout = () => {
    useEffect(() => {
        document.body.classList.add("no-scroll");

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    return (
        <div className="client-container">
            <Sidebar />
            <div className="client-right-container">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default ClientLayout;
