import { useQuery } from "@tanstack/react-query"
import { getUserMeRequest } from "./api"
import TokenService from "@/services/token"
import { useNavigate } from "react-router-dom"

export const useUser = () => {
  return useQuery({
    queryKey: ["get-user-me"],
    queryFn: async () => await getUserMeRequest()
  })
}

export const useLogout = () => {
  const navigate = useNavigate()
  return {
    mutate: () => {
      TokenService.removeToken()
      TokenService.removeUserData()
      navigate(0)
    }
  }
}
