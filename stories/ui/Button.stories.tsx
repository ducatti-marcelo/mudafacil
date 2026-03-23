import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from '../../components/ui/button';

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="min-h-screen bg-secondary-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary-900 mb-8">Button Variants</h1>
        
        <div className="space-y-8">
          {/* All variants in default state */}
          <section>
            <h2 className="text-lg font-semibold text-secondary-700 mb-4">Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>

          {/* States showcase */}
          <section>
            <h2 className="text-lg font-semibold text-secondary-700 mb-4">States</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="text-center">
                  <Button variant="default">Default</Button>
                  <p className="text-xs text-secondary-500 mt-2">Normal</p>
                </div>
                <div className="text-center">
                  <Button variant="default" className="bg-primary-700">Hover</Button>
                  <p className="text-xs text-secondary-500 mt-2">Hover</p>
                </div>
                <div className="text-center">
                  <Button variant="default" className="bg-primary-800">Active</Button>
                  <p className="text-xs text-secondary-500 mt-2">Active</p>
                </div>
                <div className="text-center">
                  <Button variant="default" disabled>Disabled</Button>
                  <p className="text-xs text-secondary-500 mt-2">Disabled</p>
                </div>
                <div className="text-center">
                  <Button variant="default" className="ring-2 ring-primary-500 ring-offset-2">Focus</Button>
                  <p className="text-xs text-secondary-500 mt-2">Focus</p>
                </div>
              </div>
            </div>
          </section>

          {/* All variants - disabled */}
          <section>
            <h2 className="text-lg font-semibold text-secondary-700 mb-4">Disabled State</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" disabled>Primary</Button>
              <Button variant="secondary" disabled>Secondary</Button>
              <Button variant="outline" disabled>Outline</Button>
              <Button variant="ghost" disabled>Ghost</Button>
              <Button variant="destructive" disabled>Destructive</Button>
              <Button variant="link" disabled>Link</Button>
            </div>
          </section>

          {/* Sizes */}
          <section>
            <h2 className="text-lg font-semibold text-secondary-700 mb-4">Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </section>

          {/* With icons */}
          <section>
            <h2 className="text-lg font-semibold text-secondary-700 mb-4">With Icons</h2>
            <div className="flex flex-wrap gap-4">
              <Button>
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Criar novo
              </Button>
              <Button variant="outline">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Upload
              </Button>
              <Button variant="destructive">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Excluir
              </Button>
            </div>
          </section>

          {/* Full width */}
          <section>
            <h2 className="text-lg font-semibold text-secondary-700 mb-4">Full Width</h2>
            <div className="space-y-3 max-w-sm">
              <Button className="w-full">Botão Full Width</Button>
              <Button variant="outline" className="w-full">Outline Full Width</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  ),
};

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Começar Grátis",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};
