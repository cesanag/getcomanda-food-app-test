import React, { useState } from "react";
import Link from "next/link"
import { Copy } from "assets/copy"

import { Space, Form, Input, Upload, Button, Divider, Typography, Col, Row } from 'antd';
import { UploadOutlined} from '@ant-design/icons';

const { Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
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

const fileList = [
  {
    name: 'foto.jpg',
    status: 'done',
    url: 'https://res.cloudinary.com/dwfbqt0ja/image/upload/v1608832196/thumbnail_Lago_Appartamento_Store_Arnhem_1_10da737756.jpg',
  }
]

export default function Vetrina({title}) {

  return (
    <Space style={{
      margin: "25px",
    }}
      direction="vertical" 
      align="center">
      <Col>
        <Text type="secondary">Informazioni</Text>
        
        <Divider />

        <Form {...layout}
          size="small"
          name="nest-messages" 
          validateMessages={validateMessages}>

          <Form.Item label="Foto">
              <Form.Item name="upload" valuePropName="fileList" noStyle>
                <Upload
                    defaultFileList={[...fileList]}
                    action=""
                    listType="picture">
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </Form.Item>

            <Form.Item name={['user', 'name']} label="Nome" rules={[{ type: 'name' }]}>
              <Input  defaultValue="Briantea"/>
            </Form.Item>

            <Form.Item name={['user', 'email']} label="Indirizzo" rules={[{ type: 'email' }]}>
              <Input defaultValue="via degli Alberi, 55 MB Monzia"/>
            </Form.Item>

            <Form.Item name={['user', 'introduction']} label="Presentazione">
              <Input.TextArea defaultValue={Copy.sampleDescription}/>
            </Form.Item>

            <Form.Item name={['user', 'website']} label="Website">
              <Input defaultValue="www.briantea.it"/>
            </Form.Item>

            <Form.Item name={['user', 'facebook']} label="Facebook">
              <Input defaultValue="facebook.com/briantea"/>
            </Form.Item>

            <Form.Item name={['user', 'instagram']} label="Instagram">
              <Input defaultValue="instagram.com/briantea"/>
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Applica
              </Button>
            </Form.Item>

        </Form>
      </Col>

      <Col>
        <Text type="secondary">Dominio</Text>

        <Divider />

        <div style={{ marginBottom: 16 }}>
          <Input addonBefore="https://immodemo.com/" defaultValue="briantea" />
        </div>
        <Button ghost type="primary">I tuoi domini</Button>
      </Col>
      
      
    </Space>
  );
};

