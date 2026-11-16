import ProductCard from './ProductCard'
export default function ProductListing({ products }) {
  return (
    <div className="product-grid">
      {products.map(p => <ProductCard key={p.id ?? p.name} {...p} />)}
    </div>
  )
}
