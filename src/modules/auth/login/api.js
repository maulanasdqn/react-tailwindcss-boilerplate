import { api } from "@/services"

export const loginRequest = async (payload) => {
  const { data } = await api.post("/login", payload)
  return data
}
