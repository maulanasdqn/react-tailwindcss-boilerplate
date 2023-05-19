import { RegisterModuleSkeleton } from '@/modules'
import { Suspense } from 'react'
import { lazily } from 'react-lazily'

const { RegisterModule } = lazily(() => import("@/modules"))

const Register = () => {

  return (
   <Suspense fallback={<RegisterModuleSkeleton/>}>
      <RegisterModule/>
   </Suspense>
  )
}

export default Register
