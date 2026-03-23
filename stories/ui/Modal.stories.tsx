import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../../components/ui/modal";

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: 'Modal de Exemplo',
    children: 'Este é o conteúdo do modal.',
  },
};

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <Modal 
        isOpen={open} 
        onClose={() => setOpen(false)} 
        title="Confirmar ação"
        actions={
          <>
            <button onClick={() => setOpen(false)} style={{ padding: '8px 16px', marginRight: 8, background: '#E2E8F0', border: 'none', borderRadius: 4 }}>
              Cancelar
            </button>
            <button onClick={() => setOpen(false)} style={{ padding: '8px 16px', background: '#2563EB', color: '#fff', border: 'none', borderRadius: 4 }}>
              Confirmar
            </button>
          </>
        }
      >
        <p>Deseja confirmar esta ação?</p>
      </Modal>
    );
  }
};

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <Modal 
        isOpen={open} 
        onClose={() => setOpen(false)} 
        title="Excluir conta"
      >
        <p>Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.</p>
      </Modal>
    );
  }
};
