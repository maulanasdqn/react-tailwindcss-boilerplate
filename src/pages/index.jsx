import { Button, TextField } from '@/components'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const Home = () => {

  const validationSchema = z.object({
    email: z.string().min(1, { message: 'Email harus diisi' }).email({
      message: 'Email harus valid',
    }),
    password: z.string().min(8, { message: 'Password minimal 8' }),
  });

  const { control, handleSubmit, formState: { isValid, errors } } = useForm({
    mode: "all",
    resolver: zodResolver(validationSchema),
    defaultValues:{
      email: "",
      password: ""
    }
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  })

  return (
    <section className="flex items-center justify-center h-screen w-full">
      <form onSubmit={onSubmit} className="flex flex-col justify-center gap-y-3 h-1/2 p-8 bg-white shadow-md rounded-lg w-1/2">
        <TextField
          control={control}
          label="Email"
          name="email"
          type="email"
          placeholder="test@corp.com"
          size="md"
          status={errors.email ? "error" : "none"}
          message={errors.email?.message}
          required
        />
        <TextField
          control={control}
          label="Password"
          name="password"
          type="password"
          placeholder="********"
          size="md"
          status={errors.password ? "error" : "none"}
          message={errors.password?.message}
          required
        />
          <Button disabled={!isValid} type="submit" variant="primary" size="md">
            Masuk
          </Button>
      </form>
    </section>    
  )
}

export default Home
