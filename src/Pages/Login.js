import React from "react";
import { Link } from "react-router-dom";


const Login = () => {


  const signin = () => (
    <section className="wrapper"  style={{ height: "100vh" }}>
    <div className="container">
      <div  className="d-flex justify-content-center align-items-center ">
        <div className="col-md-5 col-sm-12 py-4" style={{ background: "#fff" }}>
          <h1 className="logo text-center">
            <Link to={`/`}>
              <img src="/logo.png" width="200rem" alt="logo" />
            </Link>
          </h1>
          <div className="modal-body signup-form">
            <div className="text-intro" style={{ fontFamily: "poppins" }}>
              <div className="container header-title">
                <h6 className="modal-title pb-4">LOGIN</h6>
              </div>
              <form>
                <div className="container">
                  <div className="row">
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
                    <div className="col-lg-12">
                      <div className="form-group focused mb-1">
                        <label className="form-control-label">
                          Password<span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="pull-right">
                        <label className="form-control-label ">
                          Forgot password?
                        </label>
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
                    Sign In
                  </button>{" "}
                  <small className="pl-3 small">
                    Don't have an account?{" "}
                    <Link to="/signup">
                      <span className="text-danger ">Sign up</span>
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

  return <div>{signin()}</div>;
};

export default Login;
