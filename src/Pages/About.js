import React from 'react'
import Header from '../Menu.js/Header'
import Footer from '../Menu.js/Footer'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className=" wrapper">
            <Header />
            {/* ======= Hero Section ======= */}
<section  className="d-flex align-items-center about-us justify-content-md-center">
  <div className="container text-center text-white" data-aos="zoom-out" data-aos-delay={100}>
    <h1>ABOUT US</h1>
      
  </div>
</section>{/* End Hero */}
<section  style={{background:"#fff"}} className="d-flex align-items-center">
  <div className="container " data-aos="zoom-out" data-aos-delay={100} style={{color:"#222"}}>
     <div className="row pb-5">
       <div className="col-md-6 text-uppercase  d-flex align-items-center" >
          <h1> <blockquote><b>We gave lottery a new name That’s how we changed the game</b></blockquote></h1>
       </div>
       <div className="col-md-6">
         <img src="/images/img-1.svg" alt="" className="img-fluid" />
       </div>
     </div>
     <div className="row pt-5">
       <div className="col-md-6  d-flex align-items-center">
       <img src="/images/img-1.svg" alt="" className="img-fluid" />
       </div>
       <div className="col-md-6 d-flex align-items-center">
       
         <div>
         <h3>WHO WE ARE</h3>
         <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate 
             non provident, similique sunt in 
             culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga 
             non provident, similique sunt in 
             culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
             culpa qui officia deserunt mollitia animi, id est laborum et dolorum fugaculpa 
             qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
         </div>
       </div>
     </div>
      
  </div>
</section>


{/* ======= How It Works ======= */}
<section id="featured-services" className="featured-services howitworks text-center" style={{padding:"3rem 0 8rem 0"}}>
    <div className="container text-center py-5">
        <div> <h3>HOW IT WORKS</h3></div>
    </div>
  <div className="container" data-aos="fade-up">
    <div className="row">
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
          <div className="icon"><img src="/assets/img/img-5.png"  data-aos="fade-up" data-aos-delay="400" alt="img-4" /></div>
          <h4 className="title"><Link to="">Online Lottery</Link></h4>
          <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
          <div className="icon"><img src="/assets/img/img-5.svg"  data-aos="fade-up" data-aos-delay="400" alt="img-4" /></div>
          <h4 className="title"><Link to="">100% Secured</Link></h4>
          <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
          <div className="icon"><img src="/assets/img/img-6.png"  data-aos="fade-up" data-aos-delay="400" alt="img-4" /></div>
          <h4 className="title"><Link to="">Live Cashout</Link></h4>
          <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
          <div className="icon"><img src="/assets/img/img-7.png"  data-aos="fade-up" data-aos-delay="400" alt="img-4" /></div>
          <h4 className="title"><Link to="">Instant Support</Link></h4>
          <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        </div>
      </div>
    </div>
  </div>
</section>{/* End Featured Services Section */}

<Footer className="footer-danger"/> <br></br>
</div>
    )
}

export default About
