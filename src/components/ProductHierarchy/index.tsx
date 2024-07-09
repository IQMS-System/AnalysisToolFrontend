import { Button, Flex, Select, Typography } from "antd";
import { Content } from "antd/es/layout/layout";

const { Text } = Typography;
const { Option } = Select;

interface Props {
  onSubmit?: () => void;
}

const ProductHierarchy = ({ onSubmit }: Props) => {
  return (
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

        <Button type="primary" className="mt-10" onClick={onSubmit}>
          Submit
        </Button>
      </Content>
    </Flex>
  );
};

export default ProductHierarchy;
