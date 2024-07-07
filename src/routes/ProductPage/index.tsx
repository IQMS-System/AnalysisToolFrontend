import { Button, Flex, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ProductPage = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Products"]}>
      <Flex vertical gap={10}>
        <Flex justify="space-between">
          <Title level={3}>Product Management</Title>
          <Button type="primary" icon={<PlusOutlined />}>
            Create a Product Hierarchy Template
          </Button>
        </Flex>
      </Flex>
    </BaseLayout>
  );
};

export default ProductPage;
