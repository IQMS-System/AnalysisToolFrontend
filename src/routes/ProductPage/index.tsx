import { Button, Card, Flex, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { PlusOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const dummyData = [
  "Product A",
  "Product B",
  "Product C",
  "Product D",
  "Product E",
  "Product F",
  "Product G",
  "Product H",
  "Product I",
];

const ProductPage = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Products"]}>
      <Flex vertical gap={50}>
        <Flex justify="space-between">
          <Title level={3}>Product Management</Title>
          <Button type="primary" icon={<PlusOutlined />}>
            Create a Product Hierarchy Template
          </Button>
        </Flex>

        <Flex wrap justify="center" gap={50}>
          {dummyData.map((card) => (
            <Card style={{ width: 300, textAlign: "center" }} key={card}>
              <Text strong>{card}</Text>
            </Card>
          ))}
        </Flex>
      </Flex>
    </BaseLayout>
  );
};

export default ProductPage;
