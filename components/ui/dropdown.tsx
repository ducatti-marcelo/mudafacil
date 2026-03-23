import * as React from 'react'

export interface DropdownItem {
  label: string
  onClick: () => void
  icon?: React.ReactNode
  destructive?: boolean
}

export interface DropdownProps {
  label: React.ReactNode
  items: DropdownItem[]
  align?: 'left' | 'right'
}

export function Dropdown({ label, items, align = 'left' }: DropdownProps) {
  const [open, setOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(v => !v)}
        className={`
          inline-flex items-center gap-2 px-4 py-2.5 
          bg-neutral-0 border border-secondary-200 rounded-lg 
          text-sm font-medium text-secondary-700
          hover:bg-secondary-50 hover:border-secondary-300 
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          active:bg-secondary-100
          transition-all duration-200
          ${open ? 'ring-2 ring-primary-500 ring-offset-2 border-primary-500' : ''}
        `}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div 
          className={`
            absolute top-full mt-2 z-[var(--z-dropdown)]
            min-w-[200px] py-2
            bg-neutral-0 border border-secondary-200 rounded-lg shadow-lg
            animate-scaleIn
            ${align === 'right' ? 'right-0' : 'left-0'}
          `}
          role="menu"
        >
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                item.onClick()
                setOpen(false)
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-2.5 text-left
                text-sm transition-colors duration-100
                ${item.destructive 
                  ? 'text-danger-600 hover:bg-danger-50 hover:text-danger-700' 
                  : 'text-secondary-700 hover:bg-secondary-50 hover:text-secondary-900'
                }
                focus:outline-none focus:bg-secondary-50
                active:bg-secondary-100
              `}
              role="menuitem"
            >
              {item.icon && <span className="w-5 h-5">{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
