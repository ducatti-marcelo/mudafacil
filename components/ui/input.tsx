import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className = '', 
    label, 
    hint, 
    error, 
    leftIcon, 
    rightIcon,
    disabled,
    ...props 
  }, ref) => {
    const inputId = React.useId()
    
    const baseInputStyles = `
      w-full h-10 px-3 
      bg-neutral-0 border border-secondary-300 rounded-lg
      text-sm text-secondary-900 placeholder:text-secondary-400
      transition-all duration-200
      hover:border-secondary-400
      focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
      disabled:bg-secondary-50 disabled:border-secondary-200 disabled:text-secondary-400 disabled:cursor-not-allowed
      ${leftIcon ? 'pl-10' : ''}
      ${rightIcon ? 'pr-10' : ''}
      ${error ? 'border-danger-500 focus:border-danger-500 focus:ring-danger-500/20' : ''}
      ${className}
    `

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-secondary-700 mb-1.5"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400 pointer-events-none">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={baseInputStyles}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {(hint || error) && (
          <p className={`mt-1.5 text-sm ${error ? 'text-danger-600' : 'text-secondary-500'}`}>
            {error || hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
