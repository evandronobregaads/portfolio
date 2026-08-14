export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <header className="border-b pb-4">
        <h2 className="text-3xl font-extrabold tracking-tight">Sobre Mim</h2>
        <p className="text-muted-foreground mt-1">Conheça um pouco mais sobre a minha jornada acadêmica e profissional.</p>
      </header>

      <section className="space-y-4 text-base leading-relaxed text-foreground/90">
        <p>
          Olá! Meu nome é <strong>Evandro</strong>. Sou apaixonado por tecnologia e desenvolvimento de software, focado em criar soluções web modernas, responsivas e otimizadas para uma excelente experiência do usuário.
        </p>
        
        <p>
          Atualmente, estou aprofundando meus conhecimentos no ecossistema JavaScript, utilizando tecnologias robustas como <strong>React</strong>, <strong>Vite</strong> e estilização ágil com <strong>Tailwind CSS</strong>.
        </p>
      </section>

      <section className="bg-muted/50 rounded-xl p-5 border space-y-3">
        <h3 className="font-semibold text-lg">🎯 Meus Objetivos</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Desenvolver aplicações escaláveis e limpas.</li>
          <li>Contribuir em projetos de código aberto.</li>
          <li>Aprender constantemente novas ferramentas do mercado.</li>
        </ul>
      </section>
    </div>
  )
}