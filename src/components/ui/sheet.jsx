import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Menu className='h-5 w-5' />
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <nav className='flex flex-col gap-4 mt-8'>
          <Link to='/'>Início</Link>
          <Link to='/about'>Sobre</Link>
          <Link to='/projects'>Projetos</Link>
          <Link to='/contact'>Contato</Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}