import React from 'react'
import {Link} from 'react-router-dom'

const Topbar = () => {
    return (
        <>
           <div id="topbar" className="d-none d-lg-flex align-items-center ">
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
        </>
    )
}

export default Topbar
