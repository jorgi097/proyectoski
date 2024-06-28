import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({
  idCategoria,
  redirectTo = "/",
  children,
}) => {
  if (idCategoria!= 1) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};