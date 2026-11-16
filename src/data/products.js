const base = [
  { name: 'K-Swiss V8 - Masculino', label: 'Tênis', brand: 'K-Swiss', category: 'Casual', gender: 'Masculino', state: 'Novo' },
  { name: 'Nike Air Max', label: 'Tênis', brand: 'Nike', category: 'Corrida', gender: 'Unisex', state: 'Novo' },
  { name: 'Adidas Ultraboost', label: 'Tênis', brand: 'Adidas', category: 'Corrida', gender: 'Feminino', state: 'Usado' },
  { name: 'Puma RS-X', label: 'Tênis', brand: 'Puma', category: 'Esporte e lazer', gender: 'Masculino', state: 'Novo' },
  { name: 'Camiseta Drip', label: 'Camisetas', brand: 'Calenciaga', category: 'Casual', gender: 'Unisex', state: 'Novo' },
  { name: 'Boné Street', label: 'Bonés', brand: 'Nike', category: 'Utilitário', gender: 'Unisex', state: 'Usado' },
  { name: 'Calça Jogger', label: 'Calças', brand: 'Adidas', category: 'Utilitário', gender: 'Masculino', state: 'Novo' },
  { name: 'Fone Beats', label: 'Headphones', brand: 'Puma', category: 'Esporte e lazer', gender: 'Feminino', state: 'Usado' },
]
export const products = base.map((p, i) => ({
  ...p,
  id: i + 1,
  image: `/product-thumb-${(i % 5) + 1}.jpeg`,
  price: i % 2 === 0 ? 200 : 49.9 + i * 10,
  priceDiscount: i % 2 === 0 ? 149.9 : undefined,
}))
export const productImages = [1, 2, 3, 4, 5].map(n => ({ src: `/produc-image-${n}.jpeg` }))
export const slides = [1, 2, 3, 4, 5, 6, 7, 8].map(n => ({ src: `/home-slide-${n}.jpeg` }))
