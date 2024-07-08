import { Button, Flex, Select, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { Content } from "antd/es/layout/layout";

const { Title, Text } = Typography;
const { Option } = Select;

const ApprovalConfigPage = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Approval Configuration"]}>
      <Flex vertical gap={20}>
        <Flex justify="space-between">
          <Title level={3}>Approval Configuration</Title>
        </Flex>

        <Flex justify="space-between" vertical>
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

            <Button type="primary" className="mt-10">
              Submit
            </Button>
          </Content>
        </Flex>
      </Flex>
    </BaseLayout>
  );
};

export default ApprovalConfigPage;
