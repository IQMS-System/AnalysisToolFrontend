import { Button, Form, Input, Modal } from "antd";

interface Props {
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  loading: boolean;
}

type FieldType = {
  name?: string;
};

const ModalEditUser = ({ handleCancel, handleOk, loading, open }: Props) => {
  return (
    <Modal
      open={open}
      title="Edit User"
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
          Edit
        </Button>,
      ]}
    >
      <Form
        initialValues={{ remember: true }}
        onFinish={() => {}}
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
