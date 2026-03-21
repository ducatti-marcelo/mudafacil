// Design Tokens do MudaFácil
// Fonte única de verdade para todo o design system

export interface DesignTokens {
  colors: {
    primary: string;
    primaryForeground: string;
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
  };
  sidebar: {
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    accent: string;
    accentForeground: string;
    border: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
  };
  typography: {
    fontFamily: {
      sans: string;
      mono: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
}

// Tokens do MudaFácil - Cores baseadas na especificação
export const tokens: DesignTokens = {
  colors: {
    // Primária: #2563EB (azul confiança)
    primary: "#2563EB",
    primaryForeground: "#FFFFFF",
    // Fundo: #F8FAFC (cinza quase branco)
    background: "#F8FAFC",
    foreground: "#0F172A",
    card: "#FFFFFF",
    cardForeground: "#0F172A",
    popover: "#FFFFFF",
    popoverForeground: "#0F172A",
    secondary: "#F1F5F9",
    secondaryForeground: "#0F172A",
    muted: "#F1F5F9",
    mutedForeground: "#64748B",
    // Acento: #F59E0B (amarelo/âmbar — remete a caminhão de mudança)
    accent: "#F59E0B",
    accentForeground: "#FFFFFF",
    destructive: "#EF4444",
    destructiveForeground: "#FFFFFF",
    border: "#E2E8F0",
    input: "#E2E8F0",
    ring: "#2563EB",
  },
  sidebar: {
    background: "#FFFFFF",
    foreground: "#0F172A",
    primary: "#2563EB",
    primaryForeground: "#FFFFFF",
    accent: "#F1F5F9",
    accentForeground: "#0F172A",
    border: "#E2E8F0",
  },
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },
  typography: {
    fontFamily: {
      sans: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "JetBrains Mono, Consolas, Monaco, 'Courier New', monospace",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
};

export default tokens;