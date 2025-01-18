'use client'
import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'

const formSchema = z.object({
  username: z.string().min(4, {
    message: 'Nome de usuário deve ter no minimo 4 caracteres',
  }),
  password: z.string().min(2, {
    message: 'Senha deve ter no minimo 6 caracteres',
  }),
})
type FormSchema = z.infer<typeof formSchema>

export default function SignInForm() {
  const { signIn } = useAuthStore()
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  const onSubmit = (data: FormSchema) => {
    const fakeToken = 'fake-jwt-token'
    const fakeName = 'John Doe'
    const fakeEmail = 'johndoe@example.com'

    // Salva o token e os dados do usuário
    signIn(fakeToken, fakeName, fakeEmail)

    // Redireciona para o Dashboard
    router.push('/dashboard')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full mt-8"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-400">Nome de usuário</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-400">Senha</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Digite sua senha de acesso"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-blue-600 w-full md:w-[116px] mt-4">
          Entrar
        </Button>
      </form>
    </Form>
  )
}
