import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItemData } from '../../components/ui/accordion';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'separated', 'filled'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    allowMultiple: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const faqItems: AccordionItemData[] = [
  {
    header: 'Como funciona o MudaFácil?',
    content: (
      <div className="space-y-2">
        <p>O MudaFácil é uma plataforma que conecta você com empresas de mudança qualificadas. O processo é simples:</p>
        <ol className="list-decimal list-inside space-y-1 text-secondary-600">
          <li>Cadastre-se e descreva sua mudança</li>
          <li>Receba orçamentos de empresas parceiras</li>
          <li>Compare preços e avaliações</li>
          <li>Escolha a melhor opção e agende</li>
        </ol>
      </div>
    ),
  },
  {
    header: 'Quais são os custos da mudança?',
    content: (
      <div className="space-y-2">
        <p>Os preços variam conforme:</p>
        <ul className="list-disc list-inside space-y-1 text-secondary-600">
          <li>Distância entre origem e destino</li>
          <li>Volume de itens a serem transportados</li>
          <li>Serviços adicionais (embalagem, montagem)</li>
          <li>Tipo de veículo necessário</li>
        </ul>
        <p className="mt-2 font-medium">Média de preços: R$ 150 - R$ 800</p>
      </div>
    ),
  },
  {
    header: 'Posso cancelar minha mudança?',
    content: (
      <p className="text-secondary-600">
        Sim! Você pode cancelar gratuitamente até 24 horas antes da data agendada. 
        Cancelamentos com menos de 24h podem estar sujeitos a uma taxa de 20% do valor combinado.
      </p>
    ),
  },
  {
    header: 'Como são verificadas as empresas parceiras?',
    content: (
      <div className="space-y-2">
        <p>Todas as empresas passam por um rigoroso processo de verificação:</p>
        <ul className="list-disc list-inside space-y-1 text-secondary-600">
          <li>Verificação de CNPJ e documentação</li>
          <li>Análise de seguro e responsabilidade civil</li>
          <li>Avaliação de frota e equipamentos</li>
          <li>Verificação de reclamações no Procon</li>
          <li>Avaliações reais de clientes anteriores</li>
        </ul>
      </div>
    ),
  },
];

const simpleItems: AccordionItemData[] = [
  { header: 'Seção 1', content: 'Conteúdo da seção 1' },
  { header: 'Seção 2', content: 'Conteúdo da seção 2' },
  { header: 'Seção 3', content: 'Conteúdo da seção 3' },
];

export const Default: Story = {
  args: {
    items: faqItems,
  },
};

export const Bordered: Story = {
  args: {
    items: faqItems,
    variant: 'bordered',
  },
};

export const Separated: Story = {
  args: {
    items: faqItems,
    variant: 'separated',
  },
};

export const Filled: Story = {
  args: {
    items: faqItems,
    variant: 'filled',
  },
};

export const Small: Story = {
  args: {
    items: simpleItems,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    items: faqItems,
    size: 'lg',
  },
};

export const WithDisabled: Story = {
  render: () => (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary-900 mb-6">Accordion com Itens Desabilitados</h1>
        
        <Accordion 
          variant="bordered"
          items={[
            {
              header: 'Seção disponível',
              content: 'Esta seção pode ser expandida normalmente.',
            },
            {
              header: 'Seção indisponível (desabilitada)',
              content: 'Você não pode expandir esta seção.',
              disabled: true,
            },
            {
              header: 'Outra seção disponível',
              content: 'Esta também funciona normalmente.',
            },
            {
              header: 'Seção em manutenção',
              content: 'Conteúdo temporariamente indisponível.',
              disabled: true,
            },
            {
              header: 'Seção final',
              content: 'Conteúdo da última seção.',
            },
          ]}
        />
        
        <div className="mt-6 p-4 bg-warning-50 border border-warning-200 rounded-lg">
          <p className="text-sm text-warning-700">
            <strong>Nota:</strong> Itens desabilitados são exibidos com opacidade reduzida e não podem ser expandidos.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary-900 mb-6">Accordion com Ícones</h1>
        
        <Accordion 
          variant="bordered"
          items={[
            {
              header: 'Minha Conta',
              content: 'Gerencie suas informações pessoais, senha e preferências de conta.',
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              ),
            },
            {
              header: 'Notificações',
              content: 'Configure como e quando você quer receber notificações sobre suas mudanças.',
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              ),
            },
            {
              header: 'Pagamentos',
              content: 'Gerencie seus métodos de pagamento e visualize histórico de transações.',
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              ),
            },
            {
              header: 'Segurança',
              content: 'Alterar senha, ativar autenticação de dois fatores e gerenciar sessões ativas.',
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              disabled: true,
            },
            {
              header: 'Ajuda',
              content: 'Central de ajuda, FAQ e como entrar em contato com o suporte.',
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ]}
        />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-2xl font-bold text-secondary-900 mb-8">Accordion Variants</h1>
        
        {/* Default */}
        <section>
          <h2 className="text-lg font-semibold text-secondary-700 mb-4">Default</h2>
          <Accordion variant="default" items={simpleItems} />
        </section>

        {/* Bordered */}
        <section>
          <h2 className="text-lg font-semibold text-secondary-700 mb-4">Bordered</h2>
          <Accordion variant="bordered" items={simpleItems} />
        </section>

        {/* Separated */}
        <section>
          <h2 className="text-lg font-semibold text-secondary-700 mb-4">Separated</h2>
          <Accordion variant="separated" items={simpleItems} />
        </section>

        {/* Filled */}
        <section>
          <h2 className="text-lg font-semibold text-secondary-700 mb-4">Filled</h2>
          <Accordion variant="filled" items={simpleItems} />
        </section>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="min-h-screen bg-secondary-50 P-8">
      <div className="max-w-2xl mx-auto space-y-12">
        <h1 className="text-2xl font-bold text-secondary-900 mb-8">Accordion Sizes</h1>
        
        {/* Small */}
        <section>
          <h2 className="text-lg font-semibold text-secondary-700 mb-4">Small</h2>
          <Accordion variant="bordered" size="sm" items={simpleItems} />
        </section>

        {/* Medium */}
        <section>
          <h2 className="text-lg font-semibold text-secondary-700 mb-4">Medium (Default)</h2>
          <Accordion variant="bordered" size="md" items={simpleItems} />
        </section>

        {/* Large */}
        <section>
          <h2 className="text-lg font-semibold text-secondary-700 mb-4">Large</h2>
          <Accordion variant="bordered" size="lg" items={simpleItems} />
        </section>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);
    
    return (
      <div className="min-h-screen bg-secondary-50 p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-secondary-900 mb-8">Accordion States</h1>
          
          <div className="space-y-8">
            {/* Interactive demo */}
            <section>
              <h2 className="text-lg font-semibold text-secondary-700 mb-4">Interactive Demo</h2>
              <Accordion 
                variant="bordered"
                items={[
                  { header: 'Item Padrão (fechado)', content: 'Clique para expandir este item.' },
                  { header: 'Item Padrão (aberto)', content: 'Este item começa aberto por padrão.', defaultOpen: true },
                  { header: 'Item Desabilitado', content: 'Este item não pode ser expandido.', disabled: true },
                ]}
              />
            </section>

            {/* States reference */}
            <section>
              <h2 className="text-lg font-semibold text-secondary-700 mb-4">States Reference</h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-secondary-200">
                  <p className="text-sm font-medium text-secondary-900 mb-2">Normal State</p>
                  <p className="text-xs text-secondary-600">Hover: lighter background | Click: expand/collapse with animation</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-2 border-primary-500 ring-2 ring-primary-500/20">
                  <p className="text-sm font-medium text-secondary-900 mb-2">Focus State</p>
                  <p className="text-xs text-secondary-600">Blue focus ring for keyboard accessibility</p>
                </div>
                <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200 opacity-60">
                  <p className="text-sm font-medium text-secondary-400 mb-2">Disabled State</p>
                  <p className="text-xs text-secondary-400">Grayed out, cursor: not-allowed, no interaction</p>
                </div>
              </div>
            </section>

            {/* Keyboard navigation info */}
            <section>
              <h2 className="text-lg font-semibold text-secondary-700 mb-4">Keyboard Navigation</h2>
              <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                <ul className="text-sm text-primary-700 space-y-2">
                  <li><kbd className="px-2 py-1 bg-white rounded border border-primary-200 text-xs">Enter</kbd> ou <kbd className="px-2 py-1 bg-white rounded border border-primary-200 text-xs">Space</kbd> - Expandir/colapsar item</li>
                  <li><kbd className="px-2 py-1 bg-white rounded border border-primary-200 text-xs">Tab</kbd> - Navegar entre itens</li>
                  <li><kbd className="px-2 py-1 bg-white rounded border border-primary-200 text-xs">Shift</kbd> + <kbd className="px-2 py-1 bg-white rounded border border-primary-200 text-xs">Tab</kbd> - Navegar backwards</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  },
};

export const Single: Story = {
  args: {
    items: [
      { header: 'Pergunta Frequente', content: 'Esta é a resposta da pergunta frequente.' },
    ],
  },
};

export const Multiple: Story = {
  args: {
    items: [
      { header: 'Como funciona?', content: 'O MudaFácil conecta você com empresas de mudança.' },
      { header: 'Quanto custa?', content: 'Os preços variam conforme a distância e volume.' },
      { header: 'Posso cancelar?', content: 'Sim, você pode cancelar até 24h antes.' },
    ],
    allowMultiple: true,
  },
};
