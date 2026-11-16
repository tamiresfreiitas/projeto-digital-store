import Layout from './Layout'
import HeroBanner from '../components/HeroBanner'
import CollectionCard from '../components/CollectionCard'
import CategoryList from '../components/CategoryList'
import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import { products } from '../data/products'

export default function HomePage() {
  return (
    <Layout hero={<HeroBanner />}>
      <Section title="Coleções em destaque" titleAlign="left">
        <div className="collections">
          {[1, 2, 3].map(n => <CollectionCard key={n} image={`/collection-${n}.png`} alt={`Coleção ${n}`} />)}
        </div>
      </Section>
      <Section title="Coleções em destaque" titleAlign="center"><CategoryList /></Section>
      <Section title="Produtos em alta" titleAlign="left" link={{ text: 'Ver todos →', href: '/products' }}>
        <ProductListing products={products} />
      </Section>
    </Layout>
  )
}
