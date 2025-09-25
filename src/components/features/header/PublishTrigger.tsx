import { Button } from '@/components/ui/button'
import { SquarePen } from 'lucide-react'
import React from 'react'

export default function PublishTrigger() {
  return (
    <div>
        <Button className='bg-purple-500 cursor-pointer rounded-xl hover:bg-purple-300 transition duration-300 ease-out text-md'><SquarePen/> Publier </Button>
    </div>
  )
}
