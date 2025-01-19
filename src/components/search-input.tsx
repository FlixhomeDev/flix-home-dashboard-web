import { SearchIcon } from 'lucide-react'
import React from 'react'

export default function SearchInput() {
  return (
    <div className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm gap-x-3">
      <label htmlFor="searchIcon" className="cursor-pointer">
        <SearchIcon color="#ccc" />
      </label>
      <input
        id="searchIcon"
        type="search"
        placeholder="Pesquisar..."
        className="w-full h-full outline-0 bg-transparent"
      />
    </div>
  )
}
