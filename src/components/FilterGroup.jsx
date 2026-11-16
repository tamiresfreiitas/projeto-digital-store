export default function FilterGroup({ title, inputType = 'checkbox', options, name, onChange }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h4 style={{ fontSize: 14, color: 'var(--dark-gray-2)', marginBottom: 12 }}>{title}</h4>
      {options.map(o => (
        <label key={o.text} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 14 }}>
          <input type={inputType} name={name ?? title} value={o.value ?? o.text} onChange={onChange}
            style={{ width: 22, height: 22, accentColor: 'var(--primary)' }} />
          {o.text}
        </label>
      ))}
    </div>
  )
}
