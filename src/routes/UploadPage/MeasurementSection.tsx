import { Button, Flex, Input, Select, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Option } = Select;

const MeasurementSection = () => {
  return (
    <Flex>
      <Flex justify="space-between">
        <Content style={{ padding: "20px" }}>
          <Flex gap={20}>
            <Flex vertical gap={10}>
              <Text className="pl-1">Level 1</Text>
              <Select
                defaultValue="option1"
                style={{ width: 200 }}
                onChange={() => {}}
                title="asdasd"
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Flex>
            <Flex vertical gap={10}>
              <Text className="pl-1">Level 2</Text>
              <Select
                defaultValue="option1"
                style={{ width: 200 }}
                onChange={() => {}}
                title="asdasd"
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Flex>
            <Flex vertical gap={10}>
              <Text className="pl-1">Level 3</Text>
              <Select
                defaultValue="option1"
                style={{ width: 200 }}
                onChange={() => {}}
                title="asdasd"
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Flex>
            <Flex vertical gap={10}>
              <Text className="pl-1">Level 4</Text>
              <Select
                defaultValue="option1"
                style={{ width: 200 }}
                onChange={() => {}}
                title="asdasd"
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Flex>
            <Flex vertical gap={10}>
              <Text className="pl-1">Level 5</Text>
              <Select
                defaultValue="option1"
                style={{ width: 200 }}
                onChange={() => {}}
                title="asdasd"
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Flex>
          </Flex>

          <Flex className="mt-5" gap={20} justify="flex-start">
            <Flex vertical gap={10}>
              <Text className="pl-1">Unique ID</Text>
              <Select
                defaultValue="option1"
                style={{ width: 200 }}
                onChange={() => {}}
                title="asdasd"
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Flex>

            <Flex vertical gap={10}>
              <Text>Checksheet Entry Started By</Text>
              <Input
                height={10}
                placeholder="Ari"
                prefix={<UserOutlined />}
                className="w-50 h-8"
                disabled
              />
            </Flex>
          </Flex>

          <Flex gap={10}>
            <Button type="primary" className="mt-10">
              Open
            </Button>

            <Button className="mt-10">
              Start Processing New Checksheet Entry
            </Button>
          </Flex>
        </Content>
      </Flex>
    </Flex>
  );
};

export default MeasurementSection;
