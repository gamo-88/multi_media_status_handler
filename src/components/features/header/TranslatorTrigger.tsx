import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'
import React from 'react'

export default function TranslatorTrigger() {
  return (
    <div>
                <Button variant="outline" size="icon" className="rounded-full p-4 aspect-square "><Languages className='size-6' /></Button>

    </div>
  )
}
