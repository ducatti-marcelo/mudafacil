import type { Meta, StoryObj } from "@storybook/react";

const colors = {
  primary: "#2563EB",
  "primary-foreground": "#FFFFFF",
  background: "#F8FAFC",
  foreground: "#0F172A",
  accent: "#F59E0B",
  "accent-foreground": "#FFFFFF",
  muted: "#F1F5F9",
  "muted-foreground": "#64748B",
  border: "#E2E8F0",
  destructive: "#EF4444",
  "destructive-foreground": "#FFFFFF",
};

const ColorGrid = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Design Tokens - Cores MudaFácil</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(colors).map(([name, value]) => (
          <div key={name} className="space-y-2">
            <div
              className="h-20 rounded-lg border border-gray-200"
              style={{ backgroundColor: value }}
            />
            <div>
              <p className="font-medium text-sm">{name}</p>
              <p className="text-xs text-gray-500 font-mono">{value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Uso no Tailwind</h3>
        <div className="space-y-2 font-mono text-sm bg-gray-100 p-4 rounded-lg">
          <p>bg-[#2563EB] → <span className="text-[#2563EB] font-bold">Primária (Azul)</span></p>
          <p>bg-[#F59E0B] → <span className="text-[#F59E0B] font-bold">Acento (Amarelo)</span></p>
          <p>bg-[#F8FAFC] → Fundo (Cinza claro)</p>
          <p>text-[#0F172A] → Texto principal</p>
          <p>text-[#64748B] → Texto secundário</p>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof ColorGrid> = {
  title: "Design Tokens/Colors",
  component: ColorGrid,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {};
