import { Button, Form, Input, Modal } from "antd";

interface Props {
  open: boolean;
  handleOk: (
    oldPass: string,
    newPass: string,
    confirmPass: string
  ) => Promise<void>;
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
  const [form] = Form.useForm();

  const onFinish = async (values: FieldType) => {
    const { previousPassword, password, confirmPassword } = values;
    await handleOk(previousPassword!, password!, confirmPassword!);
  };

  return (
    <Modal
      open={open}
      title="Change Password User"
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
        autoComplete="off"
        className="mt-5"
        labelCol={{ span: 8 }}
        onFinish={onFinish}
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
