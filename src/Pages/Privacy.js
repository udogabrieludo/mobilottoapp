import React from "react";
import { Link } from "react-scroll";
import Footer from "../Menu.js/Footer";
import Header from "../Menu.js/Header";

const Privacy = () => {
  const heroBanner = () => (
    <div className=" wrapper">
      <section className="d-flex align-items-center about-us justify-content-md-center">
        <div
          className="container text-center text-white"
          data-aos="zoom-out"
          data-aos-delay={100}
        >
          <h1>PRIVACY POLICY</h1>
        </div>
      </section>
    </div>
  );

  const sideTab = () => (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-4 pb-5">
          <div
            className="nav flex-column side-tab nav-pills make-me-sticky "
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <Link
              className="nav-link py-2"
              id="v-pills-home-tab"
              data-toggle="pill"
              id="v-pills-home-tab"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
              to="intro"
              spy={true}
              smooth={true}
            >
              {" "}
              Introduction
            </Link>
            <Link
              className="nav-link py-2"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              to="intellect"
              spy={true}
              smooth={true}
            >
              Intellectual Property Rights
            </Link>
            <Link
              className="nav-link  py-2"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              to="restriction"
              spy={true}
              smooth={true}
            >
              Restrictions
            </Link>
            <Link
              className="nav-link  py-2"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              to="content"
              spy={true}
              smooth={true}
            >
              Your Content
            </Link>

            <Link
              className="nav-link  py-2"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              to="warranty"
              spy={true}
              smooth={true}
            >
              No warranties
            </Link>

            <Link
              className="nav-link  py-2"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              to="limitation"
              spy={true}
              smooth={true}
            >
              Limitation of liability
            </Link>

            <Link
              className="nav-link  py-2"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              to="security"
              spy={true}
              smooth={true}
            >
              Indemnification
            </Link>

            <Link
              className="nav-link  py-2"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              to="security"
              spy={true}
              smooth={true}
            >
              Severability
            </Link>

            <Link
              className="nav-link  py-2"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              to="security"
              spy={true}
              smooth={true}
            >
              Assignment
            </Link>

            <Link
              className="nav-link  py-2"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              to="security"
              spy={true}
              smooth={true}
            >
              Entire Agreement
            </Link>

            <Link
              className="nav-link  py-2"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              to="security"
              spy={true}
              smooth={true}
            >
              Governing Law & Jurisdiction
            </Link>
          </div>
        </div>
        <div className="col-md-8">
            <div className="pl-4">
           <div id="intro">
            <h4 className="text-danger"><strong>INTRODUCTION</strong></h4>
            <p>
                These Website Standard Terms and Conditions written on this webpage
                shall manage your use of our website, Webiste Name accessible at
                greenvest.com These Terms will be applied fully and affect to your
                use of this Website. By using this Website, you agreed to accept all
                terms and conditions written in here. You must not use this Website
                if you disagree with any of these Website Standard Terms and
                Conditions. Minors or people below 18 years old are not allowed to
                use this Website.
            </p>
           </div>
           <div id="intellect">
               <h4 className="text-danger text-uppercase"><strong>Intellectual Property Rights</strong></h4>
               <p>
               Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.

              You are granted limited license only for purposes of viewing the material contained on this Website.
               </p>
           </div>
           <div id="restriction">
               <h4 className="text-danger text-uppercase"><strong> Restrictions</strong></h4>
               <p>
               Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.

              You are granted limited license only for purposes of viewing the material contained on this Website.
               </p>
           </div>
           <div id="content">
            <h4 className="text-danger text-uppercase"><strong> Your Content</strong></h4>
            <p>
            In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Company Name a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.

             Your Content must be your own and must not be invading any third-party's rights. Company Name reserves the right to remove any of Your Content from this Website at any time without notice.
            </p>
           </div>
           <div id="warranty">
            <h4 className="text-danger text-uppercase"><strong>  No warranties</strong></h4>
            <p>
            This Website is provided “as is,” with all faults, and Company Name express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
             Also, nothing contained on this Website shall be interpreted as advising you.
            </p>
           </div>
           <div id="limitation">
            <h4 className="text-danger text-uppercase"><strong> Limitation of liability</strong></h4>
            <p>
            This Website is provided “as is,” with all faults, and Company Name express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
             Also, nothing contained on this Website shall be interpreted as advising you.
            </p>
           </div>
          
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Header />
      {heroBanner()}
      {sideTab()}
      <Footer className="footer-white" />
    </div>
  );
};

export default Privacy;
