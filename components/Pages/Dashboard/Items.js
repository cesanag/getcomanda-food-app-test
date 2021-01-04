import React, { useState } from "react";
import Link from "next/link"

import Table from "components/table";
import { Space, Switch, Button, Divider, Modal, Form, Input, InputNumber, Upload } from "antd";

import { EditOutlined, DeleteTwoTone, UploadOutlined } from '@ant-design/icons';

import useAuth from "authentication/useAuth";
import useSWR from "swr";
import { getItemsByOwner } from "services/items";
import { paths } from "const/dashboard";

const columns = [
  {
    title: "Titolo",
    dataIndex: "title",
    key: "title",
    ellipsis: true,
    fixed: 'left',
    width: 100,
    render: (text) => 
      <Link href="/lounge-life">
        <a>{text}</a>
      </Link>,
    
  },
  {
    title: "Prezzo €",
    dataIndex: "price",
    key: "price",
    width: 100,
    responsive: ['lg'],
  },
  {
    title: "Azione",
    key: "action",
    fixed: 'right',
    width: 100,
    render: (text, record) => (
      <Space size="middle">
        
          <EditOutlined
          style={{
            color: "green"
          }}
          onClick={() => alert(JSON.stringify(record, null, 2))}/>

          <DeleteTwoTone twoToneColor="#eb2f96"/>
        
      </Space>
    ),
  },
];

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export function getStaticPaths() {
  return {
    paths: paths.map((e) => `/dashboard${e.path}`),
    fallback: false,
  };
}

export function getStaticProps(ctx) {
  let { params } = ctx;
  let { tab } = params;
  return {
    props: { tab },
  };
}

export default function Immobili() {

  const { data: userData } = useAuth();
  const { related_owner } = userData;

  const fetcher = () => getItemsByOwner(related_owner);

  const { data: items } = useSWR(
    `/items/${related_owner}`,
    fetcher,
    { refreshInterval: 10000, 
      revalidateOnMount: true }
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div
      style={{
        margin: "25px",
      }}
    >
      <div style={{
        width: "150px"
      }}>
        <Button type="primary" onClick={showModal}>
          Crea nuovo immobile
        </Button>
      </div>
      <Divider />

      {!!properties?.length && (
        <Table 
          columns={columns} 
          dataSource={properties} 
          scroll={{ x: 1500, y: 300  }} sticky/>
      )}

      <Modal 
        centered
        title="Crea nuovo immobile" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Annulla
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Crea
          </Button>,
        ]}
        >
          <Form
            {...layout}
            name="basic">

            <Form.Item
              label="Disponibile"
              name="available"
              rules={[{ required: true, message: '' }]}>
              <Switch defaultChecked/>
            </Form.Item>

            <Form.Item
              label="Nome"
              name="username"
              rules={[{ required: true, message: 'Inserisci nome' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Indirizzo"
              name="address"
              rules={[{ required: true, message: "Inserisci Indirizzo" }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Prezzo"
              name="price"
              rules={[{ required: true, message: "Inserisci Prezzo" }]}>
              <InputNumber />
            </Form.Item>

            <Form.Item
              label="Superficie"
              name="dimension"
              rules={[{ required: true, message: "Inserisci Superficie" }]}>
              <InputNumber />
            </Form.Item>

            <Form.Item
              label="Locali"
              name="rooms"
              rules={[{ required: true, message: "Inserisci Locali" }]}>
              <InputNumber />
            </Form.Item>

            <Form.Item
              label="Bagni"
              name="bathrooms"
              rules={[{ required: true, message: "Inserisci Bagni" }]}>
              <InputNumber />
            </Form.Item>

            <Form.Item
              label="Descrizione"
              name="descrizione"
              rules={[{ required: true, message: "Inserisci Descrizione" }]}>
              <Input.TextArea />
            </Form.Item>

            <Upload
                action=""
                listType="picture">
                <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            
          </Form>             
      </Modal>

    </div>
  );
}
