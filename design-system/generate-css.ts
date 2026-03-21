#!/usr/bin/env node
/**
 * Script para gerar CSS custom properties a partir dos design tokens
 * 
 * Uso:
 *   npm run tokens        - Gera as CSS variables no globals.css
 *   npm run tokens:check  - Verifica se as CSS variables estão sincronizadas
 */

import fs from 'fs';
import path from 'path';
import { tokens } from './tokens';
import { tokensToCssVars, tokensToCssString } from './utils';

const GLOBALS_CSS_PATH = path.join(__dirname, '../app/globals.css');
const START_MARKER = '/* DESIGN TOKENS START */';
const END_MARKER = '/* DESIGN TOKENS END */';

// Converte os tokens para CSS variables
function generateCssContent(): string {
  const cssVars: Record<string, string> = {};

  // Cores principais
  const colorVars = tokensToCssVars(tokens.colors);
  Object.assign(cssVars, colorVars);

  // Cores de sidebar
  const sidebarVars = tokensToCssVars(tokens.sidebar, 'sidebar');
  Object.assign(cssVars, sidebarVars);

  // Border radius
  cssVars['--radius'] = tokens.radius.lg;

  // Spacing
  for (const [key, value] of Object.entries(tokens.spacing)) {
    cssVars[`--spacing-${key}`] = value;
  }

  // Typography
  cssVars['--font-sans'] = tokens.typography.fontFamily.sans;
  cssVars['--font-mono'] = tokens.typography.fontFamily.mono;

  return tokensToCssString(cssVars);
}

// Lê o arquivo globals.css atual
function readGlobalsCss(): string | null {
  try {
    return fs.readFileSync(GLOBALS_CSS_PATH, 'utf-8');
  } catch (error) {
    return null;
  }
}

// Atualiza o globals.css com as novas CSS variables
function updateGlobalsCss(): void {
  const cssContent = generateCssContent();
  let globalsCss = readGlobalsCss() || '';

  // Se o arquivo existe e tem os marcadores, substitui o conteúdo entre eles
  if (globalsCss.includes(START_MARKER) && globalsCss.includes(END_MARKER)) {
    const startIdx = globalsCss.indexOf(START_MARKER);
    const endIdx = globalsCss.indexOf(END_MARKER) + END_MARKER.length;
    const before = globalsCss.substring(0, startIdx);
    const after = globalsCss.substring(endIdx);
    globalsCss = `${before}${START_MARKER}\n${cssContent}\n${END_MARKER}${after}`;
  } else {
    // Se não existe, cria um novo arquivo com os tokens
    globalsCss = `${START_MARKER}\n${cssContent}\n${END_MARKER}\n`;
  }

  // Garante que o diretório existe
  const dir = path.dirname(GLOBALS_CSS_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(GLOBALS_CSS_PATH, globalsCss, 'utf-8');
  console.log('✅ CSS variables atualizadas em app/globals.css');
}

// Verifica se as CSS variables estão sincronizadas
function checkSync(): void {
  const globalsCss = readGlobalsCss();
  
  if (!globalsCss) {
    console.error('❌ Arquivo app/globals.css não encontrado');
    process.exit(1);
  }

  const cssContent = generateCssContent();
  
  // Verifica se os marcadores existem
  if (!globalsCss.includes(START_MARKER) || !globalsCss.includes(END_MARKER)) {
    console.error('❌ Marcadores de tokens não encontrados no globals.css');
    process.exit(1);
  }

  // Extrai o conteúdo entre os marcadores
  const startIdx = globalsCss.indexOf(START_MARKER);
  const endIdx = globalsCss.indexOf(END_MARKER) + END_MARKER.length;
  const currentTokens = globalsCss.substring(startIdx, endIdx);
  
  // Normaliza para comparação (remove espaços extras)
  const normalize = (str: string) => str.replace(/\s+/g, ' ').trim();
  
  if (normalize(currentTokens) === normalize(`${START_MARKER}\n${cssContent}\n${END_MARKER}`)) {
    console.log('✅ Tokens sincronizados');
    process.exit(0);
  } else {
    console.error('❌ Tokens não sincronizados. Execute: npm run tokens');
    process.exit(1);
  }
}

// Executa o script
const args = process.argv.slice(2);
const isCheckMode = args.includes('--check');

if (isCheckMode) {
  checkSync();
} else {
  updateGlobalsCss();
}