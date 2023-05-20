import TokenService from "@/services/token";
import { useLocation, Navigate } from "react-router-dom";

export const Guest = ({ children }) => {
  const isAuthenticated = !!TokenService.getToken();
  const Location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/me" state={{ from: Location }} replace />;
  } else {
    return <>{children}</>;
  }
};
