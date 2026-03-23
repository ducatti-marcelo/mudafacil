import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../../components/ui/radio";

const meta: Meta<typeof Radio> = {
  title: 'UI/Radio',
  component: Radio,
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
    name: 'radio-group',
    id: 'r1',
    value: 'option1',
    label: 'Opção 1',
  },
};

export const Selected: Story = {
  args: {
    name: 'radio-group',
    id: 'r2',
    value: 'option2',
    label: 'Opção selecionada',
    defaultChecked: true,
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Radio name="payment" id="pix" label="PIX" value="pix" defaultChecked />
      <Radio name="payment" id="card" label="Cartão de crédito" value="card" />
      <Radio name="payment" id="boleto" label="Boleto" value="boleto" />
    </div>
  ),
};
