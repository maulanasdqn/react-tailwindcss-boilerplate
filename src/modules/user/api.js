import { api } from "@/services"

export const getUserMeRequest = async () => {
  const { data } = await api.get("/user")
  return data
}
