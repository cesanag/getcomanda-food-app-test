import React, { useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import styled from "@emotion/styled";
import { Copy } from "assets/copy";
import { Colors, Fonts } from "assets/variables";

import IconLogo from "assets/icon/icon-logo.svg";
import { authLogin } from "services/auth";
import Button from 'components/button'

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background-color: ${Colors.darkGrey};
`;
const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.img`
  fill: ${Colors.mainColor};
  margin: 5px;
`;
const LoginName = styled.div`
  color: ${Colors.grey};
  font-weight: ${Fonts.bold};
  margin-bottom: 15px;

`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  font-size: 14px;
  border: 2px solid ${Colors.lightGrey};
  padding: 10px;
  border-radius: 20px;
  margin: 5px;
`;

function Login() {
  const [body, setBody] = useState({
    identifier: "utente",
    password: "utente",
  });
  const router = useRouter();

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setBody({ ...body, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authLogin(body)
      .then((data) => {
        cookie.set("jwtToken", data.jwt);
        window.location.href = "/";
      })
      .catch(console.log);
  };

  return (
    <LoginContainer>
      <LoginContent>
        <Icon src={IconLogo} />
        <LoginName>{Copy.company}</LoginName>
        <LoginForm 
            onChange={handleChange} onSubmit={handleSubmit}>
          
            <Input
              name="identifier"
              type="text"
              className="login-username"
              placeholder="Utente"
              value={body.identifier}
            />
            <Input
              name="password"
              type="password"
              className="login-password"
              placeholder="Password"
              value={body.password}
            />

            <Button 
            type="submit"
            color={Colors.white}
            bgColor={Colors.mainColor}
            borderColor={Colors.mainColor}
            margin = "15px 0"
            >
              Login
            </Button>
          
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
}

export default Login;
