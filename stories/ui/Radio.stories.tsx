import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../../components/ui/radio";

const meta = {
  title: 'UI/Radio',
  component: Radio,
} as Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div style={{ display: 'inline-flex', gap: 12 }}>
      <Radio name="r1" id="r1a" label="Option A" />
      <Radio name="r1" id="r1b" label="Option B" defaultChecked />
    </div>
  ),
};
