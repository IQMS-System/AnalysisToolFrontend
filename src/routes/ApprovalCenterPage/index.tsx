import { Flex, Table, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { columnApproval, dataApproval } from "./tableConfig";
import AssemblyForm from "../ProductPage/AssemblyTree";

const { Title } = Typography;

const ApprovalCenterPage = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Approval Center"]}>
      <Flex vertical gap={10}>
        <Flex justify="space-between">
          <Title level={3}>Approval Center</Title>
        </Flex>
        <Table columns={columnApproval} dataSource={dataApproval} />
        <Flex>
          <AssemblyForm />
        </Flex>
      </Flex>
    </BaseLayout>
  );
};

export default ApprovalCenterPage;
