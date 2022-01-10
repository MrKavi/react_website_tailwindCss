import React, { useState } from "react";
import { Button, Forgeth3, Form, Icon, Input, SignContainer, SignH1, SigninButton, SignUpWrapper } from './SignupStyle'
import { InputLabel1 } from "./SignupStyle";

const SignUp = () =>
{
  const [dados, setDados] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(dados);
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setDados(Object.assign(dados, { [name]: value }));
  };



    return (
        <SignContainer>
            <SignUpWrapper>
                
                <SignH1>
                    <Icon to='/'>Kv</Icon>
Register 
                </SignH1>
        <Form onSubmit={handleSubmit}>
            <InputLabel1>First Name</InputLabel1>
          <Input
            type="email"
            name="email"
            value={dados.email}
        
          />
          <InputLabel1>Last Name</InputLabel1>
          <Input
            type="password"
            name="password"
            value={dados.password}
    
          />
          <InputLabel1>E-mail</InputLabel1>
          <Input
            type="password"
            name="password"
            value={dados.password}
    
          />
          <InputLabel1>Phone Number</InputLabel1>
          <Input
            type="password"
            name="password"
            value={dados.password}
    
          />
          <Button>Sign Up</Button>
        </Form>   
         <SigninButton to='/signIn'>Sign In Here</SigninButton>
           </SignUpWrapper>
        </SignContainer>
    )
}

export default SignUp

