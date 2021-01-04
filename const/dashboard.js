import {
    HomeOutlined,
    GlobalOutlined,
    TeamOutlined,
    EditOutlined,
  } from "@ant-design/icons";
  
  export const paths = [
    {
      path: "/main",
      icon: <GlobalOutlined />,
      name: "Panoramica",
    },
    {
      path: "/vetrina",
      icon: <EditOutlined />,
      name: "Vetrina",
    },
    {
      path: "/items",
      icon: <HomeOutlined />,
      name: "Items",
    }
  ];
  