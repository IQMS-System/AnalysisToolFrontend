import {
  Button,
  Descriptions,
  DescriptionsProps,
  Flex,
  Typography,
} from "antd";
import BaseLayout from "../../components/BaseLayout";
import { useState } from "react";
import ModalResetPassword from "./ModalResetPassword";
import useAuth from "../../hooks/useAuth";

const { Title } = Typography;

const ProfilePage = () => {
  const [isOpenResetPassword, setIsOpenResetPassword] = useState(false);

  const { user } = useAuth();

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Name",
      children: user?.name,
    },
    {
      key: "2",
      label: "Email",
      children: user?.email,
    },
    {
      key: "3",
      label: "Level",
      children: user?.role,
    },
  ];

  return (
    <BaseLayout breadCrumb={["Home", "Profile"]}>
      <Flex vertical gap={10}>
        <Flex justify="space-between">
          <Title level={3}>User Profile</Title>
        </Flex>
        <Descriptions items={items} column={1} />
        <Flex gap={20}>
          <Button type="primary" onClick={() => setIsOpenResetPassword(true)}>
            Change Password
          </Button>
          <Button danger ghost>
            Logout
          </Button>
        </Flex>
      </Flex>

      <ModalResetPassword
        handleCancel={() => setIsOpenResetPassword(false)}
        handleOk={() => setIsOpenResetPassword(false)}
        loading={false}
        open={isOpenResetPassword}
      />
    </BaseLayout>
  );
};

export default ProfilePage;
