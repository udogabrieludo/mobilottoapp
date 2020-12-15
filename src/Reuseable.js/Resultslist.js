import React from 'react'

const Resultlist =({showFirst, ShowSecond, className})=>{
    return (
        <div>
          <div className="container">
            <div className="row my-5">
                {showFirst?
              <div className={className} >
                <div className="row pr-3">
                  <div className="col-md-8">
                    <div className="row d-flex align-content-center h-75">
                      <div className="col-6">
                        <h6>
                          {" "}
                          Start date{" "}
                          <span className="text-success pl-md-3">12 Dec, 2020</span>
                        </h6>
                      </div>
                      <div className="col-6">
                        <h6>
                          {" "}
                          End date{" "}
                          <span className="text-success pl-md-3">30 Dec, 2020</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4  pr-0 text-right">
                    <a type="button" className="btn btn-success mt-0  checkout-btn">
                      {" "}
                      SEARCH{" "}
                    </a>
                  </div>
                </div>
    
                <div className="result">
                  <table className="table table-borderless text-center">
                    <thead className="result-thread">
                      <tr>
                        <th>CATEGORY</th>
                        <th>WINNING NO</th>
                        <th>DATE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">2</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">5</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">7</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">9</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">2</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">2</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">2</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">2</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">2</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">2</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">2</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">2</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">2</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr><tr>
                        <td>
                          <h6>SPIN 'N' WIN</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item">1</li>
                            <li className="list-inline-item">23</li>
                            <li className="list-inline-item">3</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">34</li>
                            <li className="list-inline-item">51</li>
                            <li className="list-inline-item">2</li>
                          </ul>
                        </td>
                        <td>
                          <h6>25th Nov. 2020</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>: <></>}
              { ShowSecond ?
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
             :<></> }
              <div>

              </div>
            </div>
          </div>
        </div>
      );
}

export default Resultlist