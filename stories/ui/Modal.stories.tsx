import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from '../../components/ui/modal';
import { Button } from '../../components/ui/button';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper to show modal in a realistic context
const ModalDemo = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary-900 mb-4">Página de Exemplo</h1>
        <p className="text-secondary-600 mb-6">
          Este é um exemplo de uma página com conteúdo. Clique no botão abaixo para abrir o modal.
        </p>
        <p className="text-secondary-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        {children}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <ModalDemo>
        <Button onClick={() => setOpen(true)}>Abrir Modal</Button>
        <Modal 
          isOpen={open} 
          onClose={() => setOpen(false)} 
          title="Modal de Exemplo"
        >
          <p>Este é o conteúdo do modal. Você pode fechar clicando fora, no X, ou pressionando ESC.</p>
        </Modal>
      </ModalDemo>
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <ModalDemo>
        <Button onClick={() => setOpen(true)}>Abrir Modal com Ações</Button>
        <Modal 
          isOpen={open} 
          onClose={() => setOpen(false)} 
          title="Confirmar ação"
          actions={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setOpen(false)}>
                Confirmar
              </Button>
            </>
          }
        >
          <p>Deseja confirmar esta ação? Ela não poderá ser desfeita.</p>
        </Modal>
      </ModalDemo>
    );
  },
};

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <ModalDemo>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Excluir Conta
        </Button>
        <Modal 
          isOpen={open} 
          onClose={() => setOpen(false)} 
          title="Excluir conta"
          actions={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
               Cancelar
              </Button>
              <Button variant="destructive" onClick={() => setOpen(false)}>
                Excluir permanentemente
              </Button>
            </>
          }
        >
          <p className="text-secondary-600">
            Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita e todos os seus dados serão perdidos.
          </p>
        </Modal>
      </ModalDemo>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = React.useState<'sm' | 'md' | 'lg' | 'xl'>('md');
    const [open, setOpen] = React.useState(false);
    
    return (
      <ModalDemo>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => { setSize('sm'); setOpen(true); }}>Small</Button>
          <Button variant="outline" onClick={() => { setSize('md'); setOpen(true); }}>Medium</Button>
          <Button variant="outline" onClick={() => { setSize('lg'); setOpen(true); }}>Large</Button>
          <Button variant="outline" onClick={() => { setSize('xl'); setOpen(true); }}>XLarge</Button>
        </div>
        <Modal 
          isOpen={open} 
          onClose={() => setOpen(false)} 
          title={`Modal ${size.toUpperCase()}`}
          size={size}
          actions={
            <Button onClick={() => setOpen(false)}>Fechar</Button>
          }
        >
          <p>Modal com tamanho {size}. Os modais se adaptam automaticamente ao tamanho da tela.</p>
        </Modal>
      </ModalDemo>
    );
  },
};

export const NoTitle: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <ModalDemo>
        <Button onClick={() => setOpen(true)}>Modal sem título</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Sucesso!</h3>
            <p className="text-secondary-600">Sua ação foi concluída com sucesso.</p>
            <Button className="mt-6" onClick={() => setOpen(false)}>
              Continuar
            </Button>
          </div>
        </Modal>
      </ModalDemo>
    );
  },
};
