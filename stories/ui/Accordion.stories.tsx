import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../../components/ui/accordion";

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { header: 'Seção 1', content: React.createElement('div', null, 'Conteúdo da seção 1') },
      { header: 'Seção 2', content: React.createElement('div', null, 'Conteúdo da seção 2') },
    ],
  },
};

export const Single: Story = {
  args: {
    items: [
      { header: 'Pergunta Frequente', content: React.createElement('div', null, 'Esta é a resposta da pergunta frequente.') },
    ],
  },
};

export const Multiple: Story = {
  args: {
    items: [
      { header: 'Como funciona?', content: React.createElement('div', null, 'O MudaFácil conecta você com empresas de mudança.') },
      { header: 'Quanto custa?', content: React.createElement('div', null, 'Os preços variam根据 a distância e volume.') },
      { header: 'Posso cancelar?', content: React.createElement('div', null, 'Sim, você pode cancelar até 24h antes.') },
    ],
  },
};
