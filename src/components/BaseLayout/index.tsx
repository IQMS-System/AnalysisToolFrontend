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

interface Props {
  children: React.ReactNode;
}

interface Menu {
  title: string;
  icon: string | FunctionComponent<object> | ComponentClass<object, unknown>;
}

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const menu: Menu[] = [
  {
    title: "Profile",
    icon: UserOutlined,
  },
  {
    title: "Users",
    icon: UsergroupAddOutlined,
  },
  {
    title: "Product",
    icon: ProductOutlined,
  },
  {
    title: "Approval Configuration",
    icon: SettingOutlined,
  },
  {
    title: "Approval Center",
    icon: InboxOutlined,
  },
  {
    title: "Upload",
    icon: UploadOutlined,
  },
  {
    title: "Operation",
    icon: SignatureOutlined,
  },
  {
    title: "Quality Control",
    icon: ControlOutlined,
  },
  {
    title: "Report",
    icon: FileDoneOutlined,
  },
  {
    title: "Notification",
    icon: AlertOutlined,
  },
];

const listMenu = menu.map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon.icon),
    label: icon.title,
  };
});

const BaseLayout = ({ children }: Props) => {
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
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={listMenu}
          />
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
