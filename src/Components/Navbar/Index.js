import React, { useEffect, useState } from 'react'
import { MobileIcon, Nav, NavBtn, NavBtnLink, NavContainer, NavItem, NavLink, NavLogo, NavMenu } from './NavbarStyle'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {

const [scrollNav, setScrollNav]=useState(false)

const changeNav =()=>{
    if(window.scrollY >800){
        setScrollNav(true)
    }else {setScrollNav(false)}
}

useEffect(() =>{
    window.addEventListener('scroll', changeNav)
}, [])

const toggleHome =()=>
{scroll.scrollToTop()}
    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    Kv
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to='courses' smooth='true' duration={1000} spy={true}
                        exact="true" offset={-80}>Courses</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='about' smooth='true' duration={1000} spy={true}
                        exact="true" offset={-80}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='contact' smooth='true' duration={1000}spy={true}
                        exact="true" offset={-80}>Contact</NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
                    <NavBtnLink to='/signIn' >Sign In</NavBtnLink>
                </NavBtn>
            </NavContainer>
        </Nav>
        </>
    )
}

export default Navbar
