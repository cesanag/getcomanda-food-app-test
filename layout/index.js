import styled from "@emotion/styled";
import { Colors } from "assets/variables";
import Link from "next/link";

import { useState } from "react";

const { Content, Sider, Footer } = Layout;
import Header from "./header";
import { Layout, Menu, Affix, Typography } from "antd";
const { Text } = Typography;

import { paths } from "const/dashboard";
import useAuth from "authentication/useAuth";

import { useRouter } from "next/router";

export const StandardLayout = ({ children }) => {
  const [withSider, setSider] = useState(true);
  const toggleSider = () => setSider((s) => !s);
  const { data, isLogged } = useAuth();

  const Router = useRouter();

  return (
    <Layout
      hasSider="true"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",

      }}
    >
      {withSider && isLogged && (
        <Affix style={{
          minHeight: "100vh",
        }}>
          <Sider
            width="155"
            breakpoint="xs"
            style={{
              minHeight: "100vh",
            }}
          >
            <Menu
              selectedKeys={["/" + Router.query.tab]}
              style={{
                marginTop: "60px",
              }}
              theme="dark"
              mode="inline"
            >
              {paths.map((p) => (
                <Menu.Item key={p.path} icon={p.icon}>
                  <Link href={`/dashboard${p.path}`}>
                    <a>{p.name}</a>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
        </Affix>
      )}
      <Layout>
        <Header toggleSider={toggleSider} />
        <Content style={{backgroundColor: "white"}}>{children}</Content>
      </Layout>
    </Layout>
  );
};
