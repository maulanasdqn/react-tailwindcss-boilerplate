import { api } from "@/services"

export const registerRequest = async (payload) => {
  const { data } = await api.post("/register", payload)
  return data
}
