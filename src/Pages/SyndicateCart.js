import React, { useState } from "react";
import Header from "../Menu.js/Header";
import Footer from "../Menu.js/Footer";
import { Link } from "react-router-dom";
import SyndicateCountdown from "../Reuseable.js/SyndicateCountdown";

const SyndicateCart = () => {
  const syndicateList = [
    {
      _id : 1, 
      price: 500,
      shares: 130,
      lines: 1000,
    },
    {
      _id: 2,
      price: 700,
      shares: 140,
      lines: 650,
    },
  ];


  const [num, setNum] = useState(syndicateList.map(_item => 1));
  const [disable, setDisable] = useState(syndicateList.map(_item => false));

  const incrementCount = (index)=> {
    num[index]++;
    setNum([...num]);
    disable[index] = false;
    setDisable([...disable]);
  };

  const decrementCount = (index)=> {
    if (num[index] > 1) {
      disable[index] = false;
      setDisable([...disable]);
      num[index]--;
      setNum([...num]);
    } else {
      num[index] = 1;
      setNum([...num]);
      disable[index] = true;
      setDisable([...disable]);
    }
  };

  /* const [num, setNum] = useState(1);
  const [disble, setDisable] = useState(false);

  const incrementCount = () => {
    setNum(num + 1);
    setDisable(false);
  };

  const decrementCount = () => {
    if (num > 1) {
      setDisable(false);
      setNum(num - 1);
    } else {
      setNum(1);
      setDisable(true);
    }
  };
 */
  const cartTotal =()=>(
      <div className="container pt-5 px-0 d-md-flex align-items-center ">
          <div className="total-pay col-md-5">
              <div className="d-flex align-items-center py-3 justify-content-between" >
                   <div>200 Lines Syndicate <small>(1 X N13.33)</small>
                   </div>
                   <div>N2,500</div>
              </div>
              <div className="d-flex justify-content-between py-3 border-top ">
                   <h6>Potential Winning</h6>
                   <h6>N25,000</h6>
              </div>
          </div>
          <div className="pay-btn  col-md-7">
            <div className="d-flex justify-content-end">
            <button className="btn btn-danger syndicate-btn mx-0" >PROCEED</button>
            </div>
          </div>

      </div>
  )

  

  const synList = () =>(
    <div className="">
        { syndicateList && syndicateList.map((syndicate, i)=>(
            <div key={i}>
       <div className="container cart-box  d-flex align-items-center justify-content-between">
      <div>
        <h6>{syndicate.lines} LINES</h6>
        <div>
          <small>Random selection</small>
        </div>
      </div>
      <div>
        <h6>Share price: {syndicate.price}</h6>
      </div>
    </div>

    <div className="container pb-5 cart-box1 d-flex align-items-center justify-content-between">
      <div>
        <Link to="" className="text-success">
          <strong>View all {syndicate.lines} lines</strong>
        </Link>
      </div>
      <div>
        <div className="input-group d-md-flex align-items-center justify-content-end">
          <span className="pr-4"> {syndicate.shares} Shares Left</span>
          <div className="d-flex align-items-center">
          <span className="input-group-btn">
            <button
              className="btn btn-danger px-3"
              disabled={disable[i]}
              onClick={ ()=> decrementCount(i)
              }
              type="button"
            >
              -
            </button>
          </span>
          <span className="countDisplay input-group-btn">{num[i]}</span>
          <span className="input-group-btn">
            <button
              className="btn btn-danger px-3"
              onClick={()=>incrementCount(i)}
              type="button"
            >
              +
            </button>
          </span>
          </div>
        </div>
      </div>
    </div>
            </div>
        ))}
  
 
  </div>
  )

  const syndicate = ()=>(
      <>
      <Header />
      <div>
        <div className="syndicate-details">
          <div
            className="container  d-flex align-items-center justify-content-between  h-100"
            style={{ fontFamily: "cunia" }}
          >
            <div className="text-uppercase text-white">
              <h5>$130 MILLION</h5>{" "}
            </div>
            <div className=" text-white">
              <h6>
                <SyndicateCountdown className="countdown-wrappers" />
              </h6>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
          {synList()}
          <section className="multi-draws">
              <div className="container pl-0 d-md-flex align-items-center">
                 <div className=" col-md-3">
                         <h6><strong><i className="fa fa-circle text-danger pr-2"></i>MULTI DRAWS</strong></h6> 
                 </div>
                 <div className=" col-md-3">
                          <select className="select-form">
                         <option value="">5 Draws (5% discount)</option>
                         <option value="">10 Draws (2% discount)</option>
                         </select>

                        
                 </div>
              </div>
          </section>
          {cartTotal()}
      </div>
      <Footer className="footer-white" />
      </>
  )

  return (
    <div>
      {syndicate()}
    </div>
  );
};

export default SyndicateCart;
