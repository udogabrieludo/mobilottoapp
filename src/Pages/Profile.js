import React from 'react'
import Header from '../Menu.js/Header'
import Footer from '../Menu.js/Footer'
import {Link} from 'react-scroll'
import * as Icon from 'react-feather';

const Profile = () => {

    const profileBody = () =>(
        <div className="container-fluid dashboard-wrapper">
        <div className="dashboard-header pb-4" >
        <h4>MY PROFILE</h4>
        </div>
    <div className="container-fluid dashboard d-md-flex justify-content-md-center">
            
    <div className="col-md-3 px-0  pb-5" >
      <div 
        className="nav flex-column  dashboard nav-pills make-me-sticky "
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      > 
      
        <Link
          className="nav-link active"
          id="v-pills-home-tab"
          data-toggle="pill"
          href="#v-pills-home"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
          to="detail"  spy={true} smooth={true}
        >
          My Details
        </Link>
        <Link
          className="nav-link"
          id="v-pills-profile-tab"
          data-toggle="pill"
          href="#v-pills-profile"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
          to="address" spy={true} smooth={true}
        >
         My Address
        </Link>
        <Link
          className="nav-link"
          id="v-pills-messages-tab"
          data-toggle="pill"
          href="#v-pills-messages"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
          to="security" spy={true} smooth={true}
        >
          Seurity
        </Link>
     
      </div>
      
      </div>
      <div className="col-md-8 px-sm-0">
      <div className="tab-content pl-5" id="v-pills-tabContent" >
        <div
          className="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
         <div className="col-12" id="detail">
             <h6><strong>MY DETAILS</strong></h6>
         </div>
            <div >
              <form>
              <div className="container">
                  <img src="/images/avarta.svg" alt="img-4" />
                </div>
                <div className="container pt-2 dashboard-label">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label">
                          Title
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused mb-1">
                        <label className="form-control-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                   
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label">
                          DOB
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused mb-1">
                        <label className="form-control-label">
                          Gender
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                   
                  </div>
                </div>
                <br />
                <div className="container" id="address">
                        <div className="row  pt-2  mx-1" style={{borderTop: "2px solid rgb(211 211 211 / 32%)"}}>
                        </div>
                </div>
                <div className="container pt-2 dashboard-label">
                  <div className="row">
                  <div className="col-12">
                    <h6><strong>MY ADDRESS</strong></h6>
                    </div>
                    <div className="col-lg-6">
                    
                      <div className="form-group focused">
                        <label className="form-control-label">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused mb-1">
                        <label className="form-control-label">
                         Country of Residence
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                   
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label">
                          State of Residence
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused mb-1">
                        <label className="form-control-label">
                         Address
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                   
                  </div>
                </div>
                <br />
                <div id="security"></div>
                <div className="container"  >
                   <div className="row  pt-2  mx-1" style={{borderTop: "2px solid rgb(211 211 211 / 32%)"}}>
                 </div>
                </div>
                <div className="container pt-2 dashboard-label">
                  <div className="row">
                  <div className="col-12">
                    <h6><strong>SECURITY</strong></h6>
                    </div>
                    <div className="col-lg-6">
                    
                      <div className="form-group focused">
                        <label className="form-control-label">
                          Next Of Kin
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused mb-1">
                        <label className="form-control-label">
                        Next Of Kin Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                   
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label">
                         Security Question
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused mb-1">
                        <label className="form-control-label">
                        Security Answer
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                   
                  </div>
                </div>
                <br />

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn  py-2 px-3 my-0"
                    style={{
                      background: "#BA0B0B",
                      color: "#fff",
                      fontSize: ".8rem",
                      textTransform: "uppercase",
                    }}
                  >
                   <strong> SAVE CHANGES</strong>
                  </button>{" "}
                  
                </div>
                <br></br><br></br>
              </form>

          </div>
        </div>
      </div>

      </div>
   
    </div>
       </div>
    )
    return (
        <div>
            <Header />
                 {profileBody()}
            <Footer  className="footer-danger"/>
            
        </div>
    )
}

export default Profile
