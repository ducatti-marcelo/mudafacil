import * as React from 'react'

export function Dropdown({ label, items }: { label: string; items: { label: string; onClick: ()=>void }[] }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={() => setOpen(v => !v)} style={{ padding: '8px 12px', border: '1px solid #E2E8F0', borderRadius: 6, background: '#fff' }}>{label}</button>
      {open && (
        <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', border: '1px solid #E2E8F0', borderRadius: 6, marginTop: 4, minWidth: 180, boxShadow: '0 2px 8px rgba(0,0,0,.15)' }}>
          {items.map((it, idx) => (
            <div key={idx} onClick={() => { it.onClick(); setOpen(false); }} style={{ padding: '8px 12px', cursor: 'pointer' }}>
              {it.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
