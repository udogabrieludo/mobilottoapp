import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const signup = () => (
    <section className="wrapper"  style={{ height: "100vh" }}>
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center "
      
      >
        <div className="col-md-6 col-sm-12 py-4" style={{ background: "#fff" }}>
          <h1 className="logo text-center">
            <Link to={`/`}>
              <img src="/logo.png" width="200rem" alt="logo" />
            </Link>
          </h1>
          <div className="modal-body signup-form">
            <div className="text-intro" style={{ fontFamily: "poppins" }}>
              <div className="container header-title">
                <h6 className="modal-title">CREATE A FREE ACCOUNT</h6>
                <p className="text-danger">Play your first game for FREE!</p>
              </div>
              <div className="container text-center d-lg-flex align-items-center justify-content-md-between">
                <button
                  type="button"
                  className="btn  py-2 px-3   mb-3"
                  style={{
                    background: "#3b5998",
                    color: "#fff",
                    fontSize: ".8rem",
                    textTransform: "uppercase",
                  }}
                >
                  <i className="fa fa-facebook  pr-2"></i> Sign In with facebook
                </button>
                <button
                  type="button"
                  className="btn  py-2 px-3 mb-3"
                  style={{
                    background: "#BA0B0B",
                    color: "#fff",
                    fontSize: ".8rem",
                    textTransform: "uppercase",
                  }}
                >
                  <i className="fa fa-google-plus pr-2"></i> Sign In with Google
                </button>
              </div>
              <div className="container">
                <p className="divider-text">
                  <span className="bg-light">OR</span>
                </p>
              </div>
              {/*  Modal submit  */}

              <form>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group focused">
                        <label className="form-control-label">
                          Full name<span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group focused">
                        <label className="form-control-label">
                          Email<span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group focused">
                        <label className="form-control-label">
                         Phone<span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group focused">
                        <label className="form-control-label">
                          Password<span>*</span>
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
                    Create Account
                  </button>{" "}
                  <small className="pl-3 small">
                    Have an account?{" "}
                    <Link to="/login">
                      <span className="text-danger ">Sign In</span>
                    </Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );

  return <div>{signup()}</div>;
};

export default Register;
