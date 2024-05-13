import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Flex, Layout, Menu, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items = [
    getItem(
      <div onClick={() => navigate(`/admin/lien-he`)}>Liên hệ</div>,
      "9832",
      <DesktopOutlined />
    ),
    getItem(
      <div onClick={() => navigate(`/admin/hoc-vien`)}>Học viên</div>,
      "98",
      <DesktopOutlined />
    ),
    getItem(
      <div onClick={() => navigate(`/admin/bai-viet`)}>Bài viết</div>,
      "3",
      <DesktopOutlined />
    ),
    getItem(
      <div onClick={() => navigate(`/admin/khoa-hoc`)}>Khóa học</div>,
      "2",
      <DesktopOutlined />
    ),
    
    getItem("Chi tiết khóa học", "sub1", <DesktopOutlined />, [
      getItem(<Link to="/admin/khoa-hoc/1">Khoa hoc 1</Link>, "menu1"),
      getItem(<Link to="/admin/khoa-hoc/2">Khoa hoc 2</Link>, "menu2"),
      getItem(<Link to="/admin/khoa-hoc/3">Khoa hoc 3</Link>, "menu3"),
    ]),
  ];
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={"200px"}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Flex justify="end" className="m-3">
            <Button type="primary">Đổi mật khẩu</Button>
          </Flex>
        </Header>
        <Content
          style={{
            margin: "16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 500,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©{new Date().getFullYear()} Created by TM Software
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutAdmin;
