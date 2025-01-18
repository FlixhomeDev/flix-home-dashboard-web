'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { FullLogo } from '@/assets/images'
import UsersSVG from '@/assets/svgs/sidebar/users'
import ServicesSVG from '@/assets/svgs/sidebar/services'
import DashboardSVG from '@/assets/svgs/sidebar/dashboard'
import { useRouter } from 'next/navigation'

export default function Sidebar() {
  const router = useRouter()
  return (
    <div className="border-r border-[slate-400] flex flex-col">
      <div className="px-16 py-7 border-b border-[slate-400] h-[89px]">
        <Image
          src={FullLogo}
          alt="Full Logo"
          width={122}
          height={36}
          className="object-cover"
        />
      </div>

      <div className="px-4 py-6 mt-7 flex flex-col flex-1 justify-between">
        <nav className="flex flex-col">
          <Button
            className="w-full bg-blue-600 text-white flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
            onClick={() => router.push('/dashboard')}
          >
            <DashboardSVG color="#fff" />
            Dashboard
          </Button>
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
            onClick={() => router.push('/services')}
          >
            <ServicesSVG color="#000" />
            Serviços
          </Button>
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
            onClick={() => router.push('/users')}
          >
            <UsersSVG color="#000" />
            Usuários
          </Button>
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
            onClick={() => router.push('/financy')}
          >
            <ServicesSVG color="#000" />
            Finanças
          </Button>
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
            onClick={() => router.push('/wallet')}
          >
            <ServicesSVG color="#000" />
            Agenda
          </Button>
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
            onClick={() => router.push('/communication')}
          >
            <ServicesSVG color="#000" />
            Comunicação
          </Button>
        </nav>

        <div className="bottom-auto">
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
          >
            <ServicesSVG color="#000" />
            Mudar tema
          </Button>
          <div className="w-full mx-auto border" />
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
          >
            <ServicesSVG color="#000" />
            Support
          </Button>
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
          >
            <ServicesSVG color="#000" />
            Definições
          </Button>
        </div>
      </div>
    </div>
  )
}
