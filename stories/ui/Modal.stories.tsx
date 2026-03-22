import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../../components/ui/modal";
import React from 'react';

const meta = {
  title: 'UI/Modal',
  component: Modal,
} as Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <Modal isOpen={open} onClose={()=>setOpen(false)} title="Exemplo de Modal">
        <div>Conteúdo do modal de demonstração.</div>
        <div style={{ marginTop: 10 }}>
          <button onClick={()=>setOpen(false)} style={{ padding: '6px 12px' }}>Fechar</button>
        </div>
      </Modal>
    );
  }
};
