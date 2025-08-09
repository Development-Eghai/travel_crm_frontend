import React, { useEffect, useState } from 'react'
import { Images } from "../../../helpers/Images/images";
import { GetSpecificAppConfig } from '../../../common/api/ApiService';
import { BACKEND_DOMAIN } from '../../../common/api/ApiClient';


const Header = ({ fixed = true }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [appConfigData, setAppConfigData] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const getAppConfig = async () => {
    const response = await GetSpecificAppConfig()
    if (response && response?.statusCode === 200) {
      setAppConfigData(response?.data)
    }
  }

  useEffect(() => {
    getAppConfig()
  }, [])


  return (
    <div className='overflow-hidden'>
      <div className={`header-main ${isSticky ? "sticky-header" : ""} ${fixed ? "fixed-header" : "not-fixed-header"}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a href='/'>
              <img src={`${BACKEND_DOMAIN}${appConfigData?.logo_url}`} alt="logo" className="logo-image" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <a className="navbar-brand" href="/tour-overview">Search destinations or activities</a>
              </ul>
              <div className="d-flex flex-column flex-lg-row  mt-3 mt-lg-0">
                <a className="navbar-brand" href="/blogs">Blogs</a>
                <a className="navbar-brand" href="/blogs-detail">Blogs Detail</a>
                <a className="navbar-brand" href="/contact-us">Contact Us</a>
                <a className="navbar-brand" href="/about-us">About Us</a>
                <a className="navbar-brand" href="/destination">Signup</a>
                <a className="navbar-brand login-btn mt-lg-0 mt-4" href="/destination-list">Login</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}


export default Header
