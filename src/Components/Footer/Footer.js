import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { CopyRWrapper, FIcons, FLinkContainer, FLinkItems, FLinkItems1, FLinkItems2, FLinkItems3, FLinkSocial, FLinkTitle, FLinkWrapper, FooterContainer, 
    FooterLink, FooterWrap,FooterWrapCopy,SocialIconLink, WebsiteRights } from './FooterStyle'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                        <FLinkItems1>
                            <FLinkTitle>About Us</FLinkTitle>
                            <p>
                                For a remarkable About page, all you need to do is figure out your company's unique identity, and then share it with the world. Easy, right? Of course not. Your "About Us" page is one of the most important pages on your website, and it needs to be well crafted. This profile also
                             happens to be one of the most commonly overlooked pages, which is why you should make it stand out.
                            </p>
                        </FLinkItems1>
                        
                        <FLinkItems2>
                             <FLinkTitle>Category</FLinkTitle>
                             <FooterLink to='/signin'>Java</FooterLink>
                             <FooterLink to='/signin'>Python</FooterLink>
                             <FooterLink to='/signin'>React Js</FooterLink>
                             <FooterLink to='/signin'>HTML CSS</FooterLink>
                         </FLinkItems2>
                         <FLinkItems3>
                             <FLinkTitle>Contact Us</FLinkTitle>
                             <FooterLink to='/signin'>Contact</FooterLink>
                             <FooterLink to='/signin'>Support</FooterLink>
                             <FooterLink to='/signin'>Destinations</FooterLink>
                             <FooterLink to='/signin'>Sponsorships</FooterLink>
                         </FLinkItems3>
                        </FooterWrap>
                       <FooterWrapCopy>
                 <CopyRWrapper>
             <WebsiteRights>Kv@{new Date().getFullYear()} All rights reserved by- Kv Gasyal</WebsiteRights>
                  </CopyRWrapper>
                  <FLinkSocial>
                         
                         <FIcons><FaFacebook to='/' target='_blank' aria-label="Facebook">Facebook</FaFacebook></FIcons>
                       <FIcons>   <FaInstagram to='/' target='_blank' aria-label="Instagram">Instagram</FaInstagram></FIcons>
                         <FIcons><FaYoutube to='/' target='_blank' aria-label="YouTube">YouTube</FaYoutube></FIcons>
                          <FIcons><FaTwitter to='/' target='_blank' aria-label="Twitter">Twitter</FaTwitter></FIcons>
                         </FLinkSocial>
                  </FooterWrapCopy>            
                  </FooterContainer>
    )
}

export default Footer

