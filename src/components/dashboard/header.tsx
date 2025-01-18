import { Button } from '../ui/button'
import { Input } from '../ui/input'
import BellSvg from '@/assets/svgs/bell'
import { ChevronDown, User2 } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-6 h-[89px] border-b border-[slate-400]">
      <div className="">
        <h1 className="text-xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-sm text-slate-500">Olá, Crivan. Seja bem-vindo!</p>
      </div>

      <div className="flex items-center gap-x-4">
        <Input
          type="search"
          placeholder="Pesquisar..."
          className="max-w-[263px] w-full"
        />

        <Button variant={'ghost'}>
          <BellSvg />
        </Button>

        <div className="flex justify-center items-center  w-[284px] gap-x-2">
          <div className="w-[50px] h-[50px] rounded-lg bg-blue-400 flex justify-center items-center">
            <User2 color="#fff" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-bold">Crisvan Van</h4>
            <span className="text-xs font-light text-zinc-400">
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
