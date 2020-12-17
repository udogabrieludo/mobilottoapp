import React from 'react'
import {SidebarContainer, Icons, CloseIcon,SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtn,SidebarBtnLink} from './ToggleBarElement'
import {FaBars} from 'react-icons/fa';
import * as Icon from 'react-feather';



const ToggleBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer   isOpen={isOpen} onClick={toggle}>
            <Icons onClick={toggle}>
                <CloseIcon />
            </Icons>
            <SidebarWrapper>
                <SidebarMenu>
                     <SidebarLink to="/" onClick={toggle}>
                     <Icon.Codesandbox size={16} />  <span className="pl-3">Games  </span>
                     </SidebarLink>
                     <SidebarLink to="/" onClick={toggle}>
                     <Icon.Grid size={16} />  <span className="pl-3">Result  </span>
                     </SidebarLink>
                     <SidebarLink to="/syndicate" onClick={toggle}>
                    <Icon.Award size={16} />  <span className="pl-3">Syndicate  </span>
                     </SidebarLink>
                     <SidebarLink to="" onClick={toggle}>
                     <Icon.Layers size={16} />  <span className="pl-3"> Ty Games </span>
                     </SidebarLink>
                     <SidebarLink to="/login" onClick={toggle}>
                     <Icon.LogIn size={16} />  <span className="pl-3"> Login</span>
                     </SidebarLink>
                     
                     
                </SidebarMenu>
                <SidebarBtn>
                       <SidebarBtnLink to="/signup" onClick={toggle}>
                      Open an account
                     </SidebarBtnLink>
               </SidebarBtn>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default ToggleBar
