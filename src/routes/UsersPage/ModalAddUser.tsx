import { Button, Form, Input, Modal, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { CreateUserPayload } from "../../hooks/useUser/types";

interface Props {
  open: boolean;
  handleOk: (payload: CreateUserPayload) => Promise<void>;
  handleCancel: () => void;
  loading: boolean;
}

type FieldType = {
  name: string;
  level: number;
  username: string;
  password: string;
  email: string;
};

const ModalAddUser = ({ handleCancel, handleOk, open, loading }: Props) => {
  const [form] = Form.useForm();

  const onFinish = async (values: FieldType) => {
    const { level, name, password, username, email } = values;
    await handleOk({
      email: email,
      level: level,
      name: name,
      password: password,
      username: username,
    });
  };

  return (
    <Modal
      open={open}
      title="Add New User"
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={() => {
            form.submit();
          }}
          icon={<PlusOutlined />}
        >
          Add
        </Button>,
      ]}
    >
      <Form
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={() => {}}
        autoComplete="off"
        className="mt-5"
        labelCol={{ span: 8 }}
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Harap lengkapi nama!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Pilih Level Pengguna"
          name="level"
          rules={[{ required: true, message: "Harap memilih level pengguna!" }]}
        >
          <Select>
            <Select.Option value="3">Operator</Select.Option>
            <Select.Option value="2">Supervisor</Select.Option>
            <Select.Option value="1">Admin</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Harap lengkapi username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Harap lengkapi email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalAddUser;
