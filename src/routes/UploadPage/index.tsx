import { Button, Card, Divider, Flex, Input, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { useState } from "react";
import ChecksheetSection from "./ChecksheetSection";
import MeasurementSection from "./MeasurementSection";

const { Title } = Typography;

type ActivePage = "checksheet" | "measurement";

const UploadPage: React.FC = () => {
  const [isShowTemplateExist, setIsShowTemplateExit] = useState(false);
  const [activeSection, setActiveSection] = useState<ActivePage>("checksheet");

  const handleToggleShowTemplate = (status: boolean) => {
    setIsShowTemplateExit(status);
  };

  return (
    <BaseLayout breadCrumb={["Home", "Upload"]}>
      <Flex vertical>
        <Title level={3}>Upload Part</Title>

        <Flex className="mt-5 mb-2" gap={10}>
          <Button
            className={
              activeSection === "checksheet"
                ? "bg-green-700 text-white"
                : "white"
            }
            size="large"
            onClick={() => setActiveSection("checksheet")}
          >
            Checksheet
          </Button>
          <Button
            className={
              activeSection === "measurement"
                ? "bg-green-700 text-white"
                : "white"
            }
            size="large"
            onClick={() => setActiveSection("measurement")}
          >
            Measurement Files
          </Button>
        </Flex>
        <Divider />

        {activeSection === "checksheet" ? (
          <ChecksheetSection
            handleToggleShowTemplate={handleToggleShowTemplate}
          />
        ) : (
          <MeasurementSection />
        )}

        <Flex vertical>
          {isShowTemplateExist && (
            <>
              <Divider />
              <Card title="Template Already Exist">
                <Flex justify="center" align="center" gap={"20px"}>
                  <label className=" " htmlFor="username">
                    Checksheet:
                  </label>
                  <Input value="Test" disabled id="checksheet" />
                </Flex>

                <Flex className="mt-5">
                  <Button>Edit</Button>
                </Flex>
              </Card>
            </>
          )}
        </Flex>
      </Flex>
    </BaseLayout>
  );
};

export default UploadPage;
