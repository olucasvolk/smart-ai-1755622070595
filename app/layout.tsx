import './globals.css'

export const metadata = {
  title: 'Projeto Twizo',
  description: 'Criado com Twizo AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="antialiased">{children}</body>
    </html>
  )
}