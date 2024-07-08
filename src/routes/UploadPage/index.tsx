import { Button, Divider, Flex, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { useState } from "react";
import ChecksheetSection from "./ChecksheetSection";
import MeasurementSection from "./MeasurementSection";

const { Title } = Typography;

type ActivePage = "checksheet" | "measurement";

const UploadPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ActivePage>("checksheet");

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
          <ChecksheetSection />
        ) : (
          <MeasurementSection />
        )}
      </Flex>
    </BaseLayout>
  );
};

export default UploadPage;
