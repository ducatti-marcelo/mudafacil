import * as React from 'react'

export function Radio({ id, name, value, checked, onChange, label, ...props }: {
  id?: string
  name?: string
  value?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor={id} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <input id={id} type="radio" name={name} value={value} checked={checked} onChange={onChange} {...props} />
      {label}
    </label>
  )
}
