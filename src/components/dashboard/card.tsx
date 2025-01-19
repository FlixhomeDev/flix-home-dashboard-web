import { ClockIcon, EllipsisIcon, MapPinIcon } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function Card() {
  return (
    <div className="bg-zinc-100 border border-zinc-300/40 rounded-md p-3">
      <div className="w-full flex justify-between items-center">
        <span className="bg-zinc-400/20 p-2 rounded-lg text-xs">
          Agendado em: <span className="font-bold">Jan 13 2025</span>
        </span>
        <EllipsisIcon />
      </div>
      <h3 className="text-xl mt-2 font-bold text-zinc-800">Limpeza Geral</h3>
      <div className="flex justify-start items-center mt-2 w-[284px] gap-x-2">
        <div className=" rounded-lg flex justify-center items-center overflow-hidden">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              width={22}
              height={22}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <h4 className="text-sm font-medium">Santos Van-dúnem</h4>
          <span className="text-xs font-light text-zinc-400">Cliente</span>
        </div>
      </div>

      <div className="w-full flex items-center justify-between mt-6">
        <div className="flex items-center">
          <span className="bg-[#D2FDE6] p-2 px-4 rounded-lg font-semibold text-xs text-green-500 mr-2">
            Concluído
          </span>
          <span className="bg-zinc-400/20 p-2 rounded-lg text-xs flex items-center gap-x-1">
            <MapPinIcon size={14} />
            Lisboa - Rua 03 - casa 123
          </span>
        </div>
        <span className=" rounded-lg text-xs text-right flex items-center gap-x-1">
          <ClockIcon size={14} color="#979797" />
          <span className="text-[#979797] text-xs">09h:30min</span>
        </span>
      </div>
    </div>
  )
}
