import * as React from 'react'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, checked, onChange, disabled, className = '', ...props }, ref) => {
    const inputId = React.useId()
    const checkboxId = id || inputId

    return (
      <label 
        htmlFor={checkboxId}
        className={`
          inline-flex items-center gap-2.5 cursor-pointer
          group
          ${disabled ? 'cursor-not-allowed opacity-50' : ''}
          ${className}
        `}
      >
        {/* Custom checkbox visual */}
        <div className="relative w-5 h-5">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className="
              peer sr-only
              focus-visible:outline-none
            "
            {...props}
          />
          <div 
            className={`
              absolute inset-0 
              border-2 border-secondary-300 rounded-md
              bg-neutral-0
              transition-all duration-200
              peer-checked:bg-primary-600 peer-checked:border-primary-600
              peer-hover:border-secondary-400
              peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2
              peer-disabled:bg-secondary-100 peer-disabled:border-secondary-200
              peer-disabled:peer-checked:bg-primary-200 peer-disabled:peer-checked:border-primary-200
            `}
          >
            {/* Checkmark icon */}
            <svg 
              className="absolute inset-0 w-full h-full p-0.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-100" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Label */}
        {label && (
          <span className="text-sm text-secondary-700 group-hover:text-secondary-900 transition-colors">
            {label}
          </span>
        )}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
