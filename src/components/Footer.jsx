import Logo from './Logo'
import FooterInformations from './FooterInformations'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo variant="footer" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="socials">
              <a href="https://facebook.com"><img src={facebook} alt="Facebook" /></a>
              <a href="https://instagram.com"><img src={instagram} alt="Instagram" /></a>
              <a href="https://twitter.com"><img src={twitter} alt="Twitter" /></a>
            </div>
          </div>
          <FooterInformations title="Informações" informations={[
            { text: 'Sobre Drip Store', link: '/about' }, { text: 'Segurança', link: '/security' },
            { text: 'Wishlist', link: '/wishlist' }, { text: 'Blog', link: '/blog' },
            { text: 'Trabalhe conosco', link: '/jobs' }, { text: 'Meus Pedidos', link: '/orders' }]} />
          <FooterInformations title="Categorias" informations={[
            { text: 'Camisetas', link: '/products' }, { text: 'Calças', link: '/products' },
            { text: 'Bonés', link: '/products' }, { text: 'Headphones', link: '/products' },
            { text: 'Tênis', link: '/products' }]} />
          <div className="footer-info">
            <h4>Contato</h4>
            <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
            <p>(85) 3051-3411</p>
          </div>
        </div>
        <hr />
        <p className="copy">© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  )
}
