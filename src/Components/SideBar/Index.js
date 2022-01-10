import React from 'react'
import { CloseIcon, Icon, SidebarBtn, SidebarBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarStyle'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='courses' onClick={toggle}>
                        Courses
                    </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarBtn to='signin'>Sign In</SidebarBtn>
                    <SidebarBtn to='signup'>Sign Up</SidebarBtn>
                </SidebarBtnWrap>
                </SidebarWrapper>            
        </SidebarContainer>
    )
}

export default Sidebar
