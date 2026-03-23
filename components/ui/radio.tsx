import * as React from 'react'

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ id, name, value, label, checked, onChange, disabled, className = '', ...props }, ref) => {
    const inputId = React.useId()
    const radioId = id || inputId

    return (
      <label 
        htmlFor={radioId}
        className={`
          inline-flex items-center gap-2.5 cursor-pointer
          group
          ${disabled ? 'cursor-not-allowed opacity-50' : ''}
          ${className}
        `}
      >
        {/* Custom radio visual */}
        <div className="relative w-5 h-5">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            name={name}
            value={value}
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
              border-2 border-secondary-300 rounded-full
              bg-neutral-0
              transition-all duration-200
              peer-checked:border-primary-600
              peer-hover:border-secondary-400
              peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2
              peer-disabled:bg-secondary-100 peer-disabled:border-secondary-200
              peer-disabled:peer-checked:border-primary-200
            `}
          >
            {/* Inner dot */}
            <div 
              className={`
                absolute inset-1 rounded-full bg-primary-600
                scale-0 opacity-0
                transition-all duration-200
                peer-checked:scale-100 peer-checked:opacity-100
                peer-disabled:bg-primary-200
              `}
            />
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

Radio.displayName = 'Radio'
