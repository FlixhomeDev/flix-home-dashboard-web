'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { PlusIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  username: z.string().min(4, {
    message: 'Nome de usuário deve ter no minimo 4 caracteres',
  }),
  city: z.string({
    required_error: 'Selecione uma cidade!.',
  }),
  zipCode: z.number().min(6, {
    message: 'Código postal deve ter no minimo 6 caracteres',
  }),
  phone: z.number().min(9, {
    message: 'Telemovel deve ter no minimo 6 caracteres',
  }),
})
type FormSchema = z.infer<typeof formSchema>

export default function CreateClientModal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  const onSubmit = (data: FormSchema) => {
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600">
          Adicionar Usuário
          <PlusIcon color="#fff" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[723px] p-16 sm:rounded-[30px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-700 text-center">
            Adicionar um novo Cliente
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-600 max-w-[420px] mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </DialogDescription>

          <div className="mt-9 w-full ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-9 gap-4 w-full grid grid-cols-1 lg:grid-cols-2"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-400">
                        Nome de usuário
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Digite seu nome"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-400">Cidade</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma cidade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Luanda">Luanda</SelectItem>
                          <SelectItem value="Benguela">Benguela</SelectItem>
                          <SelectItem value="Lubango">Lubango</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-400">
                        Código postal
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Código postal"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-400">
                        Número de telefone
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="phone"
                          placeholder="Ex. +355 4529504530"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
              <div className="flex justify-center items-center gap-x-4 mx-auto max-w-16 mt-8">
                <Button
                  variant={'outline'}
                  type="submit"
                  className="w-full md:w-[243px] md:px-10"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 w-full md:w-[143px] md:px-10"
                >
                  Salvar
                </Button>
              </div>
            </Form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
