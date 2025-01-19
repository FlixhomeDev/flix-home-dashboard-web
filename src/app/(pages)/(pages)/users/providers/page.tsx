'use client'

import { Combobox } from '@/components/Combobox'
import SearchInput from '@/components/search-input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import TableInfoGeralProviders from '@/components/dashboard/table-info-geral-providers'
import CreateProviderModal from '@/components/dashboard/create-provider-modal'
import HistoryServicesProvider from '@/components/dashboard/history-services-provider'

export default function Providers() {
  const [toggle, setToggle] = useState<'info' | 'history'>('info')

  return (
    <div className="p-9">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-x-4">
          <SearchInput />
          <Combobox />
        </div>
        <CreateProviderModal />
      </div>

      <div className="mt-7">
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="border-b bg-transparent rounded-none p-0">
            <TabsTrigger
              value="info"
              onClick={() => setToggle('info')}
              className={`border-b bg-transparent rounded-none h-full ${toggle === 'info' && 'border-blue-600'}`}
            >
              Informações Gerais
            </TabsTrigger>
            <TabsTrigger
              value="history"
              onClick={() => setToggle('history')}
              className={`border-b bg-transparent rounded-none h-full ${toggle === 'history' && 'border-blue-600'}`}
            >
              Relatório de Atividades
            </TabsTrigger>
          </TabsList>
          <TabsContent value="info">
            <TableInfoGeralProviders />
          </TabsContent>
          <TabsContent value="history">
            <HistoryServicesProvider />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
