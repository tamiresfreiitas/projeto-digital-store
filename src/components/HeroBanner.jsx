import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HeroBanner.css'

const defaultSlides = [
  { tag: 'Melhores ofertas personalizadas', title: 'Queima de stoque Nike 🔥', image: '/produc-image-1.jpeg' },
  { tag: 'Lançamento da semana', title: 'Novidades Adidas para o seu treino', image: '/produc-image-2.jpeg' },
  { tag: 'Só neste mês', title: 'Puma com até 30% de desconto', image: '/produc-image-3.jpeg' },
  { tag: 'Estoque limitado', title: 'Street style com preço Drip', image: '/produc-image-4.jpeg' },
]
const text = 'Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure consectetur.'

export default function HeroBanner({ slides = defaultSlides }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [slides.length])
  return (
    <section className="hero">
      <div className="hero-view">
        <div className="hero-track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {slides.map((s, k) => (
            <div className="hero-slide container" key={k}>
              <div className="hero-text">
                <span className="hero-tag">{s.tag}</span>
                <h1>{s.title}</h1>
                <p>{text}</p>
                <Link to="/products" className="hero-btn">Ver Ofertas</Link>
              </div>
              <img src={s.image} alt={s.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="hero-dots">
        {slides.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} className={k === i ? 'on' : ''} onClick={() => setI(k)} />)}
      </div>
    </section>
  )
}
