import styled from "@emotion/styled";
import Link from "next/link"

import { Button, Avatar, Typography, Space } from "antd";
const { Text, Title, Paragraph } = Typography;

import { FacebookOutlined, InstagramOutlined, TwitterOutlined, CheckCircleTwoTone } from '@ant-design/icons'

const ButtonContainer = styled.div`
    margin: 10px;
`
const PropertyContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`
const PropertyContent = styled.div`
    margin: 0 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export default function OwnerContainer({title, img, presentation}) {
    return (
        <Space style={{
          width: "100%",
          padding: "25px",          
        }}
        direction="vertical" align="center">
          <Avatar
            size={{ xs: 64, xl: 80, xxl: 100 }}
            src={img?.formats?.thumbnail?.url}
          />
          <Space direction="horizontal" align="baseline">
            <Title level={4}>{title}</Title>
            <CheckCircleTwoTone />
          </Space>
            
          <ButtonContainer>
           
                <Avatar style={{
                  color: "black",
                  backgroundColor:"white",
                  margin: "0 5px",
                  border: "1px solid lightGrey"
                }}
                shape="square" size={40} 
                icon={<FacebookOutlined />} />
             
                <Avatar style={{
                  color: "black",
                  backgroundColor:"white",
                  margin: "0 5px",
                  border: "1px solid lightGrey"
                  }}
                shape="square" size={40} 
                icon={<InstagramOutlined />} />
            
            <Avatar style={{
              color: "black",
              backgroundColor:"white",
              margin: "0 5px",
              border: "1px solid lightGrey"
            }}
            shape="square" size={40} 
            icon={<TwitterOutlined />} />
          </ButtonContainer>
          
          <Paragraph style={{
            maxWidth: "400px"
          }}
          type="secondary"
          ellipsis={{ rows: 2, expandable: true, symbol: 'altro' }}>
            {presentation}
          </Paragraph>
        </Space>
    );
}