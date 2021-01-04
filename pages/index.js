import React from 'react';
import Link from "next/link";
import styled from "@emotion/styled";
import { Button} from "antd";

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`

import { StandardLayout } from "layout";
import { Typography, Space, Layout, Divider  } from 'antd';
const { Text } = Typography;

export default function Index() {

  return (
    <StandardLayout>
      <Layout style={{ minHeight: "100vh" }}>
        <Space align="center" direction="vertical">
        <Divider />
          <Title>Drink App</Title>
          <Text type="default">Landing Page</Text>
          <Divider />
          <Text type="default">Nuovo utente</Text>

          <Link href="/signin">
            <a>
              <Button type="primary">
                Inizia ora
              </Button>
            </a>
          </Link>
          <Divider />
          <Text type="default">Test Owner</Text>
          <Link href="/lounge-life">
            <a>
              <Button ghost type="primary">
                Lounge Life
              </Button>
            </a>
          </Link>
          <Link href="/bar-bone">
            <a>
              <Button ghost type="primary">
                Bar Bone
              </Button>
            </a>
          </Link>
        </Space>
      </Layout>
    </StandardLayout>
  );
}
