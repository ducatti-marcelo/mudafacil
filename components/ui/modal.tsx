import * as React from 'react'

export function Modal({ isOpen, onClose, title, children, actions }: {
  isOpen: boolean
  onClose: ()=>void
  title?: string
  children?: React.ReactNode
  actions?: React.ReactNode
}) {
  if (!isOpen) return null
  return (
    <div role="dialog" aria-label={title} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ width: 480, maxWidth: '90%', background: '#fff', borderRadius: 8, padding: 20 }}>
        {title && <h3 style={{ marginTop:0 }}>{title}</h3>}
        <div>{children}</div>
        {actions && <div style={{ marginTop: 16, textAlign: 'right' }}>{actions}</div>}
        <button onClick={onClose} style={{ position: 'absolute', top: 8, right: 8 }}>✕</button>
      </div>
    </div>
  )
}
