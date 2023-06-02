import TokenService from "@/services/token"
import { useLogout, useUser } from "./hooks"

export const UserModule = () => {
  const { data } = useUser()
  const { mutate } = useLogout()
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      <h1>Authenticated as {data?.data?.email}</h1>
      <span onClick={mutate} className="text-red-500 cursor-pointer my-4 font-medium">Logout</span>
    </section>
  )
}
