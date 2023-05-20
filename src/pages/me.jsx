import { Suspense } from "react"
import { lazily } from "react-lazily"
import { LoadingSpinner } from "@/components"
import { Authenticated } from "@/modules"

const { UserModule } = lazily(() => import("@/modules"))

const Loading = () => (
  <section className="flex items-center h-screen justify-center">
    <LoadingSpinner/>
  </section>
)

export const Me = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Authenticated>
        <UserModule/>
      </Authenticated>
    </Suspense>
  )
}
