import { Button, Flex, Table } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { columnsUsers, dataUsers } from "./tableConfig";
import Title from "antd/es/typography/Title";
import { UserAddOutlined } from "@ant-design/icons";
import ModalAddUser from "./ModalAddUser";
import { useState } from "react";

const UsersPage = () => {
  const [isOpenAddUser, setIsOpenAddUser] = useState(false);

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
        <Table columns={columnsUsers} dataSource={dataUsers} />;
      </Flex>

      <ModalAddUser
        handleCancel={() => setIsOpenAddUser(false)}
        handleOk={() => setIsOpenAddUser(false)}
        loading={false}
        open={isOpenAddUser}
      />
    </BaseLayout>
  );
};

export default UsersPage;
