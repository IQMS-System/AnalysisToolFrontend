import React, { ComponentClass, FunctionComponent } from "react";
import {
  UsergroupAddOutlined,
  UserOutlined,
  ProductOutlined,
  SettingOutlined,
  InboxOutlined,
  UploadOutlined,
  SignatureOutlined,
  ControlOutlined,
  FileDoneOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

interface MenuItem {
  title: string;
  icon: string | FunctionComponent<object> | ComponentClass<object, unknown>;
  path: string;
}

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const menu: MenuItem[] = [
  {
    title: "Profile",
    icon: UserOutlined,
    path: "/profile",
  },
  {
    title: "Users",
    icon: UsergroupAddOutlined,
    path: "/users",
  },
  {
    title: "Product",
    icon: ProductOutlined,
    path: "/product",
  },
  {
    title: "Approval Configuration",
    icon: SettingOutlined,
    path: "/approval-config",
  },
  {
    title: "Approval Center",
    icon: InboxOutlined,
    path: "/approval-center",
  },
  {
    title: "Upload",
    icon: UploadOutlined,
    path: "/upload",
  },
  {
    title: "Operation",
    icon: SignatureOutlined,
    path: "/operation",
  },
  {
    title: "Quality Control",
    icon: ControlOutlined,
    path: "/quality-control",
  },
  {
    title: "Report",
    icon: FileDoneOutlined,
    path: "/report",
  },
  {
    title: "Notification",
    icon: AlertOutlined,
    path: "/notifications",
  },
];

const listMenu = menu.map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon.icon),
    label: icon.title,
    path: icon.path,
  };
});

const BaseLayout = ({ children }: Props) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{ display: "flex", alignItems: "center", minHeight: "8vh" }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout style={{ minHeight: "92vh" }}>
        <Sider width={230} style={{ background: colorBgContainer }}>
          <Menu>
            {listMenu.map((menu) => {
              return (
                <Menu.Item
                  key={menu.key}
                  icon={menu.icon}
                  style={{
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => navigate(menu.path)}
                >
                  {menu.label}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
