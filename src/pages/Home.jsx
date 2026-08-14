import { SkillBadge } from "@/components/ui/SkillBadge"

export default function Home() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-3xl font-bold">Olá, bem-vindo!</h2>
      <p className="text-lg">Desenvolvedor Front-end</p>
      <div className="flex gap-2">
        <SkillBadge variant="default">React</SkillBadge>
        <SkillBadge variant="secondary">Tailwind</SkillBadge>
      </div>
    </div>
  )
}