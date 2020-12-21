import React, { useState, useEffect, useRef } from "react";
import ImageCarousel from "./ImageCarousel";
import Footer from "../Menu.js/Footer";
import useTypewriter from "react-typewriter-hook";
import Countdown from "./Countdown";
import Winnerlist from "./Winnerlist";
import { useHistory } from "react-router-dom";
import MenuBar from "../Menu.js/MenuBar";

const MagicOcean = ["Play", "Win", "Instant Pay", "Cashout"];
let index = 0;

const Home = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/supermillion-jackpot");
  }

  const [magicName, setMagicName] = useState("Play");
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = index + 1 > 2 ? 0 : ++index + 1;
      index = index + 1 > 3 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 2500);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="wrapper">
      <MenuBar />

      {/* ======= Hero Section ======= */}
      {/* <section
        id="hero"
        className="d-flex align-items-center "
      >
        <div
          className="container text-center text-white"
          data-aos="zoom-out"
          data-aos-delay={100}
        >
          <h1>{name} Everyday </h1>
          <h1>Lottery Jackpots </h1>

          <div className="pt-3 hero-text">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
              <br /> when an unknown printer took a galley of type and scrambled
            </p>
          </div>

          <div className="container">
            <div className="hero-bodycontent d-lg-flex align-items-center justify-content-around ">
              <div className="jackpock ">
                <h6 className="mb-0">Supermillion Jackpot</h6>
                <h3 className="mb-0">N2,398,000</h3>
              </div>
              <div className="next-draw">
                <h6>Next Draw </h6>
                <div className="mb-0">
                  {" "}
                  <Countdown className="countdown-wrapper dark-text"/>
                </div>
              </div>
              <div className="playnow">
                <div className="playnow-content d-flex align-content-center justify-content-between">
                  <span className="px-3 pt-2">Unlimited Ticket*</span>
                  <button type="button" className="btn btn-success" onClick={handleClick}>
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>*/}
      {/* End Hero */}
      <main id="main">
        <div className="main-hero">
          <div
            id="carouselExampleControls"
            className="carousel slide hero-slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="/images/img-bg.png"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/images/slide2.png"
                  alt="Second slide"
                />
              </div>
              {/* <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/images/slide2.jpg"
                  alt="Third slide"
                />
              </div> */}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div style={{ background: "#fff" }}>
            <div className="container">
              <div className="hero-bodycontent text-center d-lg-flex align-items-center justify-content-around ">
                <div className="jackpock ">
                  <h6 className="mb-0">Supermillion Jackpot</h6>
                  <h3 className="mb-0">N2,398,000</h3>
                </div>
                <div className="next-draw">
                  <h6 className="mb-0">Next Draw </h6>
                  <div className="mb-0">
                    {" "}
                    <Countdown className="countdown-wrapper dark-text" />
                  </div>
                </div>
                <div className="playnow">
                  <div className="playnow-content d-flex align-content-center justify-content-between">
                    <span className="px-3 pt-2 sub-title">
                      Unlimited Ticket*
                    </span>
                    <button
                      type="button "
                      className="btn btn-success sub-title"
                      onClick={handleClick}
                    >
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="featured-services " className="featured-services result-list">
          <div className="container mb-3 pt-5 d-flex  align-items-center justify-content-between  text-white">
            <div className="text-uppercase sub-title">Top Games</div>
            <div className="">
              <a
                type="button"
                className="btn btn-outline-light text-uppercase sub-title"
              >
                See All
              </a>
            </div>
          </div>
        </div>
        <div className="container text-center text-white px-0 mb-5">
          <ImageCarousel />
        </div>
        <section className="pt-5 about-session">
          <div className="container pt-md-5 ">
            <div id="featured-services " className="featured-services">
              <div className="container px-0 mb-5 d-flex justify-content-between align-items-center text-white">
                <div className="text-uppercase sub-title">
                  Why choose Mobilotto
                </div>
                <div className="">
                  <button
                    type="button"
                    className="btn btn-outline-light sub-title text-uppercase"
                  >
                    Read about us
                  </button>
                </div>
              </div>
            </div>

            <div className="row  pb-md-4 text-white why-choose-us text-center justify-content-sm-center ">
              <div className="col-12  col-md-3 m-auto">
                <div className="hover-item">
                  {" "}
                  <img
                    src="/assets/img/img-5.png"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    alt="img-4"
                  />
                </div>
                <h6 className=" mt-2 mb-3">Online Lottery</h6>
                <p className="mt-1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div className="col-12  col-md-3 m-auto">
                <div className="hover-item">
                  {" "}
                  <img
                    src="/assets/img/img-5.svg"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    alt="img-4"
                  />
                </div>
                <h6 className=" mt-2 mb-3">100% Secured</h6>
                <p className="mt-1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div className="col-12  col-md-3 m-auto">
                <div className="hover-item">
                  {" "}
                  <img
                    src="/assets/img/img-6.png"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    alt="img-4"
                  />
                </div>
                <h6 className=" mt-2 mb-3">Live Cashout</h6>
                <p className="mt-1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div className="col-12  col-md-3 m-auto">
                <div className="hover-item">
                  {" "}
                  <img
                    src="/assets/img/img-7.png"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    alt="img-4"
                  />
                </div>
                <h6 className=" mt-2 mb-3">Instant support</h6>
                <p className="mt-1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <Winnerlist />
        </div>
      </main>
      <Footer className="footer-danger" />
    </section>
  );
};

export default Home;
