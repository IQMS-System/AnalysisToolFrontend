import { Button, Flex, Modal, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import ProductHierarchy from "../../components/ProductHierarchy";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const ApprovalConfigPage = () => {
  const navigate = useNavigate();

  return (
    <BaseLayout breadCrumb={["Home", "Approval Configuration"]}>
      <Flex vertical gap={20}>
        <Flex justify="space-between">
          <Title level={3}>Approval Configuration</Title>
        </Flex>

        <ProductHierarchy
          onSubmit={() => {
            Modal.confirm({
              title: "Select Action",
              footer: () => (
                <>
                  <Button
                    onClick={() => {
                      Modal.destroyAll();
                      navigate("/approval-config/read");
                    }}
                  >
                    View
                  </Button>
                  <Button type="primary">Update</Button>
                </>
              ),
              maskClosable: true,
            });
          }}
        />
      </Flex>
    </BaseLayout>
  );
};

export default ApprovalConfigPage;
