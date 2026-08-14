// src/data/projects.js
export const projects = [
  {
    title: 'App de Clima',
    description: 'Consome a API do OpenWeather em tempo real.',
    image: '/clima.png',
    link: 'https://github.com/...',
    tags: ['React', 'API', 'CSS']
  },
  {
    title: 'To-Do List',
    description: 'Gerenciador de tarefas com localStorage.',
    image: '/todo.png',
    link: 'https://github.com/...',
    tags: ['React', 'Hooks', 'Tailwind']
  },
]

// src/pages/Projects.jsx
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className='projects-page'>
      <h2>Meus Projetos</h2>
      <div className='grid'>
        {/* .map() percorre o array e retorna um componente por item */}
        {projects.map((project) => (
          <ProjectCard
            key={project.title}   /* key obrigatória em listas */
            {...project}           /* spread passa todas as props */
          />
        ))}
      </div>
    </section>
  )
}