import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
       {/* <button type="button" className="mobile-nav-toggle d-lg-none">
          <i className="icofont-navigation-menu"></i>
        </button>
         ======= Top Bar ======= */}
        <div
          id="topbar"
          className="d-none d-lg-flex align-items-center  fixed-top"
        >
          <div className="container-fluid d-flex justify-content-between ">
           
            <div className="contact-info ml-2">
              <Link to="">
                For Issues, contact : support@mobilottogames.com / +234
                08065684757
              </Link>
            </div>
            <div className="social-links mr-2 d-flex ">
              <Link to="" className="linkedin">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                {""} Cart{" "}
                <sup>
                  <span className="badge badge-pill badge-light">3</span>
                </sup>
              </Link>
            </div>
          </div>
        </div>
        {/* ======= Header ======= */}
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <div>
              <h1 className="logo mr-auto">
                <NavLink to={`/`}>
                  <img src="/logo.png" alt="logo" />
                </NavLink>
              </h1>
            </div>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="drop-down">
                  <Link to="">Games</Link>

                </li>

                <li className="drop-down">
                  <Link to="">Results</Link>
                  
                </li>
                <li>
                  <Link to={`/syndicate`}>Syndicate</Link>
                </li>

                <li>
                  <Link to="">tyl Games</Link>
                </li>
             
              </ul>
            </nav>
            {/* .nav-menu */}
            <div>
              <Link to={`/login`} className="mr-3 signin">
                SIGN IN
              </Link>
              <Link to={`/signup`} className="get-started-btn scrollto">
                OPEN AN ACCOUNT
              </Link>
            </div>
          </div>
        </header>
        {/* End Header */}
      </div>
    </div>
  );
};

export default Header;
