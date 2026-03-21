import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "../../design-system/tokens";

const TypographyShowcase = () => {
  const fontSizes = Object.entries(tokens.typography.fontSize);
  const fontWeights = Object.entries(tokens.typography.fontWeight);
  
  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Design Tokens - Tipografia</h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Famílias de Fontes</h3>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-500">Sans</p>
              <p style={{ fontFamily: tokens.typography.fontFamily.sans }}>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Mono</p>
              <p style={{ fontFamily: tokens.typography.fontFamily.mono }}>
                const greeting = "Hello, World!";
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Tamanhos</h3>
          <div className="space-y-3">
            {fontSizes.map(([key, value]) => (
              <div key={key} className="flex items-center gap-4">
                <span className="w-20 text-sm text-gray-500">{key}</span>
                <span className="w-20 text-sm text-gray-500">{value}</span>
                <span style={{ fontSize: value }}>
                  MudaFácil - Monte sua mudança
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Pesos</h3>
          <div className="space-y-3">
            {fontWeights.map(([key, value]) => (
              <div key={key} className="flex items-center gap-4">
                <span className="w-20 text-sm text-gray-500">{key}</span>
                <span className="w-20 text-sm text-gray-500">{value}</span>
                <span style={{ fontWeight: value }}>
                  Arraste seus móveis e mude sem estresse
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: "Design Tokens/Typography",
  component: TypographyShowcase,
} satisfies Meta<typeof TypographyShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTypography: Story = {};