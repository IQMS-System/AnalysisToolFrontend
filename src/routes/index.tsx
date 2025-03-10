import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import PrivateRoutes from "../components/PrivateRoutes";
import UsersPage from "./UsersPage";
import ProfilePage from "./ProfilePage";
import ProductPage from "./ProductPage";
import ApprovalConfigPage from "./ApprovalConfigPage";
import ApprovalCenterPage from "./ApprovalCenterPage";
import UploadPage from "./UploadPage";
import OperationPage from "./OperationPage";
import QualityControlPage from "./QualityControlPage";
import ReportPage from "./ReportPage";
import NotificationPage from "./NotificationPage";
import ApprovalListPage from "./ApprovalConfigPage/ApprovalList";
import ApprovalEditPage from "./ApprovalConfigPage/ApprovalEdit";
import ProductDetailPage from "./ProductPage/ProductDetail";
import ApprovalDetailPage from "./ApprovalCenterPage/ApprovalDetail";
import CreateProductPage from "./ProductPage/CreateProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/detail" element={<ProductDetailPage />} />
        <Route path="/product/create" element={<CreateProductPage />} />
        <Route path="/approval-config" element={<ApprovalConfigPage />} />
        <Route path="/approval-config/read" element={<ApprovalListPage />} />
        <Route path="/approval-config/edit" element={<ApprovalEditPage />} />
        <Route path="/approval-center" element={<ApprovalCenterPage />} />
        <Route
          path="/approval-center/detail"
          element={<ApprovalDetailPage />}
        />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/operation" element={<OperationPage />} />
        <Route path="/quality-control" element={<QualityControlPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
