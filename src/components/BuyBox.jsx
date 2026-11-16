import star from '../assets/star-icon.svg'
import './BuyBox.css'
const brl = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
export default function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children }) {
  return (
    <div className="buybox">
      <h1>{name}</h1>
      <span className="ref">Ref: {reference}</span>
      <div className="rate">
        <span className="stars">{stars}<img src={star} alt="" width={14} /></span>
        <span className="rating">({rating} avaliações)</span>
      </div>
      <div className="bb-prices">
        {priceDiscount ? <><span className="old">{brl(price)}</span><span className="now">{brl(priceDiscount)}</span></> : <span className="now">{brl(price)}</span>}
      </div>
      <div className="desc"><h5>Descrição do produto</h5><p>{description}</p></div>
      {children}
      <button className="buy">COMPRAR</button>
    </div>
  )
}
