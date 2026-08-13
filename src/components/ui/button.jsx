import { Button } from '@/components/ui/button'


export default function Hero() {
  return (
    <div>
      {/* Variantes disponíveis */}
      <Button>Padrão</Button>
      <Button variant='outline'>Contorno</Button>
      <Button variant='ghost'>Fantasma</Button>
      <Button variant='destructive'>Deletar</Button>
      <Button size='lg'>Grande</Button>
      <Button size='sm'>Pequeno</Button>


      {/* Combinando com ícones do lucide-react */}
      <Button>
        <Mail className='mr-2 h-4 w-4' />
        Me contacte
      </Button>
    </div>
  )
}