import { Button, Divider, Flex, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import ProductHierarchy from "../../components/ProductHierarchy";

const { Title } = Typography;

const UploadPage = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Upload"]}>
      <Flex vertical>
        <Title level={3}>Upload Part</Title>

        <Flex className="mt-5 mb-2" gap={10}>
          <Button type="primary" className="bg-green-700">
            Checksheet
          </Button>
          <Button>Measurement Files</Button>
        </Flex>
        <Divider />

        <ProductHierarchy />
      </Flex>
    </BaseLayout>
  );
};

export default UploadPage;
