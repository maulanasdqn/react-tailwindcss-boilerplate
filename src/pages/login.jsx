import { Suspense } from 'react'
import { lazily } from 'react-lazily'
import { LoginModuleSkeleton } from "@/modules"

const { LoginModule } = lazily(() => import("@/modules"))

export const Login = () => {

  return (
   <Suspense fallback={<LoginModuleSkeleton/>}>
      <LoginModule/>
   </Suspense>
  )
}
