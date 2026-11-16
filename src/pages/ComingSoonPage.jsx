import { Link, useLocation } from 'react-router-dom'
import Layout from './Layout'

const titles = {
  '/categories': 'Categorias', '/orders': 'Meus Pedidos', '/login': 'Entrar', '/signup': 'Cadastre-se',
  '/about': 'Sobre Drip Store', '/security': 'Segurança', '/wishlist': 'Wishlist', '/blog': 'Blog', '/jobs': 'Trabalhe conosco',
}
export default function ComingSoonPage() {
  const { pathname } = useLocation()
  const title = titles[pathname] ?? 'Página'
  return (
    <Layout>
      <div style={{ textAlign: 'center', padding: '80px 0 40px' }}>
        <h1 style={{ fontSize: 40, color: 'var(--dark-gray)', marginBottom: 16 }}>{title}</h1>
        <p style={{ fontSize: 18, marginBottom: 32 }}>Esta página estará disponível em breve.</p>
        <Link to="/" style={{ display: 'inline-block', background: 'var(--primary)', color: '#fff', textDecoration: 'none', fontWeight: 700, padding: '14px 40px', borderRadius: 8 }}>Ver produtos</Link>
      </div>
    </Layout>
  )
}
