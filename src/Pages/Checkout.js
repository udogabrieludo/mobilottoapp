import React, { useState } from "react";
import Header from "../Menu.js/Header";
import Footer from "../Menu.js/Footer";

import * as Icon from "react-feather";
import "../Reuseable.js/Checkout.css";

const Checkout = () => {

  const [isOpen, setIsOpen] = useState(false)


  const [visible, setVisible] = useState(true);
  const dates = new Date()
  const options = {  year: 'numeric', month: 'long', day: 'numeric' };


  

  return (
    <div>
      <Header />
      <div className="checkout-wrapper d-md-flex align-items-center mb-5 ">
        <div className="container justify-content-around ">
          <h3>
            <Icon.ShoppingCart size={34} /> My Cart
          </h3>

          <div className="row pt-3">
            <div className="col-md-7">
              <div className="d-flex align-items-start justify-content-between">
                <div className="col-md-12 px-0">
                  <div className="checkout-card">
                    <div className="checkout-card-header">
                        <div className="container d-flex align-items-center justify-content-between">
                        <div className="checkout-header" >
                            <h6><strong>SUPER MILLION</strong></h6>
                            <img src="images/productimg.svg" className="img-fluid"/>
                         </div>
                          <div><Icon.Trash2 color="#C70C0C" />
                          </div>
                        </div>
                    </div>
                     <div  className="checkout-card-body">
                     <div className="container py-5 px-4 ">
                         <div className="border-bottom">
                         <small>You are purchasing a ticket for the draw on {dates.toLocaleDateString('en-US', options)}.</small>
                         </div>
                        {isOpen && (
                          <div  data-aos-easing="linear"  data-aos="fade-in"
                          data-aos-delay="100">
                           <div className="pt-3 d-flex align-content-center  justify-content-between border-bottom">
                             <div><h6 className="mb-0">Number of <strong>SUPERWIN plays</strong></h6>
                             <small>Cost per play</small></div>
                             <div><h6 className=" text-right">2</h6>
                             <h6 className="">N350</h6></div>
                           </div>
                           <div>
                             <small><strong>Play 1</strong></small>

                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">9</li>
                          </ul>

                           </div>
                           <div className="row pt-3 border-bottom">
                             <div className="col-3">
                               <small><strong>Days</strong></small><br></br>
                               <small>Mon, Wed, Fri</small>
                             </div>
                             <div className="col-3">
                               <div><small><strong> Weeks</strong></small></div>
                               <div><small>3</small></div>
                             </div>
                           </div>
                           <div className="row pt-3 ">
                             
                             <div className="col-3">
                               <div><small>Ticket Subtotal</small></div>
                             </div>
                           </div>
                           </div>
                        )}
                          <div className='d-flex align-content-center justify-content-between  view-more'>
                              <div className="text-danger" onClick={()=>{
                              setIsOpen(!isOpen)
                            }}>
                                <h6> {!isOpen?<div>VIEW DETAILS <i className="fa fa-caret-down" aria-hidden="true" style={{color:"#000"}}></i></div>:
                                <div>HIDE DETAILS <i className="fa fa-caret-up" aria-hidden="true" style={{color:"#000"}}></i></div>
                                }</h6>
                            </div>
                              <div>
                                 <h6><strong>N20,000</strong></h6>
                              </div>
                          </div>
                         
                        </div>
                     </div>

                   
                  </div>
                </div>
              </div>
              <a
                type="button"
                className="btn btn-success btn-block  checkout-btn"
              >
                {" "}
                <Icon.PlusCircle size={20} /> PLAY MORE GAMES{" "}
              </a>
            </div>
            <div className="col-md-5">
            <table className="table table-checkout">
              <thead>
                <tr>
                  <th>Total</th>
                  <th className="text-right">N20,000</th>   
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h6 className="text-uppercase">Potential Winnings</h6></td>
                  <td className="text-right"><h6>N1,200,000</h6></td>   
                </tr>
              </tbody>
            </table>
            <a
                type="button"
                className="btn btn-block  checkout-btn-danger"
              >
                {" "}
                CHECKOUT{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      

      <Footer className="footer-danger" />
    </div>
  );
};

export default Checkout;
