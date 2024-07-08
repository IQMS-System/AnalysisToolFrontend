import { TableProps } from "antd";

interface DataType {
  key: string;
  uniqueId: string;
  product: string;
  startTime: string;
  startedBy: string;
  status: string;
  submissionTime: string;
  submittedBy: string;
  percentage: string;
}

export const columnOperation: TableProps<DataType>["columns"] = [
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
    title: "Product",
    dataIndex: "product",
    key: "product",
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
    title: "Status",
    dataIndex: "status",
    key: "status",
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
  {
    title: "Percentage",
    dataIndex: "percentage",
    key: "percentage",
  },
];

export const dataOperation: DataType[] = [
  {
    key: "1",
    uniqueId: "12345",
    product: "Product A",
    startTime: "2023-01-01 10:00",
    startedBy: "User 1",
    status: "In Progress",
    submissionTime: "2023-01-01 12:00",
    submittedBy: "User 2",
    percentage: "50%",
  },
  {
    key: "2",
    uniqueId: "67890",
    product: "Product B",
    startTime: "2023-01-02 11:00",
    startedBy: "User 3",
    status: "Completed",
    submissionTime: "2023-01-02 13:00",
    submittedBy: "User 4",
    percentage: "100%",
  },
  {
    key: "3",
    uniqueId: "11223",
    product: "Product C",
    startTime: "2023-01-03 09:30",
    startedBy: "User 5",
    status: "Pending",
    submissionTime: "2023-01-03 11:30",
    submittedBy: "User 6",
    percentage: "25%",
  },
];

export const dataApproval: DataType[] = [];
