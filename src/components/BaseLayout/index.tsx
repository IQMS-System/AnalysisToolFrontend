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
import {
  Breadcrumb,
  Button,
  Flex,
  Layout,
  Menu,
  Typography,
  theme,
} from "antd";
import { useNavigate } from "react-router-dom";
import iqmsIcon from "../../assets/icon-iqms.png";

interface Props {
  children: React.ReactNode;
  breadCrumb: string[];
}

interface MenuItem {
  title: string;
  icon: string | FunctionComponent<object> | ComponentClass<object, unknown>;
  path: string;
}

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const menu: MenuItem[] = [
  {
    title: "Profile",
    icon: UserOutlined,
    path: "/",
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

const BaseLayout = ({ children, breadCrumb }: Props) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "8vh",
          backgroundColor: "#4C7BAB",
          justifyContent: "space-between",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Flex>
          <img src={iqmsIcon} alt="icon" width={100} />
        </Flex>
        <Flex gap={10}>
          <Text className="text-white text-xl font-semibold">Ari</Text>
          <Text className="text-white text-xl font-semibold">|</Text>
          <Button ghost>Logout</Button>
        </Flex>
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
            {breadCrumb.map((item) => (
              <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            ))}
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
