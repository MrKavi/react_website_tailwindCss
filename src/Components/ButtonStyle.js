import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button =styled(Link)`
background: ${({primary}) =>(primary ? '#13e62b' : '#0016F5')};
border-radius: 50px;
white-space: nowrap;
border: none;
outline: none;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;
display: flex;
justify-content: center;
align-items: center;
padding: ${({big}) =>(big ? '14px 48px' : '12px 30px')};
color: ${({dark}) =>(dark ? '#000' : '#fff')};
font-size: ${({fontBig}) =>(fontBig ? '20px' : '16px')};

&:hover{
    transform: all 0.2s ease-in-out;
    background: ${({primary}) =>(primary ? '#0016F5' : '#13e62b')};
    color: ${({dark}) =>(dark ? '#fff' : '#000')};

}
`