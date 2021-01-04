import Link from "next/link";

import { Divider, Typography, Button, Progress, Card, Col, Row} from "antd";
const { Title, Text } = Typography

export default function Main() {
  return (
    <div
      style={{
        margin: "25px",
      }}
      >
      <Title level={3}>Panoramica</Title>
      <Link href="/lounge-life">
          <a>
            <Button type="primary">
              Vedi la tua Agenzia
            </Button>
          </a>
        </Link>

      <Divider />
      
      <Row gutter={16}>

          <Col span={12}>
            <Card style={{
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                }} 
                title="Vetrina" bordered={false}>
              <Progress type="circle" percent={100} />
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{
                display:"flex",
                flexDirection: "column",
                alignItems: "center",    
                }}
                title="Immobili" bordered={false}>
              <Progress type="circle" percent={76} format={percent => `${percent}%`} />
            </Card>
          </Col>
      </Row>

    </div>
  )
}
