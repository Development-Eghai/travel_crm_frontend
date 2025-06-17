import React, { useEffect, useState } from 'react'
import { Images } from "../../../helpers/Images/images";


const Header = ({ fixed = true }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`header-main ${isSticky ? "sticky-header" : ""} ${fixed ? "fixed-header" : "not-fixed-header"}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">Search destinations or activities</a>
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
              <img src={Images.logo} alt="logo" className="logo-image" />
            </ul>
            <div className="d-flex ms-auto mt-3 mt-lg-0">
              <a className="navbar-brand" href="/destination">Signup</a>
              <a className="navbar-brand login-btn" href="/destination-list">Login</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default Header
