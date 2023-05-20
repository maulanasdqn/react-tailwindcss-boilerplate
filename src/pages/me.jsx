import { Suspense } from "react"
import { lazily } from "react-lazily"
import { LoadingSpinner } from "@/components"
import { Authenticated } from "@/modules"

const { UserModule } = lazily(() => import("@/modules"))

export const Me = () => {
  return (
    <Suspense fallback={<LoadingSpinner/>}>
      <Authenticated>
        <UserModule/>
      </Authenticated>
    </Suspense>
  )
}
