import './globals.css'

export const metadata = {
  title: 'SS Barbershop Makassar — The Art of the Cut',
  description: 'SS Barbershop Makassar — Pangkas rambut presisi berstandar premium. Classic cut, fade specialist, beard grooming, dan layanan eksklusif sejak 2015.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
