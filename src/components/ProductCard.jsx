import { Link } from 'react-router-dom'
import './ProductCard.css'
const brl = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
export default function ProductCard({ id, image, name, label, price, priceDiscount }) {
  const off = priceDiscount ? Math.round((1 - priceDiscount / price) * 100) : 0
  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="thumb">
        {off > 0 && <span className="badge">{off}% OFF</span>}
        <img src={image} alt={name} width={292} height={321} />
      </div>
      {label && <span className="label">{label}</span>}
      <span className="name">{name}</span>
      <div className="prices">
        <span className={priceDiscount ? 'old' : 'current'}>{brl(price)}</span>
        {priceDiscount && <span className="current">{brl(priceDiscount)}</span>}
      </div>
    </Link>
  )
}
