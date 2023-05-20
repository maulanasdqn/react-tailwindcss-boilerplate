import { Button, TextField } from '@/components'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthLayout } from '@/layouts'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from './hooks'
import { useState } from 'react'

export const LoginModule = () => {

  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState("")

  const validationSchema = z.object({
    email: z.string()
    .min(1, { message: 'Email harus diisi' })
    .email({
      message: 'Email tidak valid',
    })
    .max(60, { message: "Email tidak boleh lebih dari 60 karakter" }),
    password: z.string()
    .min(1, { message: 'Kata Sandi harus tidak boleh kosong' })
    .min(8, { message: 'Kata Sandi minimal 8' }),
  });

  const { control, handleSubmit, watch, formState: { isValid, errors } } = useForm({
    mode: "all",
    resolver: zodResolver(validationSchema),
    defaultValues:{
      email: "",
      password: ""
    }
  })

  const { mutate, isLoading } = useLogin()

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/me", { replace: true })
      },
      onError: (error) => {
        setErrorMessage(error.response?.data?.message)
      }
    })
  })

  return (
    <AuthLayout
      onSubmit={onSubmit}
      title="Selamat datang kembali"
      subtitle="Silahkan masuk dengan akun yang sudah terdafatar"
      errorMessage={errorMessage}
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
        label="Kata Sandi"
        name="password"
        type="password"
        placeholder="********"
        size="md"
        status={watch("password") === "" && !errors.password ? "none" : errors.password ? "error" : "success"}
        message={watch("password") === "" && !errors.password ? "" : errors.password ? errors.password?.message : "Kata Sandi Valid"}
        required
      />
      <Button loading={`${isLoading}`} disabled={!isValid} type="submit" variant="primary" size="md">
        Masuk
      </Button>
      <span className="text-sm text-gray-600">
        Belum punya akun? Daftar {" "}
        <Link className="text-blue-500" to="/daftar">Disini</Link>
      </span>
    </AuthLayout>
  )
}
