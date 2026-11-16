import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Layout from './Layout'
import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import FilterGroup from '../components/FilterGroup'
import { products } from '../data/products'

const opts = arr => arr.map(text => ({ text }))

export default function ProductListingPage() {
  const [params] = useSearchParams()
  const search = (params.get('filter') || '').toLowerCase()
  const [order, setOrder] = useState('')
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [genders, setGenders] = useState([])
  const [state, setState] = useState('')
  const [resetKey, setResetKey] = useState(0)

  const toggle = setter => e => {
    const { value, checked } = e.target
    setter(prev => (checked ? [...prev, value] : prev.filter(v => v !== value)))
  }
  const clear = () => { setBrands([]); setCategories([]); setGenders([]); setState(''); setOrder(''); setResetKey(k => k + 1) }

  const list = useMemo(() => {
    const price = p => p.priceDiscount ?? p.price
    let r = products.filter(p =>
      (p.name + ' ' + p.label).toLowerCase().includes(search) &&
      (!brands.length || brands.includes(p.brand)) &&
      (!categories.length || categories.includes(p.category)) &&
      (!genders.length || genders.includes(p.gender)) &&
      (!state || p.state === state))
    if (order === 'asc') r = [...r].sort((a, b) => price(a) - price(b))
    if (order === 'desc') r = [...r].sort((a, b) => price(b) - price(a))
    return r
  }, [search, brands, categories, genders, state, order])

  const title = `${list.length} ${list.length === 1 ? 'produto encontrado' : 'produtos encontrados'}`

  return (
    <Layout>
      <div className="listing">
        <aside className="listing-aside" key={resetKey}>
          <label style={{ fontSize: 16 }}>Ordenar por</label>
          <select value={order} onChange={e => setOrder(e.target.value)}
            className="listing-select">
            <option value="">Mais relevantes</option>
            <option value="asc">Menor preço</option>
            <option value="desc">Maior preço</option>
          </select>
          <div style={{ background: '#fff', borderRadius: 4, padding: 20, marginTop: 24 }}>
            <h3 style={{ fontSize: 16, paddingBottom: 12, borderBottom: '1px solid var(--light-gray-2)' }}>Filtrar por</h3>
            <FilterGroup title="Marca" inputType="checkbox" options={opts(['Adidas', 'Calenciaga', 'K-Swiss', 'Nike', 'Puma'])} onChange={toggle(setBrands)} />
            <FilterGroup title="Categoria" inputType="checkbox" options={opts(['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'])} onChange={toggle(setCategories)} />
            <FilterGroup title="Gênero" inputType="checkbox" options={opts(['Masculino', 'Feminino', 'Unisex'])} onChange={toggle(setGenders)} />
            <FilterGroup title="Estado" inputType="radio" options={opts(['Novo', 'Usado'])} onChange={e => setState(e.target.value)} />
            <button onClick={clear} style={{ marginTop: 8, background: 'transparent', border: 0, color: 'var(--primary)', fontSize: 14, textDecoration: 'underline' }}>Limpar filtros</button>
          </div>
        </aside>
        <div className="listing-main">
          <Section title={title} titleAlign="left">
            {list.length ? <ProductListing products={list} /> : <p>Nenhum produto encontrado com esses filtros.</p>}
          </Section>
        </div>
      </div>
    </Layout>
  )
}
