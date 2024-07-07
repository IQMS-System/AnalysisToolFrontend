import { Button, Flex, Table } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { columnsUsers, dataUsers } from "./tableConfig";
import Title from "antd/es/typography/Title";
import { UserAddOutlined } from "@ant-design/icons";

const UsersPage = () => {
  return (
    <BaseLayout>
      <Flex vertical gap={10}>
        <Flex justify="space-between">
          <Title level={3}>User Data Management</Title>
          <Button type="primary" icon={<UserAddOutlined />}>
            Add User
          </Button>
        </Flex>
        <Table columns={columnsUsers} dataSource={dataUsers} />;
      </Flex>
    </BaseLayout>
  );
};

export default UsersPage;
