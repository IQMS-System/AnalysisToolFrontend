import { DatePicker, Divider, Flex, Select, Table, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import React from "react";
import { columnOperation, dataOperation } from "./tableConfig";

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

const OperationPage: React.FC = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Operations"]}>
      <Flex vertical gap={10}>
        <Flex justify="space-between">
          <Title level={3}>Checksheet Progress</Title>
        </Flex>
        <Flex className="mt-4" gap={30}>
          <Flex vertical gap={10} justify="center">
            <Text>Select Range</Text>
            <RangePicker />
          </Flex>

          <Flex vertical gap={10}>
            <Text>Percentage</Text>

            <Select
              defaultValue="Option 1"
              style={{ width: 120 }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Flex>
        </Flex>
        <Divider />
        <Table columns={columnOperation} dataSource={dataOperation} />;
      </Flex>
    </BaseLayout>
  );
};

export default OperationPage;
