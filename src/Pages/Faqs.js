import React from "react";
import Header from "../Menu.js/Header";
import Footer from "../Menu.js/Footer";
import Accordion from "../Reuseable.js/Accordion";
import {accordionContentss} from './ListContent';


const Faqs = () => {
  const heroBanner = () => (
    <div className=" wrapper">
      <section className="d-flex align-items-center about-us justify-content-md-center">
        <div
          className="container text-center text-white"
          data-aos="zoom-out"
          data-aos-delay={100}
        >
          <h1>FAQS</h1>
        </div>
      </section>
    </div>
  );

  const Content = () => (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-8">
            
          <div className="container">
        { accordionContentss && accordionContentss.map((acc, i)=>(
             <Accordion key={i} title={acc.title}  className='col-md-12' bodyContent={acc.content}/>
        ))}
            
            
        </div>
         
          </div>
          <div className="col-md-4">
            <h4
              className="text-uppercase text-danger mb-5 px-2"
              style={{ fontWeight: "700" }}
            >
              testimonials
            </h4>
            <div className="testimonials-card">
              <div className="col-12 ">
                <div className="hover-item">
                  <img src="/images/avarta.svg" alt="img-4" />
                </div>
                <div>
                  <h6 className=" mt-2 mb-3">Juliet Jane</h6>
                  <p className="mt-1">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor commodo ligula eget dolor.
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-card">
              <div className="col-12 ">
                <div className="hover-item">
                  <img src="/images/avarta.svg" alt="img-4" />
                </div>
                <div>
                  <h6 className=" mt-2 mb-3">Juliet Jane</h6>
                  <p className="mt-1">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor commodo ligula eget dolor.
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-card">
              <div className="col-12 ">
                <div className="hover-item">
                  <img src="/images/avarta.svg" alt="img-4" />
                </div>
                <div>
                  <h6 className=" mt-2 mb-3">Juliet Jane</h6>
                  <p className="mt-1">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor commodo ligula eget dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Header />

      {heroBanner()}
      {Content()}

      <Footer className="footer-white" />
    </div>
  );
};

export default Faqs;
