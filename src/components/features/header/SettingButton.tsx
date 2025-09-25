import { Button } from '@/components/ui/button'
import { Cog } from 'lucide-react'
import React from 'react'

export default function SettingButton() {
  return (
    <div>
        <Button variant="outline" size="icon" className="rounded-full p-4 aspect-square "><Cog className='size-6' /></Button>
    </div>
  )
}
