import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // ============================================
      // COLORS
      // ============================================
      colors: {
        // Primary
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
          DEFAULT: 'var(--color-primary-600)',
          foreground: 'var(--text-inverse)',
        },
        
        // Secondary
        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
          950: 'var(--color-secondary-950)',
          DEFAULT: 'var(--color-secondary-500)',
          foreground: 'var(--text-primary)',
        },
        
        // Accent
        accent: {
          50: 'var(--color-accent-50)',
          100: 'var(--color-accent-100)',
          200: 'var(--color-accent-200)',
          300: 'var(--color-accent-300)',
          400: 'var(--color-accent-400)',
          500: 'var(--color-accent-500)',
          600: 'var(--color-accent-600)',
          700: 'var(--color-accent-700)',
          800: 'var(--color-accent-800)',
          900: 'var(--color-accent-900)',
          950: 'var(--color-accent-950)',
          DEFAULT: 'var(--color-accent-500)',
          foreground: 'var(--text-inverse)',
        },
        
        // Status colors
        success: {
          50: 'var(--color-success-50)',
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)',
          300: 'var(--color-success-300)',
          400: 'var(--color-success-400)',
          500: 'var(--color-success-500)',
          600: 'var(--color-success-600)',
          700: 'var(--color-success-700)',
          800: 'var(--color-success-800)',
          900: 'var(--color-success-900)',
          DEFAULT: 'var(--color-success-600)',
          foreground: 'var(--text-inverse)',
        },
        
        warning: {
          50: 'var(--color-warning-50)',
          100: 'var(--color-warning-100)',
          200: 'var(--color-warning-200)',
          300: 'var(--color-warning-300)',
          400: 'var(--color-warning-400)',
          500: 'var(--color-warning-500)',
          600: 'var(--color-warning-600)',
          700: 'var(--color-warning-700)',
          800: 'var(--color-warning-800)',
          900: 'var(--color-warning-900)',
          DEFAULT: 'var(--color-warning-600)',
          foreground: 'var(--text-inverse)',
        },
        
        danger: {
          50: 'var(--color-danger-50)',
          100: 'var(--color-danger-100)',
          200: 'var(--color-danger-200)',
          300: 'var(--color-danger-300)',
          400: 'var(--color-danger-400)',
          500: 'var(--color-danger-500)',
          600: 'var(--color-danger-600)',
          700: 'var(--color-danger-700)',
          800: 'var(--color-danger-800)',
          900: 'var(--color-danger-900)',
          DEFAULT: 'var(--color-danger-600)',
          foreground: 'var(--text-inverse)',
        },
        
        info: {
          50: 'var(--color-info-50)',
          100: 'var(--color-info-100)',
          200: 'var(--color-info-200)',
          300: 'var(--color-info-300)',
          400: 'var(--color-info-400)',
          500: 'var(--color-info-500)',
          600: 'var(--color-info-600)',
          700: 'var(--color-info-700)',
          800: 'var(--color-info-800)',
          900: 'var(--color-info-900)',
          DEFAULT: 'var(--color-info-600)',
          foreground: 'var(--text-inverse)',
        },
        
        // Neutral
        neutral: {
          0: 'var(--color-neutral-0)',
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
          1000: 'var(--color-neutral-1000)',
        },
        
        // Semantic
        background: {
          DEFAULT: 'var(--bg-primary)',
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          inverse: 'var(--bg-inverse)',
          disabled: 'var(--bg-disabled)',
          brand: 'var(--bg-brand)',
        },
        
        foreground: {
          DEFAULT: 'var(--text-primary)',
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          disabled: 'var(--text-disabled)',
          inverse: 'var(--text-inverse)',
          brand: 'var(--text-brand)',
        },
        
        border: {
          DEFAULT: 'var(--border-default)',
          muted: 'var(--border-muted)',
          strong: 'var(--border-strong)',
          disabled: 'var(--border-disabled)',
          focus: 'var(--border-focus)',
        },
        
        surface: {
          DEFAULT: 'var(--surface-primary)',
          primary: 'var(--surface-primary)',
          secondary: 'var(--surface-secondary)',
          raised: 'var(--surface-raised)',
          overlay: 'var(--surface-overlay)',
          disabled: 'var(--surface-disabled)',
          hover: 'var(--surface-hover)',
          active: 'var(--surface-active)',
          selected: 'var(--surface-selected)',
        },
      },
      
      // ============================================
      // TYPOGRAPHY
      // ============================================
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      
      fontSize: {
        '2xs': ['var(--text-2xs)', { lineHeight: '1.25' }],
        xs: ['var(--text-xs)', { lineHeight: '1.5' }],
        sm: ['var(--text-sm)', { lineHeight: '1.5' }],
        base: ['var(--text-base)', { lineHeight: '1.5' }],
        lg: ['var(--text-lg)', { lineHeight: '1.625' }],
        xl: ['var(--text-xl)', { lineHeight: '1.5' }],
        '2xl': ['var(--text-2xl)', { lineHeight: '1.375' }],
        '3xl': ['var(--text-3xl)', { lineHeight: '1.25' }],
        '4xl': ['var(--text-4xl)', { lineHeight: '1.25' }],
        '5xl': ['var(--text-5xl)', { lineHeight: '1.2' }],
        '6xl': ['var(--text-6xl)', { lineHeight: '1.1' }],
      },
      
      fontWeight: {
        light: 'var(--font-weight-light)',
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
        extrabold: 'var(--font-weight-extrabold)',
      },
      
      lineHeight: {
        none: 'var(--line-height-none)',
        tight: 'var(--line-height-tight)',
        snug: 'var(--line-height-snug)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
        loose: 'var(--line-height-loose)',
      },
      
      // ============================================
      // SPACING
      // ============================================
      spacing: {
        '0': 'var(--space-0)',
        'px': 'var(--space-px)',
        '0.5': 'var(--space-0-5)',
        '1': 'var(--space-1)',
        '1.5': 'var(--space-1-5)',
        '2': 'var(--space-2)',
        '2.5': 'var(--space-2-5)',
        '3': 'var(--space-3)',
        '3.5': 'var(--space-3-5)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
        '8': 'var(--space-8)',
        '10': 'var(--space-10)',
        '12': 'var(--space-12)',
        '16': 'var(--space-16)',
        '20': 'var(--space-20)',
        '24': 'var(--space-24)',
      },
      
      // ============================================
      // BORDER RADIUS
      // ============================================
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        base: 'var(--radius-base)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        full: 'var(--radius-full)',
      },
      
      // ============================================
      // SHADOWS
      // ============================================
      boxShadow: {
        none: 'var(--shadow-none)',
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-base)',
        base: 'var(--shadow-base)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
        focus: 'var(--shadow-focus)',
        'focus-danger': 'var(--shadow-focus-danger)',
        'focus-success': 'var(--shadow-focus-success)',
        brand: 'var(--shadow-brand)',
      },
      
      // ============================================
      // TRANSITIONS
      // ============================================
      transitionDuration: {
        instant: 'var(--transition-duration-instant)',
        fast: 'var(--transition-duration-fast)',
        normal: 'var(--transition-duration-normal)',
        slow: 'var(--transition-duration-slow)',
        slower: 'var(--transition-duration-slower)',
      },
      
      transitionTimingFunction: {
        DEFAULT: 'var(--transition-timing-default)',
        linear: 'var(--transition-timing-linear)',
        in: 'var(--transition-timing-in)',
        out: 'var(--transition-timing-out)',
      },
      
      // ============================================
      // Z-INDEX
      // ============================================
      zIndex: {
        hide: 'var(--z-hide)',
        base: 'var(--z-base)',
        dropdown: 'var(--z-dropdown)',
        sticky: 'var(--z-sticky)',
        fixed: 'var(--z-fixed)',
        'modal-backdrop': 'var(--z-modal-backdrop)',
        modal: 'var(--z-modal)',
        popover: 'var(--z-popover)',
        tooltip: 'var(--z-tooltip)',
        toast: 'var(--z-toast)',
      },
      
      // ============================================
      // SIZES
      // ============================================
      width: {
        'button-xs': 'auto',
        'button-sm': 'auto',
        'button-md': 'auto',
        'button-lg': 'auto',
        'button-xl': 'auto',
      },
      
      height: {
        'button-xs': '1.5rem',   // 24px
        'button-sm': '2rem',     // 32px
        'button-md': '2.5rem',   // 40px
        'button-lg': '3rem',     // 48px
        'button-xl': '3.5rem',   // 56px
        'input-sm': '2rem',      // 32px
        'input-md': '2.5rem',    // 40px
        'input-lg': '3rem',      // 48px
      },
      
      // ============================================
      // ANIMATION
      // ============================================
      animation: {
        'spin': 'spin 1s linear infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'fade-in': 'fadeIn var(--transition-duration-normal) var(--transition-timing-default)',
        'slide-in-top': 'slideInFromTop var(--transition-duration-normal) var(--transition-timing-out)',
        'slide-in-bottom': 'slideInFromBottom var(--transition-duration-normal) var(--transition-timing-out)',
        'scale-in': 'scaleIn var(--transition-duration-normal) var(--transition-timing-out)',
      },
    },
  },
  plugins: [],
};

export default config;
