import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {Nav, NavbarContainer, NavLogo,ImgLogo, MobileIcon, NavMenu, NavItems,NavLinks, NavBtn, NavBtnLink, NavBtnLinkL} from './Navbar'

const Headers = ({toggle}) => {
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
                      <NavLinks to="/test">Games</NavLinks>
                      <NavLinks to="/testing">Results</NavLinks>
                      <NavLinks to="/testing">Syndicate </NavLinks>
                      <NavLinks to="/testing">Ty Games</NavLinks>
                  </NavItems>
                </NavMenu>
                <NavBtn>
                    <NavBtnLinkL to="/login">Sign in</NavBtnLinkL>
                    <NavBtnLink to='/signup'>Open an Account</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>

    </>
  )
}

export default Headers
