import { Link } from 'react-router-dom'
import './CollectionCard.css'
export default function CollectionCard({ image, alt }) {
  return (
    <div className="collection-card">
      <img src={image} alt={alt} />
      <span className="off">30% OFF</span>
      <Link to="/products" className="buy-btn">Comprar</Link>
    </div>
  )
}
