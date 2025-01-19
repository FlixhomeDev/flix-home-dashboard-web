'use client'
import { Button } from '../ui/button'
import BellSvg from '@/assets/svgs/bell'
import { ChevronDown } from 'lucide-react'
import SearchInput from '../search-input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { usePathname } from 'next/navigation'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="flex justify-between items-center px-6 py-6 h-[89px] border-b border-[slate-400]">
      <div className="">
        <h1 className="text-2xl font-bold text-slate-800 tracking-wider">
          {capitalizeFirstLetter(pathname.replace('/', '')).replace('/', ' > ')}
        </h1>
        <p className="text-sm mt-1 text-slate-500 tracking-wider">
          Olá, Crivan. Seja bem-vindo!
        </p>
      </div>

      <div className="flex items-center gap-x-4">
        <SearchInput />

        <Button variant={'ghost'}>
          <BellSvg />
        </Button>

        <div className="flex justify-center items-center  max-w-[294px] w-full gap-x-2">
          <div className="w-[50px] h-[50px] rounded-lg bg-blue-100 flex justify-center items-center overflow-hidden">
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
            <h4 className="text-sm font-medium tracking-wider">Crisvan Van</h4>
            <span className="text-xs font-light text-zinc-400 tracking-wider">
              Super Admin
            </span>
          </div>
          <button type="button">
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}
