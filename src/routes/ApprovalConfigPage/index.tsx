import { Flex, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import ProductHierarchy from "../../components/ProductHierarchy";

const { Title } = Typography;

const ApprovalConfigPage = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Approval Configuration"]}>
      <Flex vertical gap={20}>
        <Flex justify="space-between">
          <Title level={3}>Approval Configuration</Title>
        </Flex>

        <ProductHierarchy />
      </Flex>
    </BaseLayout>
  );
};

export default ApprovalConfigPage;
