import { Suspense } from "react"
import { lazily } from "react-lazily"
import { LoadingSpinner } from "@/components"

const { UserModule } = lazily(() => import("@/modules"))

export const Me = () => {
  return (
    <Suspense fallback={<LoadingSpinner/>}>
      <UserModule/>
    </Suspense>
  )
}
