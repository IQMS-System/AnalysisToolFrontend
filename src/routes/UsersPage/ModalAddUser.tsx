import { Button, Form, Input, Modal, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Props {
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  loading: boolean;
}

type FieldType = {
  name?: string;
  level?: string;
  username?: string;
  password?: string;
};

const ModalAddUser = ({ handleCancel, handleOk, open, loading }: Props) => {
  return (
    <Modal
      open={open}
      title="Add New User"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
          icon={<PlusOutlined />}
        >
          Add
        </Button>,
      ]}
    >
      <Form
        initialValues={{ remember: true }}
        onFinish={() => {}}
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
            <Select.Option value="operator">Operator</Select.Option>
            <Select.Option value="supervisor">Supervisor</Select.Option>
            <Select.Option value="admin">Admin</Select.Option>
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
