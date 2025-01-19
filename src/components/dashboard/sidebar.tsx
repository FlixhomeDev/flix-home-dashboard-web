'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { FullLogo } from '@/assets/images'
import UsersSVG from '@/assets/svgs/sidebar/users'
import ServicesSVG from '@/assets/svgs/sidebar/services'
import DashboardSVG from '@/assets/svgs/sidebar/dashboard'
import { useRouter } from 'next/navigation'
import PieChart from '@/assets/svgs/sidebar/pie-chart'
import WalletSvg from '@/assets/svgs/sidebar/walletSvg'
import CommunicationSvg from '@/assets/svgs/sidebar/communication'
import LightSvg from '@/assets/svgs/sidebar/light'
import SupportSvg from '@/assets/svgs/sidebar/support'
import SettingsSvg from '@/assets/svgs/sidebar/settings'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Sidebar() {
  const router = useRouter()

  const [menuItem, setMenuItem] = useState<
    'dashboard' | 'services' | 'users' | 'financy' | 'wallet' | 'communication'
  >('dashboard')

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
            className={`w-full flex justify-start gap-x-3 font-medium ${menuItem === 'dashboard' && 'bg-blue-600 text-white'}`}
            variant={'ghost'}
            onClick={() => {
              setMenuItem('dashboard')
              router.push('/dashboard', { data: 'Dashboard' })
            }}
          >
            <DashboardSVG color={menuItem === 'dashboard' ? '#fff' : '#000'} />
            Dashboard
          </Button>
          <Button
            className={`w-full flex justify-start gap-x-3 font-medium ${menuItem === 'services' && 'bg-blue-600 text-white'}`}
            variant={'ghost'}
            onClick={() => {
              setMenuItem('services')
              router.push('/services')
            }}
          >
            <ServicesSVG color={menuItem === 'services' ? '#fff' : '#000'} />
            Serviços
          </Button>

          <Accordion
            type="single"
            collapsible
            className={`w-full flex justify-start gap-x-3 font-medium py-2 px-4 rounded-md  ${menuItem === 'users' && 'bg-blue-600 text-white'}`}
          >
            <AccordionItem value="item-1" className="w-full">
              <AccordionTrigger
                className="w-full"
                onClick={() => {
                  setMenuItem('users')
                  router.push('/users')
                }}
              >
                <div className="flex items-center gap-x-2 w-full">
                  <UsersSVG color={menuItem === 'users' ? '#fff' : '#000'} />
                  <span
                    className={`${menuItem === 'users' ? 'text-white' : 'text-black'}`}
                  >
                    Usuários
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="gap-y-2">
                <Button
                  className={`w-full flex mt-2 justify-start gap-x-3 font-medium  ${menuItem === 'users' && 'bg-blue-700 text-white'}`}
                  variant={'ghost'}
                  onClick={() => router.push('/users')}
                >
                  Clientes
                </Button>
                <Button
                  className={`w-full flex mt-2 justify-start gap-x-3 font-medium ${menuItem === 'users' && 'bg-blue-700 text-white'}`}
                  variant={'ghost'}
                  onClick={() => router.push('/users')}
                >
                  Prestadores
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
            onClick={() => router.push('/financy')}
          >
            <PieChart color="#000" />
            Finanças
          </Button>
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
            onClick={() => router.push('/wallet')}
          >
            <WalletSvg color="#000" />
            Agenda
          </Button>
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
            onClick={() => router.push('/communication')}
          >
            <CommunicationSvg color="#000" />
            Comunicação
          </Button>
        </nav>

        <div className="bottom-auto">
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
          >
            <LightSvg color="#000" />
            Mudar tema
          </Button>
          <div className="w-full mx-auto border" />
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
          >
            <SupportSvg color="#000" />
            Support
          </Button>
          <Button
            className="w-full flex justify-start gap-x-3 font-medium"
            variant={'ghost'}
          >
            <SettingsSvg color="#000" />
            Definições
          </Button>
        </div>
      </div>
    </div>
  )
}
