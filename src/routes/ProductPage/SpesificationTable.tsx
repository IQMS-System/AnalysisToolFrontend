import React from "react";
import { Table, Input } from "antd";

interface Specification {
  key: string;
  featureName: string;
  nominalDimension: string;
}

interface SpecificationTableProps {
  specifications: Specification[];
  onSpecChange: (index: number, field: string, value: string) => void;
}

const SpecificationTable: React.FC<SpecificationTableProps> = ({
  specifications,
  onSpecChange,
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
    <Table
      dataSource={specifications}
      columns={columns}
      rowKey="key"
      pagination={false}
    />
  );
};

export default SpecificationTable;
