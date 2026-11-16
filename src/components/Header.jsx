import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import cart from '../assets/mini-cart.svg'
import './Header.css'

const links = [['/', 'Home'], ['/products', 'Produtos'], ['/categories', 'Categorias'], ['/orders', 'Meus Pedidos']]

export default function Header() {
  const [text, setText] = useState('')
  const navigate = useNavigate()
  const search = () => navigate(`/products?filter=${encodeURIComponent(text)}`)
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <Link to="/"><Logo /></Link>
          <div className="search">
            <input value={text} placeholder="Pesquisar produto..." onChange={e => setText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && search()} />
            <button aria-label="Buscar" onClick={search}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
            </button>
          </div>
          <div className="auth">
            <Link to="/signup" className="signup">Cadastre-se</Link>
            <Link to="/login" className="login">Entrar</Link>
            <img src={cart} alt="Carrinho" />
          </div>
        </div>
        <nav>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
