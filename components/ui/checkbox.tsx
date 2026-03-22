import * as React from 'react'

export function Checkbox({ id, label, checked, onChange, ...props }: {
  id?: string
  label?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor={id} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} {...props} />
      {label}
    </label>
  )
}
