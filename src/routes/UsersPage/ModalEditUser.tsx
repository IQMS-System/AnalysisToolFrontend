import { Button, Form, Input, Modal, message } from "antd";
import { EditUserPayload, User } from "../../hooks/useUser/types";

interface Props {
  open: boolean;
  handleOk: (payload: EditUserPayload) => Promise<void>;
  handleCancel: () => void;
  loading: boolean;
  user?: User;
}

type FieldType = {
  name: string;
};

enum UserRoleLevel {
  ADMIN = 1,
  SUPERVISOR = 2,
  OPERATOR = 3,
}

const roleToLevelMap: Record<string, number> = {
  ADMIN: UserRoleLevel.ADMIN,
  SUPERVISOR: UserRoleLevel.SUPERVISOR,
  OPERATOR: UserRoleLevel.OPERATOR,
};

type UserRole = "ADMIN" | "SUPERVISOR" | "OPERATOR";

const ModalEditUser = ({
  handleCancel,
  handleOk,
  loading,
  open,
  user,
}: Props) => {
  const [form] = Form.useForm();

  const getRoleLevel = (role: UserRole): number => {
    return roleToLevelMap[role] || -1; // Return -1 or any other default value if the role is not found
  };

  const onFinish = async (values: FieldType) => {
    const { name } = values;

    if (user) {
      await handleOk({
        email: user.email,
        level: getRoleLevel(user?.role),
        name: name,
        user_id: user.id,
      });
    } else {
      message.error("User information is not available.");
    }
  };

  return (
    <Modal
      open={open}
      title="Edit User"
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
          Edit
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
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Harap lengkapi nama!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalEditUser;
