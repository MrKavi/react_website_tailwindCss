import React, { useState } from "react";
import { Button, Forgeth3, Form, Icon, Input, Register, SignContainer, SignH1, SignWrapper } from './SigninStyle'

const SignIn = () =>
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
            <SignWrapper>
                
                <SignH1>
                    <Icon to='/'>Kv</Icon>
Sign in 
                </SignH1>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            value={dados.password}
            onChange={handleChange}
          />
          <Button>Log In</Button>
          <Register to='/signup'>Sing Up || Register</Register>
          <Forgeth3>Forget Password ?</Forgeth3>
        </Form>   
           </SignWrapper>
        </SignContainer>
    )
}

export default SignIn

