import { Guest, RegisterModuleSkeleton } from '@/modules'
import { Suspense } from 'react'
import { lazily } from 'react-lazily'

const { RegisterModule } = lazily(() => import("@/modules"))

export const Register = () => {
  return (
   <Suspense fallback={<RegisterModuleSkeleton/>}>
      <Guest>
        <RegisterModule/>
      </Guest>
   </Suspense>
  )
}
