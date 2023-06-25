import TokenService from "@/services/token";
import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "./api";

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login-request"],
    mutationFn: async (payload) => await loginRequest(payload),
    onSuccess: (data) => {
      TokenService.saveToken(data?.token?.access_token);
      TokenService.saveRefreshToken(data?.token?.refresh_token);
      TokenService.saveUserData(data?.user);
    },
  });
};
