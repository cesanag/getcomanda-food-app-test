import React, { useState } from "react";
import Link from "next/link"
import styled from "@emotion/styled";

import { Form, Input, Button, Radio, Typography, Divider } from 'antd';
const { Text, Title } = Typography;
import { HomeOutlined,  } from '@ant-design/icons';
import { StandardLayout } from "layout";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  flex-direction: column;
`;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

export default function Login() {
 

  return (
    <StandardLayout>
        <Container>
            <HomeOutlined />
            <Title level={3} strong>Registrati</Title>

            <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
                
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="radio-group" label="Sei un:">
                    <Radio.Group>
                    <Radio value="a">Proprietario</Radio>
                    <Radio value="b">Utente</Radio>
                    </Radio.Group>
                </Form.Item>

                <Text type="secondary">Puoi completare il profilo in un secondo momento.</Text>
                <Divider />

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                    Registrati
                    </Button>
                </Form.Item>
                </Form>

                <Text>
                    Hai già un account?
                    </Text>
                    <Link href="/login">
                    <a>
                        Entra
                    </a>
                    </Link>
        </Container>
    </StandardLayout>
  );
}
