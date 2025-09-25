import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'


export default function LongInput() {
  return (
    <div className='relative '>
        <Input  type="search" placeholder="Recherche" className='pl-10 w-fit md:w-[400px]'/>
        <Search className='absolute top-1.5 left-2 text-gray-400'/>
    </div>
  )
}
