import { useQuery } from "@tanstack/react-query"
import { getUserMeRequest } from "./api"

export const useUser = () => {
  return useQuery({
    queryKey: ["get-user-me"],
    queryFn: async () => await getUserMeRequest()
  })
}
