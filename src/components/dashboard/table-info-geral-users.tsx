import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Edit2, Trash2 } from 'lucide-react'

export default function TableInfoGeral() {
  return (
    <Table>
      <TableCaption>Lista das suas recentes informações gerais</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-left text-zinc-400 uppercase">
            NOME
          </TableHead>
          <TableHead className="text-zinc-400 uppercase">SERVIÇOS</TableHead>
          <TableHead className="text-zinc-400 uppercase">DATA</TableHead>
          <TableHead className="text-right text-zinc-400 uppercase">
            STATUS
          </TableHead>
          <TableHead className="text-right text-zinc-400 uppercase">
            ACÇÕES
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium text-zinc-800">
            Crisvan Van-dúnem
          </TableCell>
          <TableCell className="text-zinc-800">Porto</TableCell>
          <TableCell className="text-zinc-400">10/01/2025</TableCell>
          <TableCell className="text-right">
            <span className="bg-[#D2FDE6] px-4 py-2 rounded-[20px] text-green-600">
              Ativo
            </span>
          </TableCell>
          <TableCell className="text-right">
            <button type="button" className="p-2">
              <Trash2 size={16} color="#615E83" />
            </button>
            <button type="button" className="p-2">
              <Edit2 size={16} color="#615E83" />
            </button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium text-zinc-800">
            Eduardo Afonso
          </TableCell>
          <TableCell className="text-zinc-800">Lisboa</TableCell>
          <TableCell className="text-zinc-400">10/01/2025</TableCell>
          <TableCell className="text-right">
            <span className="bg-[#FFF3F2] px-4 py-2 rounded-[20px] text-red-600">
              Inativo
            </span>
          </TableCell>
          <TableCell className="text-right">
            <button type="button" className="p-2">
              <Trash2 size={16} color="#615E83" />
            </button>
            <button type="button" className="p-2">
              <Edit2 size={16} color="#615E83" />
            </button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium text-zinc-800">
            Jecilia Teixeira
          </TableCell>
          <TableCell className="text-zinc-800">Lisboa</TableCell>
          <TableCell className="text-zinc-400">10/01/2025</TableCell>
          <TableCell className="text-right">
            <span className="bg-[#D2FDE6] px-4 py-2 rounded-[20px] text-green-600">
              Ativo
            </span>
          </TableCell>
          <TableCell className="text-right">
            <button type="button" className="p-2">
              <Trash2 size={16} color="#615E83" />
            </button>
            <button type="button" className="p-2">
              <Edit2 size={16} color="#615E83" />
            </button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium text-zinc-800">
            Sião Cabeia
          </TableCell>
          <TableCell className="text-zinc-800">Lisboa</TableCell>
          <TableCell className="text-zinc-400">10/01/2025</TableCell>
          <TableCell className="text-right">
            <span className="bg-[#FFF3F2] px-4 py-2 rounded-[20px] text-red-600">
              Inativo
            </span>
          </TableCell>
          <TableCell className="text-right">
            <button type="button" className="p-2">
              <Trash2 size={16} color="#615E83" />
            </button>
            <button type="button" className="p-2">
              <Edit2 size={16} color="#615E83" />
            </button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
