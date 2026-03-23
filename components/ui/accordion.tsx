import * as React from 'react'

export interface AccordionItemData {
  header: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
  defaultOpen?: boolean
  icon?: React.ReactNode
}

export interface AccordionProps {
  items: AccordionItemData[]
  variant?: 'default' | 'bordered' | 'separated' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  allowMultiple?: boolean
}

const sizeStyles = {
  sm: {
    header: 'px-3 py-2 text-sm',
    content: 'px-3 py-2 text-sm',
    icon: 'w-4 h-4',
  },
  md: {
    header: 'px-4 py-3',
    content: 'px-4 py-3',
    icon: 'w-5 h-5',
  },
  lg: {
    header: 'px-5 py-4 text-lg',
    content: 'px-5 py-4',
    icon: 'w-6 h-6',
  },
}

const variantStyles = {
  default: {
    container: 'border border-secondary-200 rounded-lg overflow-hidden',
    item: 'border-b border-secondary-200 last:border-b-0',
    header: 'bg-neutral-0 hover:bg-secondary-50',
    content: 'bg-neutral-0',
    disabled: 'bg-secondary-50',
  },
  bordered: {
    container: 'space-y-2',
    item: 'border border-secondary-200 rounded-lg overflow-hidden',
    header: 'bg-neutral-0 hover:bg-secondary-50',
    content: 'bg-neutral-0 border-t border-secondary-200',
    disabled: 'bg-secondary-50 opacity-60',
  },
  separated: {
    container: 'space-y-3',
    item: 'border border-secondary-200 rounded-lg overflow-hidden shadow-sm',
    header: 'bg-neutral-0 hover:bg-secondary-50',
    content: 'bg-neutral-0',
    disabled: 'bg-secondary-50 opacity-60',
  },
  filled: {
    container: 'rounded-lg overflow-hidden',
    item: 'border-b border-secondary-200/50 last:border-b-0',
    header: 'bg-secondary-100 hover:bg-secondary-200',
    content: 'bg-secondary-50',
    disabled: 'bg-secondary-100 opacity-50',
  },
}

function ChevronIcon({ isOpen, className }: { isOpen: boolean; className?: string }) {
  return (
    <svg 
      className={`${className} transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function AccordionItem({ 
  header, 
  content, 
  disabled = false, 
  defaultOpen = false,
  icon,
  variant = 'default',
  size = 'md',
}: AccordionItemData & { variant: keyof typeof variantStyles; size: keyof typeof sizeStyles }) {
  const [open, setOpen] = React.useState(defaultOpen)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const styles = sizeStyles[size]
  const varStyles = variantStyles[variant]

  const handleToggle = () => {
    if (!disabled) {
      setOpen(!open)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle()
    }
  }

  return (
    <div className={`
      ${varStyles.item}
      ${disabled ? varStyles.disabled : ''}
      transition-all duration-200
    `}>
      {/* Header Button */}
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={`
          w-full flex items-center justify-between gap-4 text-left
          ${styles.header}
          ${varStyles.header}
          ${disabled 
            ? 'cursor-not-allowed text-secondary-400' 
            : 'cursor-pointer text-secondary-900 hover:text-secondary-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500'
          }
          transition-all duration-200
        `}
        aria-expanded={open}
      >
        <span className="flex items-center gap-3 flex-1 min-w-0">
          {icon && (
            <span className={`flex-shrink-0 ${disabled ? 'text-secondary-300' : 'text-secondary-500'}`}>
              {icon}
            </span>
          )}
          <span className="font-medium truncate">{header}</span>
        </span>
        
        <ChevronIcon 
          isOpen={open && !disabled} 
          className={`flex-shrink-0 ${styles.icon} ${disabled ? 'text-secondary-300' : 'text-secondary-400'}`}
        />
      </button>

      {/* Content */}
      <div 
        ref={contentRef}
        className={`
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${open && !disabled ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className={`
          ${styles.content}
          ${varStyles.content}
          ${disabled ? 'text-secondary-400' : 'text-secondary-600'}
        `}>
          {content}
        </div>
      </div>
    </div>
  )
}

export function Accordion({ 
  items, 
  variant = 'default', 
  size = 'md',
  allowMultiple = false,
}: AccordionProps) {
  return (
    <div className={variantStyles[variant].container}>
      {items.map((item, idx) => (
        <AccordionItem 
          key={idx} 
          {...item}
          variant={variant}
          size={size}
        />
      ))}
    </div>
  )
}

// Export for backwards compatibility
export { AccordionItem }
