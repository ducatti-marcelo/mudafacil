import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from '../../components/ui/radio';

const meta: Meta<typeof Radio> = {
  title: 'UI/Radio',
  component: Radio,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  render: () => (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary-900 mb-8">Radio States</h1>
        
        <div className="space-y-8">
          {/* States showcase */}
          <section>
            <h2 className="text-lg font-semibold text-secondary-700 mb-4">States</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-white rounded-lg border border-secondary-200">
                <Radio name="demo" id="r1" label="Unchecked" />
                <p className="text-xs text-secondary-500 mt-4">Default</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-secondary-200">
                <Radio name="demo" id="r2" label="Selected" defaultChecked />
                <p className="text-xs text-secondary-500 mt-4">Selected</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-secondary-200">
                <Radio name="demo" id="r3" label="Hover" />
                <p className="text-xs text-secondary-500 mt-4">Hover over me</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border-2 border-primary-500 ring-2 ring-primary-500/20">
                <Radio name="demo" id="r4" label="Focus" />
                <p className="text-xs text-secondary-500 mt-4">Focus ring</p>
              </div>
              
              <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                <Radio name="demo" id="r5" label="Disabled" disabled />
                <p className="text-xs text-secondary-500 mt-4">Disabled unchecked</p>
              </div>
              
              <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                <Radio name="demo" id="r6" label="Disabled" disabled defaultChecked />
                <p className="text-xs text-secondary-500 mt-4">Disabled selected</p>
              </div>
            </div>
          </section>

          {/* Interactive examples */}
          <section>
            <h2 className="text-lg font-semibold text-secondary-700 mb-4">Interactive Examples</h2>
            <div className="space-y-6">
              {/* Payment method */}
              <div className="p-6 bg-white rounded-lg border border-secondary-200">
                <h3 className="font-medium text-secondary-900 mb-4">Forma de Pagamento</h3>
                <div className="space-y-3">
                  <Radio name="payment" id="pix" label="PIX - 5% desconto" defaultChecked />
                  <Radio name="payment" id="card" label="Cartão de crédito" />
                  <Radio name="payment" id="boleto" label="Boleto bancário" />
                  <Radio name="payment" id="transfer" label="Transferência bancária" />
                </div>
              </div>

              {/* Shipping option */}
              <div className="p-6 bg-white rounded-lg border border-secondary-200">
                <h3 className="font-medium text-secondary-900 mb-4">Tipo de Mudança</h3>
                <div className="space-y-3">
                  <Radio name="shipping" id="express" label="Expressa - 1 dia útil" defaultChecked />
                  <Radio name="shipping" id="standard" label="Padrão - 3 a 5 dias úteis" />
                  <Radio name="shipping" id="economy" label="Econômica - 7 a 10 dias úteis" />
                </div>
              </div>
            </div>
          </section>

          {/* Visual states table */}
          <section>
            <h2 className="text-lg font-semibold text-secondary-700 mb-4">Visual Reference</h2>
            <div className="bg-white rounded-lg border border-secondary-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary-50">
                    <th className="text-left p-4 text-sm font-medium text-secondary-700">State</th>
                    <th className="text-left p-4 text-sm font-medium text-secondary-700">Radio</th>
                    <th className="text-left p-4 text-sm font-medium text-secondary-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-secondary-200">
                    <td className="p-4 text-sm">Default</td>
                    <td className="p-4"><Radio name="ref" id="ref1" /></td>
                    <td className="p-4 text-sm text-secondary-600">Neutral border, empty center</td>
                  </tr>
                  <tr className="border-t border-secondary-200 bg-secondary-50">
                    <td className="p-4 text-sm">Hover</td>
                    <td className="p-4"><Radio name="ref" id="ref2" /></td>
                    <td className="p-4 text-sm text-secondary-600">Darker border on hover</td>
                  </tr>
                  <tr className="border-t border-secondary-200">
                    <td className="p-4 text-sm">Selected</td>
                    <td className="p-4"><Radio name="ref" id="ref3" defaultChecked /></td>
                    <td className="p-4 text-sm text-secondary-600">Blue border with filled center</td>
                  </tr>
                  <tr className="border-t border-secondary-200">
                    <td className="p-4 text-sm">Focus</td>
                    <td className="p-4"><Radio name="ref" id="ref4" /></td>
                    <td className="p-4 text-sm text-secondary-600">Focus ring for accessibility</td>
                  </tr>
                  <tr className="border-t border-secondary-200">
                    <td className="p-4 text-sm">Disabled</td>
                    <td className="p-4"><Radio name="ref" id="ref5" disabled /></td>
                    <td className="p-4 text-sm text-secondary-600">Grayed out, not interactive</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  ),
};

export const Default: Story = {
  args: {
    name: 'radio-group',
    id: 'r1',
    label: 'Opção 1',
  },
};

export const Selected: Story = {
  args: {
    name: 'radio-group',
    id: 'r2',
    label: 'Opção selecionada',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'radio-group',
    id: 'r3',
    label: 'Opção desabilitada',
    disabled: true,
  },
};

export const Group: Story = {
  render: () => (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-secondary-900 mb-6">Radio Group</h1>
        <div className="p-6 bg-white rounded-lg border border-secondary-200">
          <h3 className="font-medium text-secondary-900 mb-4">Selecione uma opção:</h3>
          <div className="space-y-4">
            <Radio name="payment" id="pix" label="PIX - 5% desconto" defaultChecked />
            <Radio name="payment" id="card" label="Cartão de crédito" />
            <Radio name="payment" id="boleto" label="Boleto bancário" />
          </div>
        </div>
      </div>
    </div>
  ),
};
