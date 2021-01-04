import { Avatar, Layout, Affix, Typography, Menu, Dropdown, message,  } from "antd";
const { Text } = Typography;
const { Header: AntdHeader } = Layout;
import { MenuOutlined, DownOutlined, UserOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import {Copy} from "assets/copy"
import styled from "@emotion/styled";
import Link from "next/link";

import logout from "authentication/logout";
import useAuth from "authentication/useAuth";


const Container = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-self: center;
`;
const Row = styled.div`
  display: flex;
  align-self: center;
`

const onClickDropdown = () => {
  message.warning(`Log out...`);
};

const menu = (
  <Menu 
    onClick={onClickDropdown}
    >
    <Menu.Item danger key="1" 
      onClick={logout} 
      icon={<LogoutOutlined />}>
        Log out
      </Menu.Item>
  </Menu>
);

export default function Header({toggleSider}) {
  
  const { data, isLogged } = useAuth();

  return (
    <Affix>
      <AntdHeader
       style={{
         padding: "0 20px",
       }}>
        <Container>
            <Row>
              {isLogged && (
                <MenuOutlined 
                style={{
                  margin: "0 15px",
                  display: "flex",
                  alignSelf: "center",
                  color: "white"}}
                  onClick={toggleSider} />
              )}
            
            <Link href="/">   
                <a>
                  <Text
                    style={{
                      color: "white",
                    }}>
                    {Copy.company}
                  </Text>
                </a>
              </Link>
            </Row>

              <Row>
              {!isLogged && (
                  <Link href="/login">
                    <a>
                      <Text
                       style={{
                         color: "white"
                       }}>
                        Log in
                      </Text>
                      <LoginOutlined 
                      style={{
                         color: "white",
                         margin: "10px"
                       }} />
                        
                    </a>
                </Link>
              )}

              {isLogged && (
                <>
                  <Dropdown
                  overlay={menu}>
                    <a style={{
                    color: "white"
                  }}
                    className="ant-dropdown-link"
                    trigger={['click']}
                    onClick={e => e.preventDefault()}>
                      <Avatar style={{
                        color: "black",
                        margin: "10px"
                      }}
                      icon={<UserOutlined />}
                        >
                      </Avatar>
                        {data.username}
                      <DownOutlined 
                          style={{
                            margin: "0 10px"
                      }}/>
                    </a>
                  </Dropdown>
                </>
              )}
              </Row>
          </Container>
      </AntdHeader>
    </Affix>
  );
}