// Utilitários para conversão de tokens para CSS variables

/**
 * Converte uma chave camelCase para CSS variable format
 * Ex: "cardForeground" -> "--card-foreground"
 * Ex: "primary" -> "--primary"
 */
export function tokenKeyToCssVar(key: string): string {
  // Converte camelCase para kebab-case
  const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
  return `--${kebab}`;
}

/**
 * Converte uma chave de sidebar para CSS variable format
 * Ex: "primary" -> "--sidebar-primary"
 * Ex: "accentForeground" -> "--sidebar-accent-foreground"
 */
export function sidebarKeyToCssVar(key: string): string {
  const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
  return `--sidebar-${kebab}`;
}

/**
 * Converte um objeto de tokens para um objeto de CSS variables
 */
export function tokensToCssVars<T extends Record<string, any>>(
  tokens: T,
  prefix?: string
): Record<string, string> {
  const cssVars: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === 'object' && value !== null) {
      // Para objetos aninhados, concatena as chaves
      const nestedVars = tokensToCssVars(value, prefix ? `${prefix}-${key}` : key);
      Object.assign(cssVars, nestedVars);
    } else {
      const varName = prefix 
        ? `--${prefix}-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
        : tokenKeyToCssVar(key);
      cssVars[varName] = String(value);
    }
  }
  
  return cssVars;
}

/**
 * Converte tokens para uma string CSS de custom properties
 */
export function tokensToCssString(
  tokens: Record<string, string>,
  selector: string = ':root'
): string {
  const lines = [`${selector} {`];
  
  for (const [key, value] of Object.entries(tokens)) {
    lines.push(`  ${key}: ${value};`);
  }
  
  lines.push('}');
  return lines.join('\n');
}