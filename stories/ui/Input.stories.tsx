import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from '../../components/ui/input';

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="max-w-md mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-secondary-900">Input States</h1>
        
        <div className="space-y-6">
          <Input placeholder="Placeholder - digite algo..." label="Default" />
          <Input defaultValue="Valor preenchido" label="Filled" />
          <Input placeholder="Campo desabilitado" label="Disabled" disabled />
        </div>
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="max-w-md mx-auto space-y-6">
        <Input 
          label="E-mail" 
          type="email" 
          placeholder="seu@email.com"
          hint="Usaremos este e-mail para enviar atualizações"
        />
        <Input 
          label="Senha" 
          type="password" 
          placeholder="••••••••"
          hint="Mínimo 8 caracteres"
        />
      </div>
    </div>
  ),
};

export const Validation: Story = {
  render: () => (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="max-w-md mx-auto space-y-6">
        <Input 
          label="E-mail" 
          type="email" 
          defaultValue="email@invalido"
          error="Por favor, insira um e-mail válido"
        />
        <Input 
          label="E-mail verificado" 
          type="email" 
          defaultValue="usuario@mudafacil.com.br"
          hint="✓ E-mail disponível"
        />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary-900 mb-8">Input Component States</h1>
        
        <div className="space-y-8">
          {/* States grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-700">Empty</label>
              <input 
                type="text" 
                placeholder="Digite algo..."
                className="w-full h-10 px-3 border border-secondary-300 rounded-lg hover:border-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-700">Hover</label>
              <input 
                type="text" 
                defaultValue="Passe o mouse aqui"
                className="w-full h-10 px-3 border border-secondary-300 rounded-lg hover:border-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-700">Focus</label>
              <input 
                type="text" 
                defaultValue="Clique aqui"
                className="w-full h-10 px-3 border-2 border-primary-500 rounded-lg ring-2 ring-primary-500/20"
                autoFocus
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-700">Filled</label>
              <input 
                type="text" 
                defaultValue="Texto preenchido"
                className="w-full h-10 px-3 border border-secondary-300 rounded-lg hover:border-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-700">Error</label>
              <input 
                type="text" 
                defaultValue="valor inválido"
                className="w-full h-10 px-3 border-2 border-danger-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-danger-500/20"
              />
              <p className="text-xs text-danger-600">Campo obrigatório</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-700">Success</label>
              <input 
                type="text" 
                defaultValue="valor@valido.com"
                className="w-full h-10 px-3 border-2 border-success-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-success-500/20"
              />
              <p className="text-xs text-success-600">✓ Válido</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-700">Disabled</label>
              <input 
                type="text" 
                defaultValue="Campo desabilitado"
                disabled
                className="w-full h-10 px-3 border border-secondary-200 rounded-lg bg-secondary-50 text-secondary-400 cursor-not-allowed"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-700">Readonly</label>
              <input 
                type="text" 
                defaultValue="Somente leitura"
                readOnly
                className="w-full h-10 px-3 border border-secondary-200 rounded-lg bg-secondary-50 text-secondary-700"
              />
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h2 className="text-lg font-semibold text-secondary-900 mb-4">Sizes</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-secondary-700 mb-1.5 block">Small</label>
                <input 
                  type="text" 
                  placeholder="Small input"
                  className="w-full h-8 px-3 text-sm border border-secondary-300 rounded-md hover:border-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-secondary-700 mb-1.5 block">Medium (Default)</label>
                <input 
                  type="text" 
                  placeholder="Medium input"
                  className="w-full h-10 px-3 text-sm border border-secondary-300 rounded-lg hover:border-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-secondary-700 mb-1.5 block">Large</label>
                <input 
                  type="text" 
                  placeholder="Large input"
                  className="w-full h-12 px-4 text-base border border-secondary-300 rounded-lg hover:border-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const InteractiveDemo: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const [focused, setFocused] = React.useState(false);
    
    return (
      <div className="min-h-screen bg-secondary-50 p-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-secondary-900 mb-6">Interactive Demo</h1>
          
          <div className="space-y-4">
            <Input 
              label="Digite seu nome"
              placeholder="Nome completo"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            
            {value && (
              <div className="p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-700">
                  Olá, <strong>{value}</strong>! 👋
                </p>
              </div>
            )}
          </div>
          
          <div className="mt-8 p-4 bg-white rounded-lg border border-secondary-200">
            <h3 className="font-medium text-secondary-900 mb-2">Status:</h3>
            <ul className="text-sm text-secondary-600 space-y-1">
              <li>Valor: {value || '(vazio)'}</li>
              <li>Comprimento: {value.length}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
};
