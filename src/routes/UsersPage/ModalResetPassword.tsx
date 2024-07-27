import { Button, Form, Input, Modal, message } from "antd";
import { ResetPasswordPayload, User } from "../../hooks/useUser/types";

interface Props {
  open: boolean;
  handleOk: (payload: ResetPasswordPayload) => Promise<void>;
  handleCancel: () => void;
  loading: boolean;
  user?: User;
}

type FieldType = {
  password?: string;
  confirmPassword?: string;
};

const ModalResetPassword = ({
  handleCancel,
  handleOk,
  loading,
  open,
  user,
}: Props) => {
  const [form] = Form.useForm();

  const onFinish = async (values: FieldType) => {
    const { confirmPassword, password } = values;

    if (user && confirmPassword && password) {
      await handleOk({
        confirm_password: confirmPassword,
        password: password,
        user_id: user.id,
      });
    } else {
      message.error("User information is not available.");
    }
  };

  return (
    <Modal
      open={open}
      title="Reset Password User"
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
        >
          Reset
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
