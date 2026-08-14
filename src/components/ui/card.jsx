import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SkillBadge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'


export default function ProjectCard({ title, description, tags, link, repo }) {
  return (
    <Card className='hover:shadow-lg transition-shadow'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className='flex flex-wrap gap-2'>
          {tags.map(tag => (
            <key={tag} variant='secondary'>{tag}</SkillBadge>
          ))}
        </div>
      </CardContent>

      <CardFooter className='gap-2'>
        <Button size='sm' asChild>
          <a href={link} target='_blank'>
            <ExternalLink className='mr-1 h-4 w-4' /> Demo
          </a>
        </Button>
        <Button size='sm' variant='outline' asChild>
          <a href={repo} target='_blank'>
            <Github className='mr-1 h-4 w-4' /> Código
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}