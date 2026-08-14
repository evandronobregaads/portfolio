import { cn } from '@/lib/utils'


// cn() mescla classes e resolve conflitos
// Sem cn(): 'text-red-500 text-blue-500' → conflito
// Com cn(): a última classe ganha corretamente

function SkillBadge({ className, variant, children }) {
  return (
    <span
      className={cn(
        // Classes base sempre aplicadas
        'inline-flex items-center rounded-full px-3 py-1 text-sm',
        // Classes condicionais por variante
        variant === 'default' && 'bg-primary text-primary-foreground',
        variant === 'secondary' && 'bg-secondary text-secondary-foreground',
        variant === 'outline' && 'border border-input',
        // Classes extras passadas pelo pai (sobrescrevem se conflitarem)
        className
      )}
    >
      {children}
    </span>
  )
}

// Uso:
<Badge variant='secondary' className='text-lg'>React</Badge>