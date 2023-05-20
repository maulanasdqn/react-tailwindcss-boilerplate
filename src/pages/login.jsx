import { Suspense } from 'react'
import { lazily } from 'react-lazily'
import { Guest, LoginModuleSkeleton } from "@/modules"

const { LoginModule } = lazily(() => import("@/modules"))

export const Login = () => {

  return (
   <Suspense fallback={<LoginModuleSkeleton/>}>
      <Guest>
        <LoginModule/>
      </Guest>
   </Suspense>
  )
}
