import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";

const fontFamily = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace',
};

const fontSizes = [
  { name: '2xs', value: '0.625rem', px: '10px' },
  { name: 'xs', value: '0.75rem', px: '12px' },
  { name: 'sm', value: '0.875rem', px: '14px' },
  { name: 'base', value: '1rem', px: '16px' },
  { name: 'lg', value: '1.125rem', px: '18px' },
  { name: 'xl', value: '1.25rem', px: '20px' },
  { name: '2xl', value: '1.5rem', px: '24px' },
  { name: '3xl', value: '1.875rem', px: '30px' },
  { name: '4xl', value: '2.25rem', px: '36px' },
  { name: '5xl', value: '3rem', px: '48px' },
  { name: '6xl', value: '3.75rem', px: '60px' },
];

const fontWeights = [
  { name: 'Light', value: 300 },
  { name: 'Normal', value: 400 },
  { name: 'Medium', value: 500 },
  { name: 'Semibold', value: 600 },
  { name: 'Bold', value: 700 },
  { name: 'Extrabold', value: 800 },
];

const TypographyShowcase = () => {
  return (
    <div className="p-8 space-y-12">
      {/* Section: Font Family */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground-primary">Font Families</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-surface-secondary rounded-lg border border-border">
            <p className="text-sm font-medium text-foreground-secondary mb-2">Sans (Default)</p>
            <p className="text-2xl" style={{ fontFamily: fontFamily.sans }}>
              MudaFácil - Mudança sem complicação
            </p>
            <p className="text-sm text-foreground-tertiary mt-2 font-mono text-xs">
              {fontFamily.sans}
            </p>
          </div>
          <div className="p-6 bg-surface-secondary rounded-lg border border-border">
            <p className="text-sm font-medium text-foreground-secondary mb-2">Mono</p>
            <p className="text-2xl" style={{ fontFamily: fontFamily.mono }}>
              const mudanca = true;
            </p>
            <p className="text-sm text-foreground-tertiary mt-2 font-mono text-xs">
              {fontFamily.mono}
            </p>
          </div>
        </div>
      </section>

      {/* Section: Font Sizes */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground-primary">Font Sizes</h2>
        <div className="bg-surface-secondary rounded-lg border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-hover">
                <th className="text-left p-4 text-sm font-medium text-foreground-secondary">Token</th>
                <th className="text-left p-4 text-sm font-medium text-foreground-secondary">Value</th>
                <th className="text-left p-4 text-sm font-medium text-foreground-secondary">Preview</th>
              </tr>
            </thead>
            <tbody>
              {fontSizes.map((size) => (
                <tr key={size.name} className="border-t border-border">
                  <td className="p-4">
                    <code className="text-xs bg-surface-hover px-2 py-1 rounded">text-{size.name}</code>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    {size.value} ({size.px})
                  </td>
                  <td className="p-4">
                    <span style={{ fontSize: size.value }}>
                      MudaFácil
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: Font Weights */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground-primary">Font Weights</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {fontWeights.map((weight) => (
            <div key={weight.name} className="p-4 bg-surface-secondary rounded-lg border border-border text-center">
              <span className="text-lg" style={{ fontWeight: weight.value }}>
                Aa
              </span>
              <p className="text-xs text-foreground-tertiary mt-2">{weight.name}</p>
              <code className="text-xs text-foreground-secondary">{weight.value}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Headings */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground-primary">Headings</h2>
        <div className="bg-surface-secondary rounded-lg border border-border p-6 space-y-4">
          <div className="flex items-baseline gap-4">
            <code className="text-xs text-foreground-tertiary w-20">H1</code>
            <h1 className="text-5xl font-bold text-foreground-primary">Heading 1</h1>
          </div>
          <div className="flex items-baseline gap-4">
            <code className="text-xs text-foreground-tertiary w-20">H2</code>
            <h2 className="text-4xl font-bold text-foreground-primary">Heading 2</h2>
          </div>
          <div className="flex items-baseline gap-4">
            <code className="text-xs text-foreground-tertiary w-20">H3</code>
            <h3 className="text-3xl font-semibold text-foreground-primary">Heading 3</h3>
          </div>
          <div className="flex items-baseline gap-4">
            <code className="text-xs text-foreground-tertiary w-20">H4</code>
            <h4 className="text-2xl font-semibold text-foreground-primary">Heading 4</h4>
          </div>
          <div className="flex items-baseline gap-4">
            <code className="text-xs text-foreground-tertiary w-20">H5</code>
            <h5 className="text-xl font-semibold text-foreground-primary">Heading 5</h5>
          </div>
          <div className="flex items-baseline gap-4">
            <code className="text-xs text-foreground-tertiary w-20">H6</code>
            <h6 className="text-lg font-semibold text-foreground-primary">Heading 6</h6>
          </div>
        </div>
      </section>

      {/* Section: Body Text */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground-primary">Body Text</h2>
        <div className="bg-surface-secondary rounded-lg border border-border p-6 space-y-6">
          <div>
            <code className="text-xs text-foreground-tertiary">body.large</code>
            <p className="text-lg text-foreground-primary mt-2">
              O MudaFácil conecta você com as melhores empresas de mudança. 
              Comparar orçamentos nunca foi tão fácil.
            </p>
          </div>
          <div>
            <code className="text-xs text-foreground-tertiary">body.base</code>
            <p className="text-base text-foreground-primary mt-2">
              Encontre profissionais qualificados para sua mudança. 
              Avaliações reais de clientes reais.
            </p>
          </div>
          <div>
            <code className="text-xs text-foreground-tertiary">body.small</code>
            <p className="text-sm text-foreground-secondary mt-2">
              Termos e condições aplicáveis. Sujeito a disponibilidade do serviço.
            </p>
          </div>
          <div>
            <code className="text-xs text-foreground-tertiary">body.xs (Caption)</code>
            <p className="text-xs text-foreground-tertiary mt-2">
              Última atualização: 23 de Março, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Section: Line Heights */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground-primary">Line Heights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'None', value: 1 },
            { name: 'Tight', value: 1.25 },
            { name: 'Snug', value: 1.375 },
            { name: 'Normal', value: 1.5 },
            { name: 'Relaxed', value: 1.625 },
            { name: 'Loose', value: 2 },
          ].map((lh) => (
            <div key={lh.name} className="p-4 bg-surface-secondary rounded-lg border border-border">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{lh.name}</span>
                <code className="text-xs text-foreground-tertiary">{lh.value}</code>
              </div>
              <p style={{ lineHeight: lh.value }} className="text-sm">
                O MudaFácil é a plataforma que conecta você com empresas de mudança de forma simples e rápida.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Letter Spacing */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground-primary">Letter Spacing</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Tighter', value: '-0.05em' },
            { name: 'Tight', value: '-0.025em' },
            { name: 'Normal', value: '0em' },
            { name: 'Wide', value: '0.025em' },
            { name: 'Wider', value: '0.05em' },
            { name: 'Widest', value: '0.1em' },
          ].map((ls) => (
            <div key={ls.name} className="p-4 bg-surface-secondary rounded-lg border border-border text-center">
              <span className="text-xl font-medium" style={{ letterSpacing: ls.value }}>
                Muda
              </span>
              <p className="text-xs text-foreground-tertiary mt-2">{ls.name}</p>
              <code className="text-xs text-foreground-secondary">{ls.value}</code>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof TypographyShowcase> = {
  title: "Design Tokens/Typography",
  component: TypographyShowcase,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTypography: Story = {};
