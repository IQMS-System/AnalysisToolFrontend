import { Button, Switch, Tag } from "antd";
import { ColumnsType } from "antd/es/table";

export interface DataType {
  key: string;
  uniqueId: string;
  partName: string;
  maker: string;
  approver: string;
  createdAt: string;
  confirmedAt: string;
  status: string;
}

export interface HistoryDataType {
  key: string;
  approver: string;
  approverRole: string;
  approvalPriority: number;
  status: string;
  approvalTime: string;
}

interface RuleDataType {
  key: string;
  approvalPriority: number;
  approver: string;
  approverRole: string;
  isRequired: boolean;
}

interface ChecksheetEntryType {
  key: string;
  checksheetEntryUniqueId: string;
  startTime: string;
  startedBy: string;
  submissionTime: string;
  submittedBy: string;
}

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

export const columnsHistory: ColumnsType<HistoryDataType> = [
  {
    title: "Approver",
    dataIndex: "approver",
    key: "approver",
  },
  {
    title: "Approver Role",
    dataIndex: "approverRole",
    key: "approverRole",
  },
  {
    title: "Approval Priority",
    dataIndex: "approvalPriority",
    key: "approvalPriority",
    sorter: (a: HistoryDataType, b: HistoryDataType) =>
      a.approvalPriority - b.approvalPriority,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      const color =
        status === "Approved" ? "green" : status === "Pending" ? "gold" : "red";
      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
  },
  {
    title: "Approval Time",
    dataIndex: "approvalTime",
    key: "approvalTime",
  },
  {
    title: "Action",
    key: "action",
    render: () => <Button type="link">View</Button>,
  },
];

export const columnsRule: ColumnsType<RuleDataType> = [
  {
    title: "Approval Priority",
    dataIndex: "approvalPriority",
    key: "approvalPriority",
    sorter: (a: RuleDataType, b: RuleDataType) =>
      a.approvalPriority - b.approvalPriority,
  },
  {
    title: "Approver",
    dataIndex: "approver",
    key: "approver",
  },
  {
    title: "Approver Role",
    dataIndex: "approverRole",
    key: "approverRole",
  },
  {
    title: "Is Required",
    dataIndex: "isRequired",
    key: "isRequired",
    render: (isRequired: boolean) => <Switch checked={isRequired} disabled />,
  },
];

export const dataRule: RuleDataType[] = [
  {
    key: "1",
    approvalPriority: 1,
    approver: "John Brown",
    approverRole: "Manager",
    isRequired: true,
  },
  {
    key: "2",
    approvalPriority: 2,
    approver: "Jim Green",
    approverRole: "Supervisor",
    isRequired: false,
  },
  {
    key: "3",
    approvalPriority: 3,
    approver: "Joe Black",
    approverRole: "Director",
    isRequired: true,
  },
];

export const dataTableHistory: HistoryDataType[] = [
  {
    key: "1",
    approver: "John Brown",
    approverRole: "Manager",
    approvalPriority: 1,
    status: "Approved",
    approvalTime: "2024-07-19 10:00:00",
  },
  {
    key: "2",
    approver: "Jim Green",
    approverRole: "Supervisor",
    approvalPriority: 2,
    status: "Pending",
    approvalTime: "2024-07-19 11:00:00",
  },
  {
    key: "3",
    approver: "Joe Black",
    approverRole: "Director",
    approvalPriority: 3,
    status: "Rejected",
    approvalTime: "2024-07-19 12:00:00",
  },
];

export const columnsChecksheet: ColumnsType<ChecksheetEntryType> = [
  {
    title: "Checksheet Entry Unique Id",
    dataIndex: "checksheetEntryUniqueId",
    key: "checksheetEntryUniqueId",
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime",
  },
  {
    title: "Started By",
    dataIndex: "startedBy",
    key: "startedBy",
  },
  {
    title: "Submission Time",
    dataIndex: "submissionTime",
    key: "submissionTime",
  },
  {
    title: "Submitted By",
    dataIndex: "submittedBy",
    key: "submittedBy",
  },
];

export const dataChecksheet: ChecksheetEntryType[] = [
  {
    key: "1",
    checksheetEntryUniqueId: "C123",
    startTime: "2024-07-19 08:00:00",
    startedBy: "Alice Smith",
    submissionTime: "2024-07-19 10:00:00",
    submittedBy: "Bob Johnson",
  },
  {
    key: "2",
    checksheetEntryUniqueId: "C124",
    startTime: "2024-07-19 09:00:00",
    startedBy: "Charlie Brown",
    submissionTime: "2024-07-19 11:00:00",
    submittedBy: "David Williams",
  },
  {
    key: "3",
    checksheetEntryUniqueId: "C125",
    startTime: "2024-07-19 10:00:00",
    startedBy: "Eve Davis",
    submissionTime: "2024-07-19 12:00:00",
    submittedBy: "Frank Miller",
  },
];
