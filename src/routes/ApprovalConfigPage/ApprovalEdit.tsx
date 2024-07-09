import {
  Button,
  Flex,
  Form,
  FormInstance,
  Input,
  InputRef,
  Popconfirm,
  Table,
  Typography,
} from "antd";
import BaseLayout from "../../components/BaseLayout";
import React, { useContext, useEffect, useRef, useState } from "react";

const { Title } = Typography;

interface Item {
  key: string;
  userId: string;
  priority: number;
  isRequired: boolean;
  cellName: string;
}

interface EditableRowProps {
  index: number;
}

const EditableContext = React.createContext<FormInstance<unknown> | null>(null);

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} key={index} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = (await form.validateFields()) as object;

      toggleEdit();

      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

interface DataType {
  key: React.Key;
  userId: string;
  priority: number;
  isRequired: boolean;
  cellName: string;
}

const generateData = (count: number): DataType[] => {
  const data: DataType[] = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      key: i,
      userId: `user${i}`,
      priority: Math.floor(Math.random() * 5) + 1,
      isRequired: Math.random() < 0.5,
      cellName: `Cell ${i}`,
    });
  }
  return data;
};

const ApprovalEditPage = () => {
  const [dataSource, setDataSource] = useState<DataType[]>(generateData(3));

  const [count, setCount] = useState(4);

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns = [
    {
      title: "Approver",
      dataIndex: "key",
      width: "10%",
    },
    {
      title: "User ID",
      dataIndex: "userId",
      width: "15%",
      editable: true,
    },
    {
      title: "Priority",
      dataIndex: "priority",
      width: "15%",
      editable: true,
    },
    {
      title: "Required",
      dataIndex: "isRequired",
      width: "20%",
      render: (isRequired: boolean) => (isRequired ? "Yes" : "No"),
    },
    {
      title: "Cell Name",
      dataIndex: "cellName",
      width: "20%",
      editable: true,
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_: unknown, record: DataType) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleAdd = () => {
    const newData: DataType = {
      key: count,
      userId: `user${count}`,
      priority: Math.floor(Math.random() * 5) + 1,
      isRequired: Math.random() < 0.5,
      cellName: `Cell ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <BaseLayout breadCrumb={["Home", "Approval Configuration", "Edit"]}>
      <Flex vertical gap={20}>
        <Flex justify="space-between">
          <Title level={3}>Edit Approval</Title>

          <Button
            onClick={handleAdd}
            type="primary"
            style={{ marginBottom: 16 }}
          >
            Add a row
          </Button>
        </Flex>

        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns as ColumnTypes}
        />
      </Flex>
    </BaseLayout>
  );
};

export default ApprovalEditPage;
