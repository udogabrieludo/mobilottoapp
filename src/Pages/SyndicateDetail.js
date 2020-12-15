import React from "react";
import Header from "../Menu.js/Header";
import Footer from "../Menu.js/Footer";
import SyndicateCountdown from '../Reuseable.js/SyndicateCountdown'

const SyndicateDetail = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="syndicate-details">
          <div
            className="container  d-flex align-items-center  text-white h-100"
            style={{ fontFamily: "cunia" }}
          >
            <div className="text-uppercase">
              <h6>Ongoing syndicate, play and stand a greater chance</h6>{" "}
            </div>
          </div>
        </div>
        <br></br><br></br>
        <div className="container " >
          <table className="table table-borderless  ">
            <thead className=" thead-light ">
              <tr>    
                <th scope="col"><img src="images/spain.png" className="img-fluid pr-2" width="50px" alt=""/>Spain - Euromillions Superdraw</th>
                <th scope="col"  >$130 Million</th>
                <th scope="col" className="text-right" ><SyndicateCountdown className="countdown-wrapperx"/></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1000 LINES</strong> - Random selection </td>
                <td></td>
                <td className="text-right">346 Shares left <button className="btn btn-danger syndicate-btn" >Play</button></td>
                
              </tr>
              <tr>
                <td><strong>750 LINES</strong> - Random selection </td>
                <td></td>
                <td className="text-right">346 Shares left <button className="btn btn-danger syndicate-btn" >Play</button></td>
                
              </tr>
              <tr>
                <td><strong>150 LINES</strong> - Random selection </td>
                <td></td>
                <td className="text-right">346 Shares left <button className="btn btn-danger syndicate-btn" >Play</button></td>
                
              </tr>
              
            </tbody>
          </table>

          <br></br><br></br>

          <table className="table table-borderless ">
            <thead className=" thead-light ">
              <tr>    
                <th scope="col"><img src="images/usa.png" className="img-fluid pr-2" width="50px" alt=""/>USA - Euromillions Superdraw</th>
                <th scope="col"  >$130 Million</th>
                <th scope="col" className="text-right" ><SyndicateCountdown className="countdown-wrapperx"/></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1000 LINES</strong> - Random selection </td>
                <td></td>
                <td className="text-right">346 Shares left <button className="btn btn-danger syndicate-btn" >Play</button></td>
                
              </tr>
              <tr>
                <td><strong>750 LINES</strong> - Random selection </td>
                <td></td>
                <td className="text-right">346 Shares left <button className="btn btn-danger syndicate-btn" >Play</button></td>
                
              </tr>
              <tr>
                <td><strong>150 LINES</strong> - Random selection </td>
                <td></td>
                <td className="text-right">346 Shares left <button className="btn btn-danger syndicate-btn" >Play</button></td>
                
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      <Footer className="footer-white" />
    </div>
  );
};

export default SyndicateDetail;
