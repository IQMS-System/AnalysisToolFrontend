import { Button, Space, TableProps } from "antd";

interface DataType {
  key: string;
  fullName: string;
  username: string;
  level: string;
}

export const columnsUsers: TableProps<DataType>["columns"] = [
  {
    title: "No",
    dataIndex: "key",
    key: "number",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Level",
    dataIndex: "level",
    key: "level",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button type="primary">Edit</Button>
        <Button>Reset Password</Button>
      </Space>
    ),
  },
];

export const dataUsers: DataType[] = [
  {
    key: "1",
    fullName: "John Brown",
    username: "johnbrown",
    level: "Admin",
  },
  {
    key: "2",
    fullName: "Jane Smith",
    username: "janesmith",
    level: "User",
  },
  {
    key: "3",
    fullName: "Alice Johnson",
    username: "alicejohnson",
    level: "Moderator",
  },
  {
    key: "4",
    fullName: "Bob Davis",
    username: "bobdavis",
    level: "User",
  },
  {
    key: "5",
    fullName: "Charlie White",
    username: "charliewhite",
    level: "Admin",
  },
  {
    key: "6",
    fullName: "Diana Green",
    username: "dianagreen",
    level: "User",
  },
  {
    key: "7",
    fullName: "Evan Black",
    username: "evanblack",
    level: "Moderator",
  },
  {
    key: "8",
    fullName: "Fiona Blue",
    username: "fionablue",
    level: "User",
  },
  {
    key: "9",
    fullName: "George Yellow",
    username: "georgeyellow",
    level: "Admin",
  },
  {
    key: "10",
    fullName: "Hannah Purple",
    username: "hannahpurple",
    level: "User",
  },
];
