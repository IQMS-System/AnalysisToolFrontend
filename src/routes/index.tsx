import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import PrivateRoutes from "../components/PrivateRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
