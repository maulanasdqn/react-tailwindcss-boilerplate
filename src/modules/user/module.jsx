import { useUser } from "./hooks"

export const UserModule = () => {
  const { data } = useUser()
  return (
    <section className="flex items-center justify-center w-full h-screen">
      <h1>Authenticated as {JSON.stringify(data)}</h1>
    </section>
  )
}
