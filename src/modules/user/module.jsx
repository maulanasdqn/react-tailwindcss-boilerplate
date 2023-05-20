import TokenService from "@/services/token"
import { useLogout } from "./hooks"

export const UserModule = () => {
  const userData = JSON.parse(TokenService.getUserData())
  const { mutate } = useLogout()
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      <h1>Authenticated as {userData.email}</h1>
      <span onClick={mutate} className="text-red-500 cursor-pointer my-4 font-medium">Logout</span>
    </section>
  )
}
