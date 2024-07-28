import React from "react";
import { Table, Input, Select, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

interface Specification {
  id: string;
  name: string;
  nominal_dimension: string;
  tolerance_upper_limit: string;
  tolerance_lower_limit: string;
  operation: string;
  machine: string;
  inspection_plan: string;
  measuring_equipment: string;
  product_description: string;
}

interface SpecificationTableProps {
  specifications: Specification[];
  onSpecChange: (index: number, field: string, value: string) => void;
  addSpecification: () => void; // New prop to add a specification
}

const machineOptions = [
  "CMM",
  "Laser Scanner",
  "Optical Comparator",
  "Coordinate Measuring Machine",
  "Gauge Blocks",
];

const SpecificationTable: React.FC<SpecificationTableProps> = ({
  specifications,
  onSpecChange,
  addSpecification,
}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (text: string, _: Specification, index: number) => (
        <Input
          value={text}
          onChange={(e) => onSpecChange(index, "name", e.target.value)}
        />
      ),
    },
    {
      title: "Nominal Dimension",
      dataIndex: "nominal_dimension",
      key: "nominal_dimension",
      width: 200,
      render: (text: string, _: Specification, index: number) => (
        <Input
          value={text}
          onChange={(e) =>
            onSpecChange(index, "nominal_dimension", e.target.value)
          }
        />
      ),
    },
    {
      title: "Tolerance Upper Limit",
      dataIndex: "tolerance_upper_limit",
      key: "tolerance_upper_limit",
      width: 200,
      render: (text: string, _: Specification, index: number) => (
        <Input
          value={text}
          onChange={(e) =>
            onSpecChange(index, "tolerance_upper_limit", e.target.value)
          }
        />
      ),
    },
    {
      title: "Tolerance Lower Limit",
      dataIndex: "tolerance_lower_limit",
      key: "tolerance_lower_limit",
      width: 200,
      render: (text: string, _: Specification, index: number) => (
        <Input
          value={text}
          onChange={(e) =>
            onSpecChange(index, "tolerance_lower_limit", e.target.value)
          }
        />
      ),
    },
    {
      title: "Operation",
      dataIndex: "operation",
      key: "operation",
      width: 200,
      render: (text: string, _: Specification, index: number) => (
        <Input
          value={text}
          onChange={(e) => onSpecChange(index, "operation", e.target.value)}
        />
      ),
    },
    {
      title: "Machine",
      dataIndex: "machine",
      key: "machine",
      width: 200,
      render: (text: string, _: Specification, index: number) => (
        <Select
          value={text}
          onChange={(value) => onSpecChange(index, "machine", value)}
          style={{ width: "100%" }}
        >
          {machineOptions.map((machine) => (
            <Option key={machine} value={machine}>
              {machine}
            </Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Inspection Plan",
      dataIndex: "inspection_plan",
      key: "inspection_plan",
      width: 200,
      render: (text: string, _: Specification, index: number) => (
        <Input
          value={text}
          onChange={(e) =>
            onSpecChange(index, "inspection_plan", e.target.value)
          }
        />
      ),
    },
    {
      title: "Measuring Equipment",
      dataIndex: "measuring_equipment",
      key: "measuring_equipment",
      width: 200,
      render: (text: string, _: Specification, index: number) => (
        <Input
          value={text}
          onChange={(e) =>
            onSpecChange(index, "measuring_equipment", e.target.value)
          }
        />
      ),
    },
    {
      title: "Product Description",
      dataIndex: "product_description",
      key: "product_description",
      width: 200,
      render: (text: string, _: Specification, index: number) => (
        <Input
          value={text}
          onChange={(e) =>
            onSpecChange(index, "product_description", e.target.value)
          }
        />
      ),
    },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <Table
        dataSource={specifications}
        columns={columns}
        rowKey="id"
        pagination={false}
        scroll={{ x: true }}
      />
      <Button
        onClick={addSpecification}
        type="default"
        className="mt-5 mb-14"
        icon={<PlusOutlined />}
      >
        Add Row
      </Button>
    </div>
  );
};

export default SpecificationTable;
