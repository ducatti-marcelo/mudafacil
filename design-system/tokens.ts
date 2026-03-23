// MudaFácil Design System Tokens
// Inspired by Shopify Polaris & IBM Carbon

// ============================================
// COLOR PALETTE
// ============================================
export const colors = {
  // Primary - Blue
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554',
  },
  
  // Secondary - Slate
  secondary: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },
  
  // Accent - Amber (MudaFácil brand)
  accent: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
    950: '#451A03',
  },
  
  // Success - Emerald
  success: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
    950: '#022C22',
  },
  
  // Warning - Amber (same as accent)
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
    950: '#451A03',
  },
  
  // Danger - Red
  danger: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },
  
  // Info - Blue (same as primary)
  info: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554',
  },
  
  // Neutrals - Gray
  neutral: {
    0: '#FFFFFF',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    1000: '#030712',
  },
};

// ============================================
// SEMANTIC COLORS
// ============================================
export const semanticColors = {
  // Background
  background: {
    primary: colors.neutral[0],
    secondary: colors.secondary[50],
    tertiary: colors.secondary[100],
    inverse: colors.secondary[900],
    disabled: colors.secondary[100],
    brand: colors.primary[50],
    success: colors.success[50],
    warning: colors.warning[50],
    danger: colors.danger[50],
    info: colors.info[50],
  },
  
  // Text
  text: {
    primary: colors.secondary[900],
    secondary: colors.secondary[600],
    tertiary: colors.secondary[500],
    disabled: colors.secondary[400],
    inverse: colors.neutral[0],
    brand: colors.primary[600],
    success: colors.success[700],
    warning: colors.warning[800],
    danger: colors.danger[600],
    info: colors.info[600],
    link: colors.primary[600],
    linkHover: colors.primary[700],
  },
  
  // Border
  border: {
    default: colors.secondary[200],
    muted: colors.secondary[100],
    strong: colors.secondary[300],
    disabled: colors.secondary[200],
    focus: colors.primary[500],
    brand: colors.primary[600],
    success: colors.success[500],
    warning: colors.warning[500],
    danger: colors.danger[500],
    info: colors.info[500],
  },
  
  // Icon
  icon: {
    primary: colors.secondary[700],
    secondary: colors.secondary[500],
    disabled: colors.secondary[300],
    inverse: colors.neutral[0],
    brand: colors.primary[600],
    success: colors.success[600],
    warning: colors.warning[600],
    danger: colors.danger[600],
    info: colors.info[600],
  },
  
  // Interactive
  interactive: {
    primary: colors.primary[600],
    primaryHover: colors.primary[700],
    primaryActive: colors.primary[800],
    primaryDisabled: colors.primary[200],
    secondary: colors.secondary[100],
    secondaryHover: colors.secondary[200],
    secondaryActive: colors.secondary[300],
    secondaryDisabled: colors.secondary[50],
    destructive: colors.danger[600],
    destructiveHover: colors.danger[700],
    destructiveActive: colors.danger[800],
    destructiveDisabled: colors.danger[200],
  },
  
  // Surface
  surface: {
    primary: colors.neutral[0],
    secondary: colors.secondary[50],
    raised: colors.neutral[0],
    overlay: 'rgba(15, 23, 42, 0.5)',
    disabled: colors.secondary[100],
    hover: colors.secondary[50],
    active: colors.secondary[100],
    selected: colors.primary[50],
    selectedBorder: colors.primary[200],
  },
};

// ============================================
// TYPOGRAPHY
// ============================================
export const typography = {
  fontFamily: {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace',
  },
  
  fontSize: {
    '2xs': '0.625rem',    // 10px
    xs: '0.75rem',        // 12px
    sm: '0.875rem',       // 14px
    base: '1rem',         // 16px
    lg: '1.125rem',       // 18px
    xl: '1.25rem',        // 20px
    '2xl': '1.5rem',      // 24px
    '3xl': '1.875rem',    // 30px
    '4xl': '2.25rem',     // 36px
    '5xl': '3rem',        // 48px
    '6xl': '3.75rem',     // 60px
    '7xl': '4.5rem',      // 72px
  },
  
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  // Heading styles
  heading: {
    h1: { fontSize: '3rem', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.025em' },
    h2: { fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.025em' },
    h3: { fontSize: '1.875rem', fontWeight: 600, lineHeight: 1.375 },
    h4: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.375 },
    h5: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.5 },
    h6: { fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.5 },
  },
  
  // Body styles
  body: {
    large: { fontSize: '1.125rem', fontWeight: 400, lineHeight: 1.625 },
    base: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 },
    small: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.5 },
    xs: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.5 },
  },
};

// ============================================
// SPACING
// ============================================
export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',      // 4px
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px
  2.5: '0.625rem',   // 10px
  3: '0.75rem',      // 12px
  3.5: '0.875rem',   // 14px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  7: '1.75rem',      // 28px
  8: '2rem',         // 32px
  9: '2.25rem',      // 36px
  10: '2.5rem',      // 40px
  11: '2.75rem',     // 44px
  12: '3rem',        // 48px
  14: '3.5rem',      // 56px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  28: '7rem',        // 112px
  32: '8rem',        // 128px
  36: '9rem',        // 144px
  40: '10rem',       // 160px
  44: '11rem',       // 176px
  48: '12rem',       // 192px
  52: '13rem',       // 208px
  56: '14rem',       // 224px
  60: '15rem',       // 240px
  64: '16rem',       // 256px
  72: '18rem',       // 288px
  80: '20rem',       // 320px
  96: '24rem',       // 384px
};

// ============================================
// BORDER RADIUS
// ============================================
export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
};

// ============================================
// SHADOWS
// ============================================
export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  
  // Focus rings
  focus: '0 0 0 3px rgba(59, 130, 246, 0.5)',
  focusDanger: '0 0 0 3px rgba(239, 68, 68, 0.5)',
  focusSuccess: '0 0 0 3px rgba(16, 185, 129, 0.5)',
  
  // Colored shadows
  brand: '0 4px 14px 0 rgba(59, 130, 246, 0.25)',
  success: '0 4px 14px 0 rgba(16, 185, 129, 0.25)',
  danger: '0 4px 14px 0 rgba(239, 68, 68, 0.25)',
  warning: '0 4px 14px 0 rgba(245, 158, 11, 0.25)',
};

// ============================================
// TRANSITIONS
// ============================================
export const transitions = {
  duration: {
    instant: '0ms',
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  timing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// ============================================
// Z-INDEX
// ============================================
export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
};

// ============================================
// BREAKPOINTS
// ============================================
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// ============================================
// SIZES (Components)
// ============================================
export const sizes = {
  button: {
    xs: { height: '24px', padding: '0 8px', fontSize: '12px' },
    sm: { height: '32px', padding: '0 12px', fontSize: '13px' },
    md: { height: '40px', padding: '0 16px', fontSize: '14px' },
    lg: { height: '48px', padding: '0 24px', fontSize: '16px' },
    xl: { height: '56px', padding: '0 32px', fontSize: '18px' },
  },
  
  input: {
    sm: { height: '32px', padding: '0 10px', fontSize: '13px' },
    md: { height: '40px', padding: '0 12px', fontSize: '14px' },
    lg: { height: '48px', padding: '0 16px', fontSize: '16px' },
  },
  
  icon: {
    xs: '14px',
    sm: '16px',
    md: '20px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },
};

// ============================================
// EXPORT ALL TOKENS
// ============================================
export const tokens = {
  colors,
  semanticColors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  zIndex,
  breakpoints,
  sizes,
};

export default tokens;
