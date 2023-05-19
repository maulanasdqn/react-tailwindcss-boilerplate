import { Button, TextField } from '@/components'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthLayout } from '@/layouts'
import { Link } from "react-router-dom"

export const RegisterModule = () => {

  
  const validationSchema = z
  .object({
    email: z.string().min(1, { message: 'Email harus diisi' }).email({
      message: 'Email harus valid',
    }),
    fullname: z.string().min(2, { message: 'Nama Lengkap harus diisi' }),
    password: z.string().min(8, { message: 'Password harus diisi' }),
    confirm_password: z
      .string()
      .min(1, { message: 'Konfirmasi kata sandi harus disisi' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Konfirmasi kata sandi tidak valid',
    path: ['confirm_password'],
  });


  const { control, handleSubmit, watch, formState: { isValid, errors } } = useForm({
    mode: "all",
    resolver: zodResolver(validationSchema),
    defaultValues:{
      email: "",
      password: "",
      fullname: "",
      confirm_password: ""
    }
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  })

  return (
    <AuthLayout
      onSubmit={onSubmit}
      title="Mari Bergabung bersama kami"
      subtitle="Silahkan masukan data diri anda untuk memulai bisnis bersama kami"
    >
      <TextField
        control={control}
        label="Email"
        name="email"
        type="email"
        placeholder="test@corp.com"
        size="md"
        status={watch("email") === "" && !errors.email ? "none" : errors.email ? "error" : "success"}
        message={watch("email") === "" && !errors.email ? "" : errors.email ? errors.email?.message : "Email Valid"}
        required
      />
      <TextField
        control={control}
        label="Nama Lengkap"
        name="fullname"
        type="text"
        placeholder="Maulana Sodiqin"
        size="md"
        status={watch("fullname") === "" && !errors.fullname ? "none" : errors.fullname ? "error" : "success"}
        message={watch("fullname") === "" && !errors.fullname ? "" : errors.fullname ? errors.fullname?.message : "Nama Lengkap Valid"}
        required
      />
      <TextField
        control={control}
        label="Kata Sandi"
        name="password"
        type="password"
        placeholder="********"
        size="md"
        status={watch("password") === "" && !errors.password ? "none" : errors.password ? "error" : "success"}
        message={watch("password") === "" && !errors.password ? "" : errors.password ? errors.password?.message : "Kata Sandi Valid"}
        required
      />
      <TextField
        control={control}
        label="Konfirmasi Kata Sandi"
        name="confirm_password"
        type="password"
        placeholder="********"
        size="md"
        status={watch("confirm_password") === "" && !errors.confirm_password ? "none" : errors.confirm_password ? "error" : "success"}
        message={watch("confirm_password") === "" && !errors.confirm_password ? "" : errors.confirm_password ? errors.confirm_password?.message : "Konfirmasi Kata Sandi Valid"}
        required
      />
      <Button disabled={!isValid} type="submit" variant="primary" size="md">
        Masuk
      </Button>
      <span className="text-sm text-gray-600">
        Sudah punya akun? Masuk {" "}
        <Link className="text-blue-500" to="/">Disini</Link>
      </span>
    </AuthLayout>
  )
}
