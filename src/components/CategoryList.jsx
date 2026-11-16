import { Link } from 'react-router-dom'
import './CategoryList.css'
const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinejoin: 'round', strokeLinecap: 'round' }
const categories = [
  { name: 'Camisetas', d: 'M8 3L3 6l2 4 3-1v11h8V9l3 1 2-4-5-3a4 4 0 0 1-8 0z' },
  { name: 'Calças', d: 'M7 3h10l1 18h-5l-1-10-1 10H6z' },
  { name: 'Bonés', d: 'M4 16a8 8 0 0 1 16 0M3 16h18l1 3H2z' },
  { name: 'Headphones', d: 'M4 15v-3a8 8 0 0 1 16 0v3M4 15h3v5H4zM17 15h3v5h-3z' },
  { name: 'Tênis', d: 'M3 17v-3l4-1 3 2 4-3 3 3c2 0 4 1 4 3v1H3z' },
]
export default function CategoryList() {
  return (
    <div className="category-list">
      {categories.map(c => (
        <Link key={c.name} to={`/products?filter=${encodeURIComponent(c.name)}`} className="category">
          <span className="circle"><svg width="40" height="40" viewBox="0 0 24 24" {...P}><path d={c.d} /></svg></span>
          <span className="cname">{c.name}</span>
        </Link>
      ))}
    </div>
  )
}
