import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "../../design-system/tokens";

const ColorGrid = () => {
  const colorEntries = Object.entries(tokens.colors);
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Design Tokens - Cores</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {colorEntries.map(([key, value]) => (
          <div key={key} className="space-y-2">
            <div
              className="h-20 rounded-lg border"
              style={{ backgroundColor: value }}
            />
            <div>
              <p className="font-medium text-sm">{key}</p>
              <p className="text-xs text-gray-500">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const meta = {
  title: "Design Tokens/Colors",
  component: ColorGrid,
} satisfies Meta<typeof ColorGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {};