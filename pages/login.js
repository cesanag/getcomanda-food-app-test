import React, { useState } from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import cookie from "js-cookie";
import styled from "@emotion/styled";
import { Copy } from "assets/copy";

import { authLogin } from "services/auth";

import { Form, Input, Button, Checkbox, Typography, message, Divider } from 'antd';
const { Text, Title } = Typography;
import { HomeOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  flex-direction: column;
`;

const key = 'updatable';

export default function Login() {
  const [body, setBody] = useState({
    identifier: "admin",
    password: "adminadmin",
  });
  const router = useRouter();

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setBody({ ...body, [key]: value });
  };

  const handleSubmit = (e) => {
    message.loading({ content: 'Autenticazione...', key });
    setTimeout(() => {
      message.success({ content: 'Autenticato', key, duration: 2 });
    }, 1000);

    e.preventDefault();
    authLogin(body)
      .then((data) => {
        cookie.set("jwtToken", data.jwt);
        window.location.href = "/dashboard/main";
      })
      .catch(console.log);
  };

  return (
      <Container>
          <Title level={4}>{Copy.company}</Title>

          <Form
            style= {{
              maxWidth: "300px",
            }}
            name="normal_login"
            >
            <Form.Item
              rules={[{ required: true, message: 'Inserisci il tuo username' }]}>
              <Input 
              prefix={<UserOutlined className="site-form-item-icon" />}
              name="identifier"
              type="text"
              placeholder="Utente"
              value={body.identifier}
              onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Inserisci la tua Password' }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                name="password"
                type="password"
                placeholder="Password"
                value={body.password}
                onChange={handleChange}

              />
            </Form.Item>
            <Form.Item
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}>
              
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Ricordami</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Password dimenticata
              </a>
            </Form.Item>
            
            <Button
                type="primary" 
                htmlType="submit" 
                className="login-form-button"
                onClick={handleSubmit}>
                  Log in
              </Button>
              <Divider />

          </Form>
              
                <Text>
                  Non sei registrato?
                </Text>
                <Link href="/signin">
                  <a>
                    Registrati 
                  </a>
                </Link>
      </Container>
  );
}
