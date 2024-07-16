import { Button, Form, Input, Modal } from "antd";

interface Props {
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  loading: boolean;
}

type FieldType = {
  password?: string;
  previousPassword?: string;
  confirmPassword?: string;
};

const ModalResetPassword = ({
  handleCancel,
  handleOk,
  loading,
  open,
}: Props) => {
  return (
    <Modal
      open={open}
      title="Change Password User"
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
        >
          Reset
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
          label="Previous Password"
          name="previousPassword"
          rules={[
            { required: true, message: "Please input your previous password!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please input your confirmation password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalResetPassword;
