import React from 'react'
import {Link} from 'react-router-dom'

const Footer = ({className}) => {



    return (
     <div>
  {/* ======= Footer ======= */}
  <footer id="footer" className={className}>
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 footer-contact">
            <img src="/logo.png" className="img-fluid" width="200px" alt="" />
            <div className="footer-contact">
            Mobilotto games is a lottery company that offers all lotto games and 
            is reliably recognized to pay all winning lottery tickets it’s cash prize instantly
            </div>
            <div className="footer-links">
           
            <div className="social-links mt-3">
              <Link to="" className="facebook"><i className="bx bxl-facebook" /></Link>
              <Link to="" className="twitter"><i className="bx bxl-twitter" /></Link>   
              <Link to="" className="instagram"><i className="bx bxl-instagram" /></Link>
              <Link to="" className="linkedin"><i className="bx bxl-linkedin" /></Link>
            </div>
          </div>
          </div>
          <div className="col-lg-2 col-md-2 footer-links">
            <h4>Games</h4>
            <ul>
              <li> <Link to="">Scratch2Win</Link></li>
              <li><Link to="">Pendulum Games</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li> <Link to="/terms">Terms & Conditons</Link></li>
              <li> <Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 footer-links">
            <h4>Resources</h4>
            <ul>
              <li><Link to={`/about-us`}>About Us</Link></li>
              <li> <Link to="">How it Works</Link></li>
              <li><Link to="">Package Plans</Link></li>
              <li><Link to="">Careers</Link></li>
              <li><Link to="">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 footer-links">
            <h4>Contact Us</h4>
            <div>
            <strong>Address:</strong> 24, Ekololu Street, Ekololu,
            Surulere, Lagos.
             <br />
             <strong>Email:</strong> hello@mobilottogames.com<br /><br />
              <strong>Phone:</strong> +234 809 8765 432<br />
              
            </div>

            
            
          </div>
        </div>
      </div>
    </div>
    <div className="container footerbuttom  py-4">
      <div className="copyright">
        © Copyright 2020 <strong><span>Mobilottogames</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        
       <Link to="" className="pr-2"> Support</Link> <Link to="" className="pr-2"> Terms</Link> <Link to=""> Privacy</Link>
      </div>
    </div>
  </footer>{/* End Footer 
  <div id="preloader" />*/}
  <Link to="" className="back-to-top"><i className="icofont-simple-up" /></Link>
</div>

    )
}

export default Footer
