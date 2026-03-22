// Design Tokens - extended with neutrals and status palettes
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
    neutrals?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    status?: {
      success: string;
      successForeground: string;
      warning: string;
      warningForeground: string;
      info: string;
      infoForeground: string;
      danger: string;
      dangerForeground: string;
    };
  };
}

export const tokens: DesignTokens = {
  colors: {
    primary: "#2563EB",
    primaryForeground: "#FFFFFF",
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
    accent: "#F59E0B",
    accentForeground: "#FFFFFF",
    destructive: "#EF4444",
    destructiveForeground: "#FFFFFF",
    border: "#E2E8F0",
    input: "#E2E8F0",
    ring: "#2563EB",
    neutrals: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#374151",
    },
    status: {
      success: "#10b981",
      successForeground: "#ffffff",
      warning: "#f59e0b",
      warningForeground: "#111827",
      info: "#3b82f6",
      infoForeground: "#ffffff",
      danger: "#ef4444",
      dangerForeground: "#ffffff",
    },
  },
};

export default tokens;
