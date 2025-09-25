import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'

export default function NotificationButton() {
  return (
    <div className='relative w-fit'>
        <Button variant="outline" size="icon" className='rounded-full p-4  aspect-square'><Bell className='size-6'/></Button>
        <div className="absolute bg-red-500 size-2 rounded-full top-0 right-1"></div>
    </div>
  )
}
