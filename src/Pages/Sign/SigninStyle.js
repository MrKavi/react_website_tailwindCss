import styled  from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const SignContainer =styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
/* background: #13e62b; */
`;

export const SignWrapper =styled.div`
display: flex;
flex-direction: column;
background: black;
height: 500px;
box-shadow: 5px 1px 5px #13e62b;
width: 450px;
align-items: center;
justify-content: center;
`;

export const SignH1 =styled.h1`
font-weight: bold;
color: white;

`;

export const Icon =styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
margin-bottom: 20px;
cursor: pointer;
width: 90px;
color: black;
margin-top: -10px;
font-size: 45px;
height: 90px;
box-shadow: 1px 1px 11px 1px #13e62b;
border-radius: 50px;
background: white;
`;
export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: black;
  font-weight: 600;
  text-transform: uppercase;
  background: #13e62b;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: blue;
    color: white;
    animation:  0.2s ease-out forwards;
  }
`;

export const Register = styled(LinkR)`
  font-size: 19px;
  margin-top: 20px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  text-align: center;

  :hover{
      color: blue;
  }
`;

export const Forgeth3 = styled.h3`
  font-weight: normal;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  text-align: center;

  :hover{
      color: blue;
  }
`;


