'use client'

import { Combobox } from '@/components/Combobox'
import SearchInput from '@/components/search-input'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import TableInfoGeral from '@/components/dashboard/table-info-geral'
import HistoryServices from '@/components/dashboard/history-services'

export default function Dashboard() {
  const [toggle, setToggle] = useState<'info' | 'history'>('info')

  return (
    <div className="p-9">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-x-4">
          <SearchInput />
          <Combobox />
        </div>

        <Button className="bg-blue-600">
          Adicionar Usuário
          <PlusIcon color="#fff" />
        </Button>
      </div>

      <div className="mt-7">
        <Tabs defaultValue="account" className="w-full">
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
              Histórico de serviços
            </TabsTrigger>
          </TabsList>
          <TabsContent value="info">
            <TableInfoGeral />
          </TabsContent>
          <TabsContent value="history">
            <HistoryServices />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
