import { FullLogo, SignInImage } from '@/assets/images'
import { VectorBottom, VectorTop } from '@/assets/svgs'
import SignInForm from '@/components/auth/Form'
import Image from 'next/image'

export default function SignIn() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-[1fr_607px] lg:overflow-hidden">
      <Image
        src={SignInImage}
        alt="Sign In Image"
        width={773}
        height={833}
        className="xl:max-h-screen h-full w-full object-cover aspect-square hidden lg:flex"
      />
      <div className="relative flex max-h-screen w-full justify-center items-start flex-col px-12">
        <Image
          src={FullLogo}
          alt="Full Logo"
          width={122}
          height={36}
          className="object-cover"
        />
        <h1 className="text-4xl font-bold text-slate-600 mt-8">
          Bem Vindo de volta!
        </h1>
        <p className="text-slate-500 mt-2 text-sm">
          Bem-vindo à Flix Home! Aqui você encontra serviços residenciais sob
          demanda, realizados por profissionais qualificados e com preços fixos.
          Simples, rápido e confiável!
        </p>

        <SignInForm />

        {/* VECTORES */}
        <Image
          src={VectorTop}
          alt="Vector top"
          className="absolute top-0 right-0"
        />
        <Image
          src={VectorBottom}
          alt="Vector bottom"
          className="absolute -bottom-4 left-0 lg:-left-80 w-[300px] sm:w-[370px]"
        />
      </div>
    </div>
  )
}
