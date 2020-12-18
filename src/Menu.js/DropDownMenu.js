import React, {useState, useRef} from 'react'
import './DropDown.css'
import * as Icon from 'react-feather'
import { Content } from "../Reuseable.js/Tab"
import { useDetectOutsideClick } from "./useDetectOutsideClick";

const DropDownMenu = () => {

    const [active, setActive] = useState(0);
    const handleClick = e => {
      const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    };
    const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

    const lists = [
        {
            name:"SUPERWIN",
          img: "/assets/img/img-1.png",
        },
        {
            name:"SUPERWIN",
          img: "/assets/img/img-3.png",
        },
        {
            name:"SUPERWIN",
          img: "/assets/img/img-2.png",
        },
        {
            name:"SUPERWIN",
          img: "/assets/img/img-4.png",
        },
        {
            name:"SUPERWIN",
            img: "/assets/img/img-2.png",
         },
        {
            name:"SUPERWIN",
            img: "/assets/img/img-1.png",
        },
      ];

    return (
        <>
              <div className="container d-flex justify-content-center">
                  <div className="col-md-10 ">
                  <div className="row"  className={`menu ${isActive ? "active" : "inactive"}`}>
  <div className="col-3 pl-0">
    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a className="nav-link active d-flex justify-content-between" id="v-pills-home-tab" data-toggle="pill"  aria-selected="true" >LOTTERY 
       <span className="pull-right"><Icon.ChevronRight size={18} /></span></a>
      <a className="nav-link  d-flex justify-content-between" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"> <span>INSTANT </span><span><Icon.ChevronRight size={18} /></span></a>
      <a className="nav-link  d-flex justify-content-between align-items-center" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><div>SCRATCH CARDS</div><div><Icon.ChevronRight size={18} /></div></a>
      <a className="nav-link d-flex justify-content-between" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab"
       aria-controls="v-pills-settings" aria-selected="false">  <span>VIRTUAL </span><span><Icon.ChevronRight size={18} /></span></a>
       <a className="nav-link d-flex justify-content-between" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab"
       aria-controls="v-pills-settings" aria-selected="false"> <span>SPORTS </span><span><Icon.ChevronRight size={18} /></span></a>
          <a className="nav-link d-flex justify-content-between" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab"
       aria-controls="v-pills-settings" aria-selected="false"> <span>CASINO </span><span><Icon.ChevronRight size={18} /></span></a>
       <a className="nav-link d-flex justify-content-between" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab"
       aria-controls="v-pills-settings" aria-selected="false"> <span>RAFLE </span><span><Icon.ChevronRight size={18} /></span></a>
         <a className="nav-link d-flex align-items-center justify-content-between" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab"
       aria-controls="v-pills-settings" aria-selected="false"><span>WORLD LOTTERY </span><span><Icon.ChevronRight size={18} /></span></a>
    </div>
  </div>
  <div className="col-9">
    <div className="tab-content py-3" id="v-pills-tabContent">
      <Content  active={active === 0}>
      <div>
  <ul className="nav nav-pills nav-tab mb-3" id="pills-tab" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" id="pills-home-tab" data-toggle="pill"
       href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">HOURLY</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">DAILY</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">WEEKLY</a>
    </li>
  </ul>
  <div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <div className="row">
                  {lists &&
                    lists.map((list, i) => (
                      <div className="col-md-4  col-6 img-wrappers" key={i}>
                        <div className=" img-tab">
                          <img src={list.img} className="img-fluid" alt="" />
                        </div>
                        <h6>{list.name}</h6>
                        <button className="btn btn-danger check-result" >CHECK RESULT</button>
                      </div>
                    ))}
                </div>

    </div>
    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
  </div>
</div>


      </Content>
    
    </div>
  </div>
</div>
                  </div>

              </div>

        </>
    )
}

export default DropDownMenu
