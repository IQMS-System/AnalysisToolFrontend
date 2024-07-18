import { Flex, Table, Typography } from "antd";
import BaseLayout from "../../components/BaseLayout";
import ProductHierarchy from "../../components/ProductHierarchy";
import { columnProductDetail, dataProductDetail } from "./tableConfig";

const { Title } = Typography;

const ProductDetailPage = () => {
  return (
    <BaseLayout breadCrumb={["Home", "Products"]}>
      <Flex vertical gap={50}>
        <Flex justify="space-between">
          <Title level={3}>Product Detail</Title>
        </Flex>

        <Flex wrap justify="center" gap={50}>
          <ProductHierarchy />
          <Table columns={columnProductDetail} dataSource={dataProductDetail} />
          ;
        </Flex>
      </Flex>
    </BaseLayout>
  );
};

export default ProductDetailPage;
