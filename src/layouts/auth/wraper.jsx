import { Outlet } from "react-router-dom"

export const AuthWraper = () => {
  return (
    <section className="flex items-center bg-gradient-to-l from-slate-300 via-sky-500 to-blue-300 justify-center h-screen w-full px-6">
      <Outlet/>
    </section>
  )
}
