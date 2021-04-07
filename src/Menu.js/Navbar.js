
import styled from 'styled-components/macro'
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
background:#fff;
height:80px;
display:flex;
justify-content: center;
align-items : center;
position: sticky;
top:0;
z-index:10;
width:100%;
border-bottom: 1px solid #e0e0e0;

@media (max-width:960px){
    transition: 0.8s all ease;
}

`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:100% ;
height: 80px;
z-index:1;
padding:0 24px;
/* max-width:100%; */

`

export const NavLogo = styled(LinkR)`
color:#000;
justify-self:flex-start;
cursor:pointer;
width:180px;
display:flex;
align-items:center;

@media (max-width: 480px){
    width:150px;
}

`
export const ImgLogo = styled.img`
  width: 100%;
  display:flex;
  justify-self:flex-start;

`

 export const MobileIcon = styled.div`
  display:none;

  @media (max-width: 768px){
    display:block; 
    position:absolute;
    top:0;
    right:0;
    cursor:pointer;
    font-size:1.5rem;
    transform: translate(-100%, 60%)
  }
 `

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style: none;
margin-bottom:0px !important;
text-align:center;

@media (max-width: 768px){
    display:none; 

  }

`

export const NavItems = styled.li`
 height:80px;
 display:flex;
 align-items:center;
`
export const NavLink =styled.a`
 color:#000  ;
 font-family:poppins;
 font-size: 1rem;
 text-decoration:none;
 font-size: 14px;
font-weight: 600 !important;
border-bottom:3px solid transparent;
padding: 0 3px;
text-transform: uppercase;
&:hover{
    color:#BA0B0B;
    transition: all .2s ease-in-out;
}

`

export const NavLinks =styled(LinkR)`
 display: flex;
 align-items: center;
 color:#000  ;
 font-family:poppins;
 font-size: 1rem;
 text-decoration:none;
 font-size: 14px;
font-weight: 600 !important;
padding: 0 3px;
text-transform: uppercase;
transition: all .2s ease-in-out;
border-bottom:3px solid transparent;
 
 padding:0 1rem;
 cursor:pointer;
 height:100%;

 &:active{
     border-bottom: 3px solid #BA0B0B;
 }
 &:hover{
    color:#BA0B0B;
    transition: all .2s ease-in-out;
    /* border-bottom: 3px solid #BA0B0B; */

}


`

export const NavBtn = styled.nav`
display:flex;
align-items:center;


@media (max-width:768px){
    display:none;
}

`

export const NavBtnLinkL = styled(LinkR)`
padding:0 1rem;
text-transform:uppercase;
font-size:14px;
color:#49A35A;
padding:10px 22px;
border-radius:30px;
font-weight:600;
font-family:poppins;
transition: all .2s ease-in-out;

&:hover{
    color:#000
}


`
export const NavBtnLink = styled(LinkR)`

text-transform:uppercase;
color: #ffffff;
border-radius: 50px;
padding: 7px 25px 8px 25px;
white-space: nowrap;
transition: 0.3s;
font-size: 13px;
border: 2px solid transparent;
text-transform: uppercase;
font-weight: 600;
background: #49A35A;
font-family: poppins; 
transition: all .2s ease-in-out;

&:hover{
    color:#49A35A;
    border: 2px solid #49A35A;
    background: transparent;
    transition: all .2s ease-in-out;
}


`