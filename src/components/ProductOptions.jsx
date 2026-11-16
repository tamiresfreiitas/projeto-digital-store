import { useState } from 'react'
export default function ProductOptions({ options, radius = '4px', shape = 'square', type = 'text' }) {
  const [sel, setSel] = useState(null)
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      {options.map(o => {
        const circle = shape === 'circle'
        return (
          <button key={o} onClick={() => setSel(o)} style={{
            width: circle ? 31 : 'auto', minWidth: circle ? 31 : 46, height: circle ? 31 : 46,
            padding: circle ? 0 : '0 12px', borderRadius: circle ? '50%' : radius,
            border: sel === o ? '2px solid var(--primary)' : '1px solid var(--light-gray-2)',
            background: type === 'color' ? o : '#fff', fontSize: 24, color: 'var(--dark-gray-2)',
          }}>{type === 'text' ? o : ''}</button>
        )
      })}
    </div>
  )
}
