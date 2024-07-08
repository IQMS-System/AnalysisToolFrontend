import { Button, Space, TableProps } from "antd";

interface DataType {
  key: string;
  uniqueId: string;
  partName: string;
  maker: string;
  approver: string;
  createdAt: string;
  confirmedAt: string;
  status: string;
}

export const columnApproval: TableProps<DataType>["columns"] = [
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
        <Button type="primary">Detail</Button>
      </Space>
    ),
  },
];

export const dataApproval: DataType[] = [
  {
    key: "1",
    uniqueId: "12345",
    partName: "Part A",
    maker: "Maker 1",
    approver: "Approver X",
    createdAt: "2023-01-01",
    confirmedAt: "2023-01-02",
    status: "Confirmed",
  },
  {
    key: "2",
    uniqueId: "67890",
    partName: "Part B",
    maker: "Maker 2",
    approver: "Approver Y",
    createdAt: "2023-01-03",
    confirmedAt: "2023-01-04",
    status: "Pending",
  },
  {
    key: "3",
    uniqueId: "11223",
    partName: "Part C",
    maker: "Maker 3",
    approver: "Approver Z",
    createdAt: "2023-01-05",
    confirmedAt: "2023-01-06",
    status: "Rejected",
  },
  {
    key: "4",
    uniqueId: "44556",
    partName: "Part D",
    maker: "Maker 4",
    approver: "Approver A",
    createdAt: "2023-01-07",
    confirmedAt: "2023-01-08",
    status: "Confirmed",
  },
  {
    key: "5",
    uniqueId: "77889",
    partName: "Part E",
    maker: "Maker 5",
    approver: "Approver B",
    createdAt: "2023-01-09",
    confirmedAt: "2023-01-10",
    status: "Pending",
  },
];
