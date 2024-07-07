import { Descriptions, DescriptionsProps, Flex, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";

const { Title } = Typography;

const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Name",
    children: "Budi Santoso",
  },
  {
    key: "2",
    label: "Username",
    children: "budi_santoso",
  },
  {
    key: "3",
    label: "Level",
    children: "Admin",
  },
];

const ProfilePage = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Profile"]}>
      <Flex vertical gap={10}>
        <Flex justify="space-between">
          <Title level={3}>User Profile</Title>
        </Flex>
        <Descriptions items={items} column={1} />
      </Flex>
    </BaseLayout>
  );
};

export default ProfilePage;
