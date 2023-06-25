import TokenService from "@/services/token";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getUserMeRequest, logoutRequest } from "./api";

export const useUser = () => {
  return useQuery({
    queryKey: ["get-user-me"],
    queryFn: async () => await getUserMeRequest(),
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["logout-request"],
    mutationFn: async (payload) => await logoutRequest(payload),
    onSuccess: () => {
      TokenService.removeToken();
      TokenService.removeRefreshToken();
      TokenService.removeUserData();
      navigate(0);
    },
  });
};
