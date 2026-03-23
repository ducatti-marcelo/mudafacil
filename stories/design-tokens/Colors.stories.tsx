import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";

const primaryColors = {
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
};

const secondaryColors = {
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
};

const accentColors = {
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
};

const successColors = {
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
};

const warningColors = {
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
};

const dangerColors = {
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
};

const neutralColors = {
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
};

interface ColorSwatchProps {
  name: string;
  value: string;
  isLight: boolean;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, value, isLight }) => (
  <div className="space-y-2">
    <div 
      className="h-16 rounded-lg border border-black/10"
      style={{ backgroundColor: value }}
    />
    <div>
      <p className={`text-sm font-medium ${isLight ? 'text-foreground-primary' : 'text-foreground-secondary'}`}>
        {name}
      </p>
      <p className="text-xs text-foreground-tertiary font-mono">{value}</p>
    </div>
  </div>
);

interface ColorPaletteProps {
  name: string;
  colors: Record<string, string>;
  description?: string;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ name, colors, description }) => (
  <div className="mb-12">
    <div className="mb-4">
      <h3 className="text-xl font-bold text-foreground-primary">{name}</h3>
      {description && <p className="text-sm text-foreground-secondary mt-1">{description}</p>}
    </div>
    <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-11 gap-4">
      {Object.entries(colors).map(([shade, value]) => (
        <ColorSwatch 
          key={shade} 
          name={shade} 
          value={value}
          isLight={parseInt(shade) >= 400 || shade === '0'}
        />
      ))}
    </div>
  </div>
);

const semanticColors = {
  'Background': {
    primary: '#FFFFFF',
    secondary: '#F8FAFC',
    tertiary: '#F1F5F9',
    inverse: '#0F172A',
    disabled: '#F1F5F9',
    brand: '#EFF6FF',
    success: '#ECFDF5',
    warning: '#FFFBEB',
    danger: '#FEF2F2',
    info: '#EFF6FF',
  },
  'Text': {
    primary: '#0F172A',
    secondary: '#475569',
    tertiary: '#64748B',
    disabled: '#94A3B8',
    inverse: '#FFFFFF',
    brand: '#2563EB',
    success: '#047857',
    warning: '#92400E',
    danger: '#DC2626',
    info: '#2563EB',
    link: '#2563EB',
    linkHover: '#1D4ED8',
  },
  'Border': {
    default: '#E2E8F0',
    muted: '#F1F5F9',
    strong: '#CBD5E1',
    disabled: '#E2E8F0',
    focus: '#3B82F6',
    brand: '#2563EB',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    info: '#3B82F6',
  },
  'Interactive': {
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    primaryActive: '#1E40AF',
    primaryDisabled: '#BFDBFE',
    secondary: '#F1F5F9',
    secondaryHover: '#E2E8F0',
    secondaryActive: '#CBD5E1',
    secondaryDisabled: '#F8FAFC',
    destructive: '#DC2626',
    destructiveHover: '#B91C1C',
    destructiveActive: '#991B1B',
    destructiveDisabled: '#FECACA',
  },
};

const ColorsShowcase = () => {
  return (
    <div className="p-8">
      {/* Core Palettes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-foreground-primary">Core Palettes</h2>
        
        <ColorPalette 
          name="Primary" 
          colors={primaryColors}
          description="Brand blue - used for primary actions, links, and key UI elements"
        />
        
        <ColorPalette 
          name="Secondary" 
          colors={secondaryColors}
          description="Neutral slate - used for text, borders, and backgrounds"
        />
        
        <ColorPalette 
          name="Accent" 
          colors={accentColors}
          description="Brand amber - used for highlights, badges, and emphasis"
        />
      </section>

      {/* Status Palettes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-foreground-primary">Status Palettes</h2>
        
        <ColorPalette 
          name="Success" 
          colors={successColors}
          description="Positive feedback - success messages, completed states"
        />
        
        <ColorPalette 
          name="Warning" 
          colors={warningColors}
          description="Caution - attention needed, pending states"
        />
        
        <ColorPalette 
          name="Danger" 
          colors={dangerColors}
          description="Errors - destructive actions, error messages"
        />
      </section>

      {/* Neutral Palette */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-foreground-primary">Neutral Palette</h2>
        
        <ColorPalette 
          name="Gray" 
          colors={neutralColors}
          description="Base neutrals for backgrounds, borders, and muted elements"
        />
      </section>

      {/* Semantic Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-foreground-primary">Semantic Colors</h2>
        
        <div className="space-y-12">
          {Object.entries(semanticColors).map(([category, colors]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-foreground-primary">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Object.entries(colors).map(([name, value]) => (
                  <div key={name} className="flex items-center gap-3 p-3 bg-surface-secondary rounded-lg border border-border">
                    <div 
                      className="w-10 h-10 rounded-md border border-black/10 flex-shrink-0"
                      style={{ backgroundColor: value }}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground-primary truncate">{name}</p>
                      <p className="text-xs text-foreground-tertiary font-mono">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-foreground-primary">Usage Examples</h2>
        
        <div className="space-y-8">
          {/* Buttons */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground-primary">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2.5 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors">
                Primary
              </button>
              <button className="px-6 py-2.5 bg-secondary-100 text-foreground-primary rounded-md font-medium hover:bg-secondary-200 transition-colors">
                Secondary
              </button>
              <button className="px-6 py-2.5 bg-danger-600 text-white rounded-md font-medium hover:bg-danger-700 transition-colors">
                Destructive
              </button>
              <button className="px-6 py-2.5 border border-border text-foreground-primary rounded-md font-medium hover:bg-surface-hover transition-colors">
                Outline
              </button>
              <button className="px-6 py-2.5 text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Ghost
              </button>
            </div>
          </div>

          {/* Alerts */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground-primary">Alerts</h3>
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-3 p-4 bg-success-50 border border-success-200 rounded-lg">
                <svg className="w-5 h-5 text-success-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-success-700">Sua mudança foi agendada com sucesso!</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-warning-50 border border-warning-200 rounded-lg">
                <svg className="w-5 h-5 text-warning-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-sm text-warning-700">Atenção: o frete pode sofrer alteração conforme a distância.</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-danger-50 border border-danger-200 rounded-lg">
                <svg className="w-5 h-5 text-danger-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-danger-700">Erro ao processar pagamento. Tente novamente.</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-info-50 border border-info-200 rounded-lg">
                <svg className="w-5 h-5 text-info-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-info-700">Você ganhou 10% de desconto na sua primeira mudança!</p>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground-primary">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                Novo
              </span>
              <span className="px-3 py-1 bg-success-100 text-success-700 text-sm font-medium rounded-full">
                Aprovado
              </span>
              <span className="px-3 py-1 bg-warning-100 text-warning-700 text-sm font-medium rounded-full">
                Pendente
              </span>
              <span className="px-3 py-1 bg-danger-100 text-danger-700 text-sm font-medium rounded-full">
                Cancelado
              </span>
              <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-medium rounded-full">
                Rascunho
              </span>
            </div>
          </div>

          {/* Form States */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground-primary">Form States</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
              <div>
                <label className="block text-sm font-medium text-foreground-primary mb-2">Default</label>
                <input 
                  type="text" 
                  placeholder="Digite seu nome"
                  className="w-full h-10 px-3 border border-border rounded-md focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-primary mb-2">Filled</label>
                <input 
                  type="text" 
                  defaultValue="Marcelo Ducatti"
                  className="w-full h-10 px-3 border border-border rounded-md focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-primary mb-2">Error</label>
                <input 
                  type="text" 
                  defaultValue="email invalido"
                  className="w-full h-10 px-3 border border-danger-500 rounded-md focus:border-danger-500 focus:ring-2 focus:ring-danger-500/20 outline-none transition-all"
                />
                <p className="text-xs text-danger-600 mt-1">Por favor, insira um e-mail válido</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-primary mb-2">Success</label>
                <input 
                  type="text" 
                  defaultValue="mudafacil@email.com"
                  className="w-full h-10 px-3 border border-success-500 rounded-md focus:border-success-500 focus:ring-2 focus:ring-success-500/20 outline-none transition-all"
                />
                <p className="text-xs text-success-600 mt-1">E-mail disponível</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-primary mb-2">Disabled</label>
                <input 
                  type="text" 
                  defaultValue="123.456.789-00"
                  disabled
                  className="w-full h-10 px-3 border border-border rounded-md bg-surface-disabled text-text-disabled cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof ColorsShowcase> = {
  title: "Design Tokens/Colors",
  component: ColorsShowcase,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {};
