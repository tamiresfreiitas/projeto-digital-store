import { useParams } from 'react-router-dom'
import Layout from './Layout'
import Gallery from '../components/Gallery'
import BuyBox from '../components/BuyBox'
import ProductOptions from '../components/ProductOptions'
import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import { products, productImages } from '../data/products'

export default function ProductViewPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id)) ?? products[0]
  return (
    <Layout>
      <div className="product-view">
        <Gallery images={productImages} showThumbs width="700px" height="570px" radius="4px" />
        <BuyBox name={product.name} reference={`3880${product.id}`} stars={4.5} rating={90}
          price={product.price} priceDiscount={product.priceDiscount}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
          <div><p style={{ fontSize: 14, color: 'var(--light-gray)', marginBottom: 8 }}>Tamanho</p>
            <ProductOptions options={['39', '40', '41', '42', '43']} shape="square" radius="4px" type="text" /></div>
          <div><p style={{ fontSize: 14, color: 'var(--light-gray)', marginBottom: 8 }}>Cor</p>
            <ProductOptions options={['#6FEEFF', '#FF6969', '#5DE380', '#D9D9D9']} shape="circle" type="color" /></div>
        </BuyBox>
      </div>
      <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
        <ProductListing products={products.slice(0, 4)} />
      </Section>
    </Layout>
  )
}
