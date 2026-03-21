import type { Meta, StoryObj } from "@storybook/react";

const TestComponent = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#F8FAFC' }}>
      <h1 style={{ color: '#2563EB', fontSize: '24px', fontWeight: 'bold' }}>
        MudaFácil - Teste de Renderização
      </h1>
      <p style={{ color: '#64748B', marginTop: '10px' }}>
        Se você está vendo este texto, os componentes estão funcionando!
      </p>
      <button 
        style={{ 
          backgroundColor: '#2563EB', 
          color: 'white', 
          padding: '10px 20px', 
          borderRadius: '6px',
          border: 'none',
          marginTop: '20px',
          cursor: 'pointer'
        }}
      >
        Botão de Teste
      </button>
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        border: '1px solid #E2E8F0'
      }}>
        <p style={{ color: '#F59E0B', fontWeight: 'bold' }}>Cor de destaque: #F59E0B (Amarelo)</p>
      </div>
    </div>
  );
};

const meta: Meta<typeof TestComponent> = {
  title: "Test/Renderização",
  component: TestComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
