import { Button, Flex, Space, Table, TableProps, message } from "antd";
import BaseLayout from "../../components/BaseLayout";
import Title from "antd/es/typography/Title";
import { UserAddOutlined } from "@ant-design/icons";
import ModalAddUser from "./ModalAddUser";
import { useMemo, useState } from "react";
import ModalEditUser from "./ModalEditUser";
import ModalResetPassword from "./ModalResetPassword";
import useUser from "../../hooks/useUser";
import {
  CreateUserPayload,
  EditUserPayload,
  ResetPasswordPayload,
  User,
} from "../../hooks/useUser/types";
import { isAxiosError } from "axios";

type UserRole = "ADMIN" | "SUPERVISOR" | "OPERATOR";

interface DataType {
  key: number;
  fullName: string;
  email: string;
  level: UserRole;
}

const UsersPage = () => {
  const {
    listUser,
    isLoading,
    createUser,
    mutateUser,
    editUser,
    resetPasswordUser,
  } = useUser();
  const [selectedUser, setSelectedUser] = useState<User>();
  const [isOpenAddUser, setIsOpenAddUser] = useState(false);
  const [isOpenEditUser, setIsOpenEditUser] = useState(false);
  const [isOpenResetPassword, setIsOpenResetPassword] = useState(false);

  const handleErrorAPI = (err: unknown) => {
    if (isAxiosError(err)) {
      const errorMessages = err.response?.data?.error;
      if (errorMessages) {
        Object.keys(errorMessages).forEach((field) => {
          errorMessages[field].forEach((msg: string) => {
            message.error(`${field}: ${msg}`);
          });
        });
      } else {
        message.error(
          err.response?.data.message ||
            "An error occurred while creating the user."
        );
      }
    } else {
      message.error("An error occurred while creating the user.");
    }
  };

  const handleCreateUser = async (payload: CreateUserPayload) => {
    try {
      const response = await createUser(payload);

      if (response.status_code === 200) {
        message.open({
          type: "success",
          content: "Success Create User",
        });

        setIsOpenAddUser(false);
        mutateUser();
      }
    } catch (err) {
      handleErrorAPI(err);
    }
  };

  const handleEditUser = async (payload: EditUserPayload) => {
    try {
      const response = await editUser(payload);

      if (response.status_code === 200) {
        message.open({
          type: "success",
          content: "Success Edit User",
        });

        setIsOpenEditUser(false);
        mutateUser();
      }
    } catch (err) {
      handleErrorAPI(err);
    }
  };

  const handleResetPassword = async (payload: ResetPasswordPayload) => {
    try {
      const response = await resetPasswordUser(payload);

      if (response.status_code === 200) {
        message.open({
          type: "success",
          content: "Success Reset Password User",
        });

        setIsOpenResetPassword(false);
      }
    } catch (err) {
      handleErrorAPI(err);
    }
  };

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
      render: (record: DataType) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              setIsOpenEditUser(true);
              setSelectedUser({
                email: record.email,
                id: record.key,
                name: record.fullName,
                role: record.level,
              });
            }}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              setIsOpenResetPassword(true);
              setSelectedUser({
                email: record.email,
                id: record.key,
                name: record.fullName,
                role: record.level,
              });
            }}
          >
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
        handleOk={handleCreateUser}
        loading={false}
        open={isOpenAddUser}
      />

      <ModalEditUser
        handleCancel={() => setIsOpenEditUser(false)}
        handleOk={handleEditUser}
        loading={false}
        open={isOpenEditUser}
        user={selectedUser}
      />

      <ModalResetPassword
        handleCancel={() => setIsOpenResetPassword(false)}
        handleOk={handleResetPassword}
        loading={false}
        open={isOpenResetPassword}
        user={selectedUser}
      />
    </BaseLayout>
  );
};

export default UsersPage;
