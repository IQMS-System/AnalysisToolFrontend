import { Flex, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import AssemblyForm from "./AssemblyTree";

const { Title } = Typography;

const CreateProductPage = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Products"]}>
      <Flex vertical gap={50}>
        <Flex justify="space-between">
          <Title level={3}>Create Product</Title>
        </Flex>

        <Flex wrap justify="center" gap={50}>
          <AssemblyForm />
        </Flex>
      </Flex>
    </BaseLayout>
  );
};

export default CreateProductPage;
