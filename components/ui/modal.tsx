import * as React from 'react'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children?: React.ReactNode
  actions?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

export function Modal({ isOpen, onClose, title, children, actions, size = 'md' }: ModalProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neutral-900/50 animate-fadeIn" />
      
      {/* Modal Content */}
      <div 
        className={`relative w-full ${sizeClasses[size]} bg-neutral-0 rounded-xl shadow-xl animate-scaleIn`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-secondary-400 hover:text-secondary-600 hover:bg-secondary-100 rounded-lg transition-all duration-fast focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Fechar"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        {title && (
          <div className="px-6 pt-6 pb-4">
            <h2 className="text-xl font-semibold text-secondary-900">{title}</h2>
          </div>
        )}

        {/* Body */}
        <div className={`px-6 ${title ? '' : 'pt-6'} pb-4 ${actions ? '' : 'pb-6'}`}>
          <div className="text-secondary-600">{children}</div>
        </div>

        {/* Footer Actions */}
        {actions && (
          <div className="px-6 pb-6 pt-2 flex items-center justify-end gap-3 border-t border-secondary-100">
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}
