import { Flex, Table, TableProps, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";

const { Title } = Typography;

interface DataType {
  key: string;
  userId: string;
  priority: number;
  level: string;
  cellName: string;
}

const data: DataType[] = [
  {
    key: "1",
    userId: "user1",
    priority: 1,
    level: "Yes",
    cellName: "Cell A",
  },
  {
    key: "2",
    userId: "user2",
    priority: 2,
    level: "No",
    cellName: "Cell B",
  },
  {
    key: "3",
    userId: "user3",
    priority: 3,
    level: "Yes",
    cellName: "Cell C",
  },
  {
    key: "4",
    userId: "user4",
    priority: 4,
    level: "No",
    cellName: "Cell D",
  },
  {
    key: "5",
    userId: "user5",
    priority: 5,
    level: "Yes",
    cellName: "Cell E",
  },
];

const ApprovalEditPage = () => {
  const columnsApproval: TableProps<DataType>["columns"] = [
    {
      title: "Approval Number",
      dataIndex: "key",
      key: "number",
      width: "20%",
    },
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
    },
    {
      title: "Is Required",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Cell Name",
      dataIndex: "cellName",
      key: "cellName",
    },
  ];

  return (
    <BaseLayout breadCrumb={["Home", "Approval Configuration", "Edit"]}>
      <Flex vertical gap={20}>
        <Flex justify="space-between">
          <Title level={3}>Edit Approval</Title>
        </Flex>

        <Table columns={columnsApproval} dataSource={data} />
      </Flex>
    </BaseLayout>
  );
};

export default ApprovalEditPage;
