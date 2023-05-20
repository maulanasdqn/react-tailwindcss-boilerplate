import TokenService from "@/services/token";
import { useLocation, Navigate } from "react-router-dom";

export const Authenticated = ({ children }) => {
  const isAuthenticated = !!TokenService.getToken();
  const Location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: Location }} replace />;
  } else {
    return <>{children}</>;
  }
};
