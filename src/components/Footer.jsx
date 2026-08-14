export default function Footer() {
  return (
    <footer className="p-4 bg-background border-t text-center text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
    </footer>
  )
}