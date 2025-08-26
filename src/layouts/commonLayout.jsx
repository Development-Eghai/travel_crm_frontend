import { Outlet } from "react-router-dom"
import Header from "../pages/user/component/Header"
import Footer from "../pages/user/component/Footer"
import { Fragment } from "react"

export const CommonLayout = () => {
    return (
        <Fragment>
            <Header />
            <Outlet />
            <Footer />
        </Fragment>
    )
}