import { Flex, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";

const { Title } = Typography;

const ReportPage = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Report"]}>
      <Flex vertical gap={20}>
        <Flex justify="space-between">
          <Title level={3}>Checksheet Final Report</Title>
        </Flex>
      </Flex>
    </BaseLayout>
  );
};

export default ReportPage;
