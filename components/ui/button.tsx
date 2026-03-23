import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  asChild?: boolean
}

const variantStyles = {
  default: [
    'bg-primary-600 text-white',
    'hover:bg-primary-700',
    'active:bg-primary-800',
    'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    'disabled:bg-secondary-100 disabled:text-secondary-400 disabled:border disabled:border-secondary-200 disabled:cursor-not-allowed',
  ].join(' '),
  
  destructive: [
    'bg-danger-600 text-white',
    'hover:bg-danger-700',
    'active:bg-danger-800',
    'focus-visible:ring-2 focus-visible:ring-danger-500 focus-visible:ring-offset-2',
    'disabled:bg-danger-200 disabled:text-danger-400 disabled:cursor-not-allowed',
  ].join(' '),
  
  outline: [
    'border border-secondary-300 bg-neutral-0 text-secondary-700',
    'hover:bg-secondary-50 hover:border-secondary-400 hover:text-secondary-900',
    'active:bg-secondary-100',
    'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    'disabled:bg-neutral-0 disabled:border-secondary-200 disabled:text-secondary-400 disabled:cursor-not-allowed',
  ].join(' '),
  
  secondary: [
    'bg-secondary-100 text-secondary-900',
    'hover:bg-secondary-200',
    'active:bg-secondary-300',
    'focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2',
    'disabled:bg-secondary-100 disabled:text-secondary-400 disabled:cursor-not-allowed',
  ].join(' '),
  
  ghost: [
    'bg-transparent text-secondary-700',
    'hover:bg-secondary-100 hover:text-secondary-900',
    'active:bg-secondary-200',
    'focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2',
    'disabled:bg-secondary-50 disabled:text-secondary-400 disabled:cursor-not-allowed',
  ].join(' '),
  
  link: [
    'bg-transparent text-primary-600 underline underline-offset-4',
    'hover:text-primary-700 hover:underline',
    'active:text-primary-800',
    'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    'disabled:text-secondary-400 disabled:no-underline disabled:cursor-not-allowed',
  ].join(' '),
}

const sizeStyles = {
  xs: 'h-6 px-2 text-xs gap-1.5',
  sm: 'h-8 px-3 text-sm gap-2',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2.5',
  xl: 'h-14 px-8 text-lg gap-3',
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className = '', 
    variant = 'default', 
    size = 'md', 
    disabled, 
    children, 
    ...props 
  }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`
          inline-flex items-center justify-center font-medium
          rounded-lg transition-all duration-200
          focus-visible:outline-none
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
