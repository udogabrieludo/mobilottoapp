import React,{useState, useRef} from 'react'
import {FaBars} from 'react-icons/fa'
import * as Icon from 'react-feather'
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { Content } from "../Reuseable.js/Tab"
import {Nav, NavbarContainer, NavLogo,ImgLogo, MobileIcon, NavMenu, NavItems,NavLinks, NavBtn, NavBtnLink, NavBtnLinkL} from './Navbar'
import DropDownMenu from './DropDownMenu';

const Headers = ({toggle}) => {

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const dropDown = () => setIsActive(!isActive);
  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

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


  const onMouseEnter = () =>{
    if(window.innerWidth < 769){
      setIsActive(false)
    }

    setIsActive(true)
  }

  
  const onMouseLeave = () =>{
    if(window.innerWidth < 769){
      setIsActive(false)
    }

    setIsActive(false)
  }

  return (
    <>
     <Nav>
        <NavbarContainer>
                <NavLogo to="/">
                  <ImgLogo src="/logo.png" alt="logo" />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItems>
                      <NavLinks to="/" onClick={dropDown} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Games <Icon.ChevronDown size={16}/></NavLinks>
                      <NavLinks to="/">Results <Icon.ChevronDown size={16}/></NavLinks>
                      <NavLinks to="/syndicate">Syndicate </NavLinks>
                      <NavLinks to="/">Ty Games</NavLinks>
                  </NavItems>
                </NavMenu>
                <NavBtn>
                    <NavBtnLinkL to="/login">Sign in</NavBtnLinkL>
                    <NavBtnLink to='/signup'>Open an Account</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
           
        </Nav>
          <div className="container d-flex justify-content-center">
            <div className="col-md-10 ">
          <div  ref={dropdownRef}   onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`menu row ${isActive ? "active" : "inactive"} `}>
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
  <ul className="nav  nav-tab mb-3" id="pills-tab" role="tablist">
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

export default Headers
