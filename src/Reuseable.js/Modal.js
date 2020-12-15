import React,{useRef} from "react";

import * as Icon from 'react-feather';
import "./Accordion.css";



export const Modal = ({ showModal, setShowModal }) => {
  const lists = [
    {
      img: "/assets/img/img-1.png",
    },
    {
      img: "/assets/img/img-3.png",
    },
    {
      img: "/assets/img/img-2.png",
    },
    {
      img: "/assets/img/img-4.png",
    },
  ];

  const refModal = useRef();

  const closeByBg = e =>{
      if(refModal.current === e.target){
          setShowModal(false)
      }
  }

  return (
    <>
      {" "}
      {showModal ? (
        <div className="modal-box " ref={refModal} onClick={closeByBg}>
           
          <div className="container ">
            <div className="row">
                <div className="col-md-10 pt-5 mx-auto" style={{background:"#fff"}}  data-aos="flip-left"
                  >
                    <span className="closeModal" onClick={()=>(
                        setShowModal(!showModal)
                    )}>X
                    </span>
                <div className="row  px-3">
                <div className="col-md-6">
                <label className="radio">
                   <span style={{ fontFamily: "cunia" }}>START A SYNDICATE</span>{" "}
                  <p style={{ fontSize: "14px" }}>
                    You can start a syndicate with your colleages and family to
                    increase your chances of winning
                  </p>
                  <input
                    type="radio"
                    defaultChecked="checked"
                    name="is_company"
                  />
                  <span className="checkround" />
                </label>
              </div>
              <div className="col-md-6">
                <label className="radio">
                  <span style={{ fontFamily: "cunia" }}>JOIN A SYNDICATE</span>{" "}
                  <p style={{ fontSize: "14px" }}>
                    You can join a number of syndicates already created by
                    mobilotto
                  </p>
                  <input
                    type="radio"
                    defaultChecked="checked"
                    name="is_company"
                  />
                  <span className="checkround" />
                </label>
              </div>
             </div>
              <div className="col-md-12 pb-5">
                <div className="modalpop-title">
                  <h5>SELECT A GAME</h5>
                </div>
                <div className="row">
                  {lists &&
                    lists.map((list, i) => (
                      <div className="col-md-3  col-6 img-wrapper" key={i}>
                        <div className=" img-box">
                          <img src={list.img} className="img-fluid" alt="" />
                        </div>
                      </div>
                    ))}
                </div>
                <div className="mt-4">
                  <a type="button" className="modal-button">
                    {" "}
                    PROCEED
                  </a>
                </div>
              </div>
              </div>
            </div>
             
          </div>
        
        </div>
      ) : null}
    </>
  );
};
