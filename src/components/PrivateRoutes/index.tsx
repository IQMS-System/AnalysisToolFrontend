import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  //   const { isAuthenticated } = useAuth();
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
