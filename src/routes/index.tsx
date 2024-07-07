import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
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

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/approval-config" element={<ApprovalConfigPage />} />
        <Route path="/approval-center" element={<ApprovalCenterPage />} />
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
