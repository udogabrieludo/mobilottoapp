import React from 'react'
import {SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtn,SidebarBtnLink} from './ToggleBarElement'

const ToggleBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer   isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                     <SidebarLink to="/" onClick={toggle}>
                         Games
                     </SidebarLink>
                     <SidebarLink to="/" onClick={toggle}>
                         Result
                     </SidebarLink>
                     <SidebarLink to="/syndicate" onClick={toggle}>
                         Syndicate
                     </SidebarLink>
                     <SidebarLink to="" onClick={toggle}>
                         Ty Games
                     </SidebarLink>
                     <SidebarLink to="/login" onClick={toggle}>
                         Login
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
