import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "../../components/ui/dropdown";

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { label: 'Perfil', onClick: () => console.log('Perfil clicked') },
  { label: 'Configurações', onClick: () => console.log('Config clicked') },
  { label: 'Sair', onClick: () => console.log('Sair clicked') },
];

export const Default: Story = {
  args: {
    label: 'Opções',
    items: defaultItems,
  },
};

export const Conta: Story = {
  args: {
    label: 'Minha Conta',
    items: [
      { label: 'Ver perfil', onClick: () => {} },
      { label: 'Editar dados', onClick: () => {} },
      { label: 'Meus orçamentos', onClick: () => {} },
      { label: 'Sair', onClick: () => {} },
    ],
  },
};
