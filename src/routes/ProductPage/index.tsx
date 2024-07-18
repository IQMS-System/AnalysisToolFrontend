import { Button, Card, Flex, Modal, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
            <Card
              style={{ width: 300, textAlign: "center" }}
              key={card}
              hoverable
              onClick={() => {
                Modal.confirm({
                  title: "Select Action",
                  footer: () => (
                    <>
                      <Button
                        onClick={() => {
                          Modal.destroyAll();
                          navigate("/product/detail");
                        }}
                      >
                        View
                      </Button>
                      <Button type="primary">Update</Button>
                    </>
                  ),
                  maskClosable: true,
                });
              }}
            >
              <Text strong>{card}</Text>
            </Card>
          ))}
        </Flex>
      </Flex>
    </BaseLayout>
  );
};

export default ProductPage;
