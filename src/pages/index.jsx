import { Button, TextField } from '@/components'
import { useForm } from "react-hook-form"

const Home = () => {
  const { control } = useForm({
    defaultVaulues:{
      email: "",
      password: ""
    }
  })
  return (
    <section className="flex items-center justify-center h-screen w-full">
      <form className="flex flex-col justify-center gap-y-3 h-1/2 p-8 bg-white shadow-md rounded-lg w-1/2">
        <TextField
          control={control}
          label="Email"
          name="email"
          type="email"
          placeholder="test@corp.com"
          size="md"
          status="success"
          message="Email Valid"
        />
        <TextField
          control={control}
          label="Password"
          name="password"
          type="password"
          placeholder="********"
          size="md"
          status="warning"
          message="Password harus lebih dari 8 karakter"
        />
          <Button type="button" variant="primary" size="md">
            Masuk
          </Button>
      </form>
    </section>    
  )
}

export default Home
