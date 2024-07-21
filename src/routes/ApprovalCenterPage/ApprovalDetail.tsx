import { Flex, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";

const { Title } = Typography;

const ApprovalDetailPage = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Approval Center"]}>
      <Flex vertical gap={10}>
        <Flex justify="space-between">
          <Title level={3}>Approval Detail</Title>
        </Flex>
      </Flex>
    </BaseLayout>
  );
};

export default ApprovalDetailPage;
