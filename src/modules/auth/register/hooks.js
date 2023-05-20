import { useMutation } from "@tanstack/react-query"
import { registerRequest } from "./api"

export const useRegister = () => {
  return useMutation({
    mutationKey: ["register-request"],
    mutationFn: async (payload) => await registerRequest(payload)
  })
}
