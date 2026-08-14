import { SkillBadge } from '@/components/ui/SkillBadge'

// src/components/ProjectCard.jsx
// Desestruturamos as props diretamente nos parâmetros
export default function ProjectCard({ title, description, link, image, tags }) {
  return (
    <div className='project-card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Renderiza lista de tags dinamicamente */}
      <div className='tags'>
        {tags.map(tag => (
          <span key={tag} className='tag'>{tag}</span>
        ))}
      </div>


      <a href={link} target='_blank' rel='noopener noreferrer'>
        Ver projeto →
      </a>
    </div>
  )
}