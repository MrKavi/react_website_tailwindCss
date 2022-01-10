import { Link  } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer=styled.footer`

background-color: #101522;

`; 

export const FooterWrap=styled.div`
padding-bottom: 0;
padding-top: 25px;
display: flex;
align-items: flex-start;
max-width: 1100px;
margin: 0 auto;
@media screen and (max-width:480px)
 {
 flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
}
`;

export const FooterWrapCopy=styled.div`
padding-top: 0;
padding-bottom: 15px;
display: flex;
justify-content: space-evenly;
align-items: flex-start;
max-width: 1100px;
margin: 0 auto;
@media screen and (max-width:480px)
 {
 flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
}
`;

export const FLinkWrapper=styled.div`
display: flex;

@media screen and (max-width: 820px)
{
    flex-direction: column;
}
`;

export const FLinkItems1=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 16px;
text-align: center;
max-width: 560px;
width: 100%;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 160px;
}
`;

export const FLinkItems2=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 16px;
text-align: right;
max-width: 200px;
width: 100%;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 160px;
}
`;

export const FLinkItems3=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 16px;
text-align: right;
max-width: 200px;
width: 100%;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 160px;
}
`;

export const FLinkTitle=styled.h1`
font-size: 20px;
margin-bottom: 16px;
`;

export const FooterLink=styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 15px;
align-items: center;
&:hover{
    color: #13e62b;
    transition: 0.3s ease-in-out;
}
`;


export const CopyRWrapper=styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 820px)
{
    flex-direction: column;
}
`;


export const WebsiteRights=styled.p`
display: flex;
font-size: 14px;
max-width: 1100px;
justify-content: center;
align-items: center;
color: #13e62b;
margin-top: 30px;
margin-bottom: 5px;
`;

export const FLinkSocial=styled.div`
display: flex;
color: white;
text-align: right;
font-size: 25px;
margin-top: 25px;
justify-content: space-between;
margin-bottom: 5px;
`;

export const FIcons=styled(Link)`
color: #fff;
size: 40px;
margin-right: 8px;
margin-bottom: 15px;
&:hover{
    color: #13e62b;
    transition: 0.3s ease-in-out;
}

`;