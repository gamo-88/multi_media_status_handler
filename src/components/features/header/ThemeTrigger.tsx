import { Button } from '@/components/ui/button'
import { Moon } from 'lucide-react'
import React from 'react'

export default function ThemeTrigger() {
  return (
    <div>
                <Button variant="outline" size="icon" className="rounded-full p-4 aspect-square "><Moon className='size-6' /></Button>

    </div>
  )
}
