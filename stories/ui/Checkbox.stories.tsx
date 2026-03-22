import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../components/ui/checkbox";

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div style={{ display: 'inline-flex', gap: 12 }}>
      <Checkbox id="cb1" label="Option 1" />
      <Checkbox id="cb2" label="Option 2" defaultChecked />
    </div>
  ),
};
