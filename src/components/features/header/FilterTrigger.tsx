import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { SlidersHorizontal } from 'lucide-react'
import React from 'react'


type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function FilterTrigger() {

  const [recent, setRecent] = React.useState<Checked>(true)
  const [fromFriends, setFromFriends] = React.useState<Checked>(false)
  const [trend, setTrend] = React.useState<Checked>(false)

  return (
    <div>
        <DropdownMenu >
  <DropdownMenuTrigger ><Button variant="outline" className="flex gap-x-2 bg-accent px-3 py-2 rounded-xl cursor-pointer"><SlidersHorizontal/> <span>Filtrer</span></Button></DropdownMenuTrigger>
       <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Selon</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={recent}
          onCheckedChange={setRecent}
        >
          Recents
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={fromFriends}
          onCheckedChange={setFromFriends}
          disabled
        >
          Amis
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={trend}
          onCheckedChange={setTrend}
        >
          Trend
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}
