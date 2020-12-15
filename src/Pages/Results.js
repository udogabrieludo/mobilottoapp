import React from "react";
import Header from "../Menu.js/Header";
import Footer from "../Menu.js/Footer";
import Resultlist from '../Reuseable.js/Resultslist'

const Results = () => {
  const heroBanner = () => (
    <div className=" wrapper">
      <section className="d-flex align-items-center about-us justify-content-md-center">
        <div
          className="container text-center text-white"
          data-aos="zoom-out"
          data-aos-delay={100}
        >
          <h1>RESULTS</h1>
        </div>
      </section>
    </div>
  );

  
  return (
    <div>
      <Header />

      {heroBanner()}
      <Resultlist showFirst={true} ShowSecond={true} className="col-md-8" />

      <Footer className="footer-white" />
    </div>
  );
};

export default Results;
