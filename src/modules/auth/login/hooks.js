import { useMutation } from "@tanstack/react-query"
import { loginRequest } from "./api"
import TokenService from "@/services/token"

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login-request"],
    mutationFn: async (payload) => await loginRequest(payload),
    onSuccess: (data) => {
      TokenService.saveToken(data?.token?.value)
      TokenService.saveUserData(data?.user)
    } 
  })
}
