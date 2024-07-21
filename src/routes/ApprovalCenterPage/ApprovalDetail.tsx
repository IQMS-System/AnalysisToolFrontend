import { Divider, Flex, Table, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import {
  columnsChecksheet,
  columnsHistory,
  columnsRule,
  dataChecksheet,
  dataRule,
  dataTableHistory,
} from "./tableConfig";

const { Title } = Typography;

const ApprovalDetailPage = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Approval Center", "Approval Detail"]}>
      <Flex vertical>
        <Flex justify="space-between">
          <Title level={3}>Approval Detail</Title>
        </Flex>

        <Divider />

        <Flex vertical>
          <Title level={4}>Approval History</Title>
          <Table columns={columnsHistory} dataSource={dataTableHistory} />
        </Flex>

        <Flex vertical>
          <Title level={4}>Approval Rule</Title>
          <Table columns={columnsRule} dataSource={dataRule} />
        </Flex>

        <Flex vertical>
          <Title level={4}>Checksheet Entry Detail</Title>
          <Table columns={columnsChecksheet} dataSource={dataChecksheet} />
        </Flex>
      </Flex>
    </BaseLayout>
  );
};

export default ApprovalDetailPage;
