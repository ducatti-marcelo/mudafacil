import * as React from 'react'

export function AccordionItem({ header, content }: { header: React.ReactNode; content: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div style={{ border: '1px solid #E2E8F0', borderRadius: 6, marginBottom: 8 }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', textAlign: 'left', padding: '12px 14px', background: '#fff', border: 'none' }}>
        {header}
      </button>
      {open && <div style={{ padding: 14 }}>{content}</div>}
    </div>
  )
}

export function Accordion({ items }: { items: { header: React.ReactNode; content: React.ReactNode }[] }) {
  return (
    <div>
      {items.map((it, idx) => (
        <AccordionItem key={idx} header={it.header} content={it.content} />
      ))}
    </div>
  )
}
