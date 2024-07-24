import { Button, Flex, Space, Table, TableProps } from "antd";
import BaseLayout from "../../components/BaseLayout";
import Title from "antd/es/typography/Title";
import { UserAddOutlined } from "@ant-design/icons";
import ModalAddUser from "./ModalAddUser";
import { useMemo, useState } from "react";
import ModalEditUser from "./ModalEditUser";
import ModalResetPassword from "./ModalResetPassword";
import useUser from "../../hooks/useUser";

interface DataType {
  key: number;
  fullName: string;
  email: string;
  level: "ADMIN" | "SUPERVISOR" | "OPERATOR";
}

const UsersPage = () => {
  const { listUser, isLoading } = useUser();
  const [isOpenAddUser, setIsOpenAddUser] = useState(false);
  const [isOpenEditUser, setIsOpenEditUser] = useState(false);
  const [isOpenResetPassword, setIsOpenResetPassword] = useState(false);

  const columnsUsers: TableProps<DataType>["columns"] = [
    {
      title: "No",
      dataIndex: "key",
      key: "number",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button type="primary" onClick={() => setIsOpenEditUser(true)}>
            Edit
          </Button>
          <Button onClick={() => setIsOpenResetPassword(true)}>
            Reset Password
          </Button>
        </Space>
      ),
    },
  ];

  const normalizedData: DataType[] = useMemo(() => {
    return listUser.map((user) => {
      return {
        email: user.email,
        fullName: user.name,
        level: user.role,
        key: user.id,
      };
    });
  }, [listUser]);

  return (
    <BaseLayout breadCrumb={["Home", "Users"]}>
      <Flex vertical gap={10}>
        <Flex justify="space-between">
          <Title level={3}>User Data Management</Title>
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            onClick={() => setIsOpenAddUser(true)}
          >
            Add User
          </Button>
        </Flex>
        <Table
          columns={columnsUsers}
          dataSource={normalizedData}
          loading={isLoading}
        />
      </Flex>

      <ModalAddUser
        handleCancel={() => setIsOpenAddUser(false)}
        handleOk={() => setIsOpenAddUser(false)}
        loading={false}
        open={isOpenAddUser}
      />

      <ModalEditUser
        handleCancel={() => setIsOpenEditUser(false)}
        handleOk={() => setIsOpenEditUser(false)}
        loading={false}
        open={isOpenEditUser}
      />

      <ModalResetPassword
        handleCancel={() => setIsOpenResetPassword(false)}
        handleOk={() => setIsOpenResetPassword(false)}
        loading={false}
        open={isOpenResetPassword}
      />
    </BaseLayout>
  );
};

export default UsersPage;
