import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../components/ui/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'cb1',
    label: 'Opção 1',
  },
};

export const Checked: Story = {
  args: {
    id: 'cb2',
    label: 'Opção marcada',
    defaultChecked: true,
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox id="cb-a" label="Item A" />
      <Checkbox id="cb-b" label="Item B" defaultChecked />
      <Checkbox id="cb-c" label="Item C" />
    </div>
  ),
};
