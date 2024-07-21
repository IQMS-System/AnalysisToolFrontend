import { Button, Flex, Space, Table, TableProps, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { DataType, dataApproval } from "./tableConfig";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const ApprovalCenterPage = () => {
  const navigate = useNavigate();

  const columnApproval: TableProps<DataType>["columns"] = [
    {
      title: "No",
      dataIndex: "key",
      key: "number",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Unique ID",
      dataIndex: "uniqueId",
      key: "uniqueId",
    },
    {
      title: "Part Name",
      dataIndex: "partName",
      key: "partName",
    },
    {
      title: "Maker",
      dataIndex: "maker",
      key: "maker",
    },
    {
      title: "Approver",
      dataIndex: "approver",
      key: "approver",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Confirmed At",
      dataIndex: "confirmedAt",
      key: "confirmedAt",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => navigate("/approval-center/detail")}
          >
            Detail
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <BaseLayout breadCrumb={["Home", "Approval Center"]}>
      <Flex vertical gap={10}>
        <Flex justify="space-between">
          <Title level={3}>Approval Center</Title>
        </Flex>
        <Table columns={columnApproval} dataSource={dataApproval} />
      </Flex>
    </BaseLayout>
  );
};

export default ApprovalCenterPage;
