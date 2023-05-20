import TokenService from "@/services/token"

export const UserModule = () => {
  const userData = JSON.parse(TokenService.getUserData())
  return (
    <section className="flex items-center justify-center w-full h-screen">
      <h1>Authenticated as {userData.email}</h1>
    </section>
  )
}
