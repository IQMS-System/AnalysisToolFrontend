import {
  Button,
  Descriptions,
  DescriptionsProps,
  Flex,
  Typography,
  message,
} from "antd";
import BaseLayout from "../../components/BaseLayout";
import { useState } from "react";
import ModalResetPassword from "./ModalResetPassword";
import useAuth from "../../hooks/useAuth";

const { Title } = Typography;

const ProfilePage = () => {
  const { user, changePassword } = useAuth();

  const [isOpenResetPassword, setIsOpenResetPassword] = useState(false);

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Name",
      children: user?.name,
    },
    {
      key: "2",
      label: "Username",
      children: user?.email,
    },
    {
      key: "3",
      label: "Level",
      children: user?.role,
    },
  ];

  const handleSubmitResetPassword = async (
    oldPass: string,
    newPass: string,
    confirmPass: string
  ) => {
    try {
      const response = await changePassword({
        confirmation_password: confirmPass,
        new_password: newPass,
        old_password: oldPass,
      });

      if (response.status_code === 200) {
        message.open({
          type: "success",
          content: "Success Reset Password",
        });

        setIsOpenResetPassword(false);
      }
    } catch (err) {
      message.open({
        type: "error",
        content: "Please check password again",
      });
    }
  };

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
        handleOk={handleSubmitResetPassword}
        handleCancel={() => setIsOpenResetPassword(false)}
        loading={false}
        open={isOpenResetPassword}
      />
    </BaseLayout>
  );
};

export default ProfilePage;
