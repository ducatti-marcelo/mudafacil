import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from '../../components/ui/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
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
        <h1 className="text-2xl font-bold text-secondary-900 mb-8">Checkbox States</h1>
        
        <div className="space-y-8">
          {/* States showcase */}
          <section>
            <h2 className="text-lg font-semibold text-secondary-700 mb-4">States</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-white rounded-lg border border-secondary-200">
                <Checkbox label="Unchecked" />
                <p className="text-xs text-secondary-500 mt-4">Default</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-secondary-200">
                <Checkbox label="Checked" defaultChecked />
                <p className="text-xs text-secondary-500 mt-4">Checked</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-secondary-200">
                <Checkbox label="Hover" className="hover:bg-secondary-50" />
                <p className="text-xs text-secondary-500 mt-4">Hover over me</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border-2 border-primary-500 ring-2 ring-primary-500/20">
                <Checkbox label="Focus" />
                <p className="text-xs text-secondary-500 mt-4">Focus ring</p>
              </div>
              
              <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                <Checkbox label="Disabled" disabled />
                <p className="text-xs text-secondary-500 mt-4">Disabled unchecked</p>
              </div>
              
              <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                <Checkbox label="Disabled" disabled defaultChecked />
                <p className="text-xs text-secondary-500 mt-4">Disabled checked</p>
              </div>
            </div>
          </section>

          {/* Interactive examples */}
          <section>
            <h2 className="text-lg font-semibold text-secondary-700 mb-4">Interactive Examples</h2>
            <div className="space-y-6">
              {/* Terms acceptance */}
              <div className="p-6 bg-white rounded-lg border border-secondary-200">
                <h3 className="font-medium text-secondary-900 mb-4">Aceitar Termos</h3>
                <div className="space-y-3">
                  <Checkbox label="Li e aceito os termos de uso" />
                  <Checkbox label="Quero receber novidades por e-mail" />
                  <Checkbox label="Concordo com a política de privacidade" />
                </div>
              </div>

              {/* Filters */}
              <div className="p-6 bg-white rounded-lg border border-secondary-200">
                <h3 className="font-medium text-secondary-900 mb-4">Filtros</h3>
                <div className="space-y-3">
                  <Checkbox label="Disponível hoje" defaultChecked />
                  <Checkbox label="Avaliação 4+ estrelas" />
                  <Checkbox label="Frete grátis" />
                  <Checkbox label="Ofertas do dia" />
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
                    <th className="text-left p-4 text-sm font-medium text-secondary-700">Checkbox</th>
                    <th className="text-left p-4 text-sm font-medium text-secondary-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-secondary-200">
                    <td className="p-4 text-sm">Default</td>
                    <td className="p-4"><Checkbox /></td>
                    <td className="p-4 text-sm text-secondary-600">Neutral border, white background</td>
                  </tr>
                  <tr className="border-t border-secondary-200 bg-secondary-50">
                    <td className="p-4 text-sm">Hover</td>
                    <td className="p-4"><Checkbox /></td>
                    <td className="p-4 text-sm text-secondary-600">Darker border on hover</td>
                  </tr>
                  <tr className="border-t border-secondary-200">
                    <td className="p-4 text-sm">Checked</td>
                    <td className="p-4"><Checkbox defaultChecked /></td>
                    <td className="p-4 text-sm text-secondary-600">Blue background with checkmark</td>
                  </tr>
                  <tr className="border-t border-secondary-200">
                    <td className="p-4 text-sm">Focus</td>
                    <td className="p-4"><Checkbox /></td>
                    <td className="p-4 text-sm text-secondary-600">Focus ring for accessibility</td>
                  </tr>
                  <tr className="border-t border-secondary-200">
                    <td className="p-4 text-sm">Disabled</td>
                    <td className="p-4"><Checkbox disabled /></td>
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
    id: 'cb1',
    label: 'Opção 1',
  },
};

export const Checked: Story = {
  args: {
    id: 'cb2',
    label: 'Opção marcada',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'cb3',
    label: 'Opção desabilitada',
    disabled: true,
  },
};
