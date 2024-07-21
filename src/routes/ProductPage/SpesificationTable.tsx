import React from "react";
import { Table, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Specification {
  key: string;
  featureName: string;
  nominalDimension: string;
}

interface SpecificationTableProps {
  specifications: Specification[];
  onSpecChange: (index: number, field: string, value: string) => void;
  addSpecification: () => void; // New prop to add a specification
}

const SpecificationTable: React.FC<SpecificationTableProps> = ({
  specifications,
  onSpecChange,
  addSpecification,
}) => {
  const columns = [
    {
      title: "Feature Name",
      dataIndex: "featureName",
      key: "featureName",
      render: (text: string, _: Specification, index: number) => (
        <Input
          value={text}
          onChange={(e) => onSpecChange(index, "featureName", e.target.value)}
        />
      ),
    },
    {
      title: "Nominal Dimension",
      dataIndex: "nominalDimension",
      key: "nominalDimension",
      render: (text: string, _: Specification, index: number) => (
        <Input
          value={text}
          onChange={(e) =>
            onSpecChange(index, "nominalDimension", e.target.value)
          }
        />
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={specifications}
        columns={columns}
        rowKey="key"
        pagination={false}
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
