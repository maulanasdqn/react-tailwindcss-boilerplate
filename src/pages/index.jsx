import { Suspense } from 'react'
import { lazily } from 'react-lazily'
import { LoginModuleSkeleton } from "@/modules"

const { LoginModule } = lazily(() => import("@/modules"))

const Home = () => {

  return (
   <Suspense fallback={<LoginModuleSkeleton/>}>
      <LoginModule/>
   </Suspense>
  )
}

export default Home
