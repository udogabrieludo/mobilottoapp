import React from "react";
import Header from "../Menu.js/Header";
import Footer from '../Menu.js/Footer'
import * as Icon from 'react-feather';
import {Link} from 'react-router-dom';
import './Dashboard.css'



const Dashboard = () => {
  return (
    <>
    <Header />
    <div className="container-fluid dashboard-wrapper">
        <div className="col-md-8 dashboard-header pb-4">
        <h4>MY DASHBOARD</h4>
        </div>
    </div>
   <div className="container-fluid dashboard d-md-flex justify-content-md-center">
            
    <div className="col-md-3 pb-5">
      <div 
        className="nav flex-column dashboard nav-pills "
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          className="nav-link active"
          id="v-pills-home-tab"
          data-toggle="pill"
          href="#v-pills-home"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Balance
        </a>
        <a
          className="nav-link"
          id="v-pills-profile-tab"
          data-toggle="pill"
          href="#v-pills-profile"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Transfer
        </a>
        <a
          className="nav-link"
          id="v-pills-messages-tab"
          data-toggle="pill"
          href="#v-pills-messages"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          Game History
        </a>
        <a
          className="nav-link"
          id="v-pills-settings-tab"
          data-toggle="pill"
          href="#v-pills-settings"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Transaction
        </a>
      </div>
      
      </div>
      <div className="col-md-8">
      <div className="tab-content pl-2" id="v-pills-tabContent" >
        <div
          className="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
         <div className="col-12">
             <h6><strong>MY WALLET</strong></h6>
         </div>
          <div className="d-md-flex align-items-center justify-content-md-around">
              <div className="col-md-6 ">
                  <div className="dashboard-card mb-3">
                      <small className="text-danger">Playing Balance</small>

                      <h1>N50,000</h1>
                        <h6><Link to=''>Fund Wallet <Icon.ArrowRight size={18}  /></Link></h6>
                  </div>
              </div>
              <div className="col-md-6 ">
              <div className="dashboard-card mb-3">
                      <small className="text-danger">Winning Balance</small>

                      <h1>N2,500</h1>
                        <h6><Link to=''>Withdraw Funds <Icon.ArrowRight size={18} /></Link></h6>
                  </div>
              </div>
          </div>
          <div className="container">
            <div className="row  pt-5 mt-5 mx-1" style={{borderTop: "2px solid rgb(211 211 211 / 32%)"}}>

            </div>
          </div>
            <div >
              <form>
                <div className="container pt-2 dashboard-label">
                <h6><strong>BANK DETAILS</strong></h6>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label">
                          Bank Name
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
                          Account Name
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
        <div
          className="tab-pane fade"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
         Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem 
         deserunt amet. Culpa ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.
        </div>
        <div
          className="tab-pane fade"
          id="v-pills-messages"
          role="tabpanel"
          aria-labelledby="v-pills-messages-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="v-pills-settings"
          role="tabpanel"
          aria-labelledby="v-pills-settings-tab"
        >
          ...
        </div>
      </div>

      </div>
   
    </div>

    <Footer className="footer-danger footer-top" />
    </>
  );
};

export default Dashboard;
