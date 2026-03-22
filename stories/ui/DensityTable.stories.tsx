import type { Meta, StoryObj } from "@storybook/react";
import { DensityTable } from "../../components/ui/density-table";

const meta = {
  title: 'UI/DensityTable',
  component: DensityTable,
} as Meta<typeof DensityTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Compact: Story = {
  args: {
    density: 'compact',
    rows: [ { id:'r1', a:'A', b:'B' }, { id:'r2', a:'C', b:'D' } ]
  }
};

export const Cozy: Story = {
  args: {
    density: 'cozy',
    rows: [ { id:'r1', a:'1', b:'2' }, { id:'r2', a:'3', b:'4' } ]
  }
};

export const Comfortable: Story = {
  args: {
    density: 'comfortable',
    rows: [ { id:'r1', a:'X', b:'Y' }, { id:'r2', a:'Z', b:'W' } ]
  }
};
