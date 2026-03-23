import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from '../../components/ui/dropdown';
import { Button } from '../../components/ui/button';

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { label: 'Ver perfil', onClick: () => console.log('Perfil clicked') },
  { label: 'Editar dados', onClick: () => console.log('Editar clicked') },
  { label: 'Configurações', onClick: () => console.log('Config clicked') },
  { label: 'Sair', onClick: () => console.log('Sair clicked') },
];

const accountItems = [
  { label: 'Minha Conta', onClick: () => {} },
  { label: 'Meus Orçamentos', onClick: () => {} },
  { label: 'Histórico', onClick: () => {} },
  { label: 'Favoritos', onClick: () => {} },
  { label: 'Configurações', onClick: () => {} },
  { label: 'Ajuda', onClick: () => {} },
];

const destructiveItems = [
  { label: 'Ver perfil', onClick: () => {} },
  { label: 'Editar dados', onClick: () => {} },
  { label: 'Sair', onClick: () => {} },
  { label: 'Excluir conta', onClick: () => {}, destructive: true },
];

// Demo wrapper
const DropdownDemo = ({ children, align = 'left' }: { children: React.ReactNode; align?: 'left' | 'right' }) => {
  return (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900 mb-2">Página de Exemplo</h1>
            <p className="text-secondary-600">
              Clique nos botões abaixo para ver os dropdowns em ação.
            </p>
          </div>
          {align === 'right' && children}
        </div>
        
        {align === 'left' && children}
        
        <div className="mt-12 p-6 bg-white rounded-xl border border-secondary-200">
          <h2 className="text-lg font-semibold text-secondary-900 mb-4">Conteúdo da Página</h2>
          <p className="text-secondary-600 mb-4">
            Este é um exemplo de como os dropdowns se comportam dentro de uma página real.
            Os menus são posicionados corretamente e não são cortados pelos containers.
          </p>
          <p className="text-secondary-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <DropdownDemo>
      <Dropdown label="Opções" items={defaultItems} />
    </DropdownDemo>
  ),
};

export const Account: Story = {
  render: () => (
    <DropdownDemo>
      <Dropdown label="Minha Conta" items={accountItems} />
    </DropdownDemo>
  ),
};

export const Destructive: Story = {
  render: () => (
    <DropdownDemo>
      <Dropdown label="Ações" items={destructiveItems} />
    </DropdownDemo>
  ),
};

export const AlignRight: Story = {
  render: () => (
    <DropdownDemo align="right">
      <Dropdown label="Menu" items={defaultItems} align="right" />
    </DropdownDemo>
  ),
};

export const WithButtons: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
    
    const items = [
      { label: 'PIX', onClick: () => setSelectedItem('PIX') },
      { label: 'Cartão de Crédito', onClick: () => setSelectedItem('Cartão de Crédito') },
      { label: 'Boleto', onClick: () => setSelectedItem('Boleto') },
      { label: 'Transferência', onClick: () => setSelectedItem('Transferência') },
    ];
    
    return (
      <div className="min-h-screen bg-secondary-50 p-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-secondary-900 mb-6">Escolha o Pagamento</h1>
          
          <div className="p-6 bg-white rounded-xl border border-secondary-200">
            <p className="text-secondary-600 mb-4">Selecione a forma de pagamento:</p>
            
            <Dropdown label={selectedItem || "Selecionar..."} items={items} />
            
            {selectedItem && (
              <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-700">
                  <strong>Selecionado:</strong> {selectedItem}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
};

export const InNavbar: Story = {
  render: () => (
    <div className="min-h-screen bg-white">
      {/* Fake navbar */}
      <nav className="h-16 border-b border-secondary-200 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="font-bold text-secondary-900">MudaFácil</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-secondary-600">Notificações</span>
          <Dropdown 
            label="Marcelo Ducatti" 
            items={[
              { label: 'Meu Perfil', onClick: () => {} },
              { label: 'Configurações', onClick: () => {} },
              { label: 'Sair', onClick: () => {} },
            ]}
            align="right"
          />
        </div>
      </nav>
      
      {/* Page content */}
      <div className="p-8">
        <h2 className="text-xl font-semibold text-secondary-900">Dashboard</h2>
        <p className="text-secondary-600 mt-2">
          O dropdown no canto superior direito funciona perfeitamente, sem cortes.
        </p>
      </div>
    </div>
  ),
};
