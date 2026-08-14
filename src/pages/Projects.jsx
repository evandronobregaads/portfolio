import { SkillBadge } from "@/components/ui/SkillBadge"

export default function Projects() {
  // Lista de projetos fictícios - mude os dados quando quiser
  const meusProjetos = [
    {
      id: 1,
      titulo: "E-commerce Tech",
      descricao: "Uma loja virtual completa com carrinho de compras, filtragem de produtos e finalização de pedido integrada.",
      tecnologias: ["React", "Tailwind", "JavaScript"],
    },
    {
      id: 2,
      titulo: "Dashboard de Finanças",
      descricao: "Painel administrativo para controle financeiro pessoal, exibindo gráficos de receitas, despesas e saldo mensal.",
      tecnologias: ["React", "Tailwind"],
    }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <header className="border-b pb-4">
        <h2 className="text-3xl font-extrabold tracking-tight">Meus Projetos</h2>
        <p className="text-muted-foreground mt-1">Conheça alguns dos principais trabalhos que desenvolvi recentemente.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {meusProjetos.map((projeto) => (
          <div key={projeto.id} className="border bg-card text-card-foreground rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="font-bold text-xl tracking-tight">{projeto.titulo}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{projeto.descricao}</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tech) => (
                  <SkillBadge key={tech} variant="secondary">
                    {tech}
                  </SkillBadge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}