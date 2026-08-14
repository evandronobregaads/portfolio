export default function Contact() {
  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <header className="border-b pb-4 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">Contato</h2>
        <p className="text-muted-foreground mt-1">Tem alguma proposta ou dúvida? Fale comigo!</p>
      </header>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1">
          <label className="text-sm font-medium block">Nome</label>
          <input 
            type="text" 
            placeholder="Seu nome completo" 
            className="w-full border rounded-lg p-2.5 bg-background text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium block">E-mail</label>
          <input 
            type="email" 
            placeholder="seu.email@exemplo.com" 
            className="w-full border rounded-lg p-2.5 bg-background text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium block">Mensagem</label>
          <textarea 
            rows={4} 
            placeholder="Escreva sua mensagem aqui..." 
            className="w-full border rounded-lg p-2.5 bg-background text-sm focus:ring-2 focus:ring-primary focus:outline-none resize-none"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-primary text-primary-foreground font-medium text-sm p-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  )
}
