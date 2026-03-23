import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";

const spacingScale = [
  { name: '0', value: '0', px: '0px' },
  { name: 'px', value: '1px', px: '1px' },
  { name: '0.5', value: '0.125rem', px: '2px' },
  { name: '1', value: '0.25rem', px: '4px' },
  { name: '1.5', value: '0.375rem', px: '6px' },
  { name: '2', value: '0.5rem', px: '8px' },
  { name: '2.5', value: '0.625rem', px: '10px' },
  { name: '3', value: '0.75rem', px: '12px' },
  { name: '3.5', value: '0.875rem', px: '14px' },
  { name: '4', value: '1rem', px: '16px' },
  { name: '5', value: '1.25rem', px: '20px' },
  { name: '6', value: '1.5rem', px: '24px' },
  { name: '8', value: '2rem', px: '32px' },
  { name: '10', value: '2.5rem', px: '40px' },
  { name: '12', value: '3rem', px: '48px' },
  { name: '16', value: '4rem', px: '64px' },
  { name: '20', value: '5rem', px: '80px' },
  { name: '24', value: '6rem', px: '96px' },
];

const borderRadiusScale = [
  { name: 'none', value: '0' },
  { name: 'sm', value: '0.125rem' },
  { name: 'base', value: '0.25rem' },
  { name: 'md', value: '0.375rem' },
  { name: 'lg', value: '0.5rem' },
  { name: 'xl', value: '0.75rem' },
  { name: '2xl', value: '1rem' },
  { name: '3xl', value: '1.5rem' },
  { name: 'full', value: '9999px' },
];

const shadowScale = [
  { name: 'xs', desc: 'Subtle shadow for small elements' },
  { name: 'sm', desc: 'Small shadow for cards' },
  { name: 'base', desc: 'Default shadow' },
  { name: 'md', desc: 'Medium shadow for elevated elements' },
  { name: 'lg', desc: 'Large shadow for modals' },
  { name: 'xl', desc: 'Extra large shadow for overlays' },
  { name: '2xl', desc: 'Maximum shadow depth' },
  { name: 'inner', desc: 'Inset shadow for inputs' },
  { name: 'focus', desc: 'Focus ring for accessibility' },
  { name: 'brand', desc: 'Branded shadow for CTAs' },
];

const SpacingShowcase = () => {
  return (
    <div className="p-8 space-y-12">
      {/* Section: Spacing Scale */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground-primary">Spacing Scale</h2>
        <div className="bg-surface-secondary rounded-lg border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-hover">
                <th className="text-left p-4 text-sm font-medium text-foreground-secondary">Token</th>
                <th className="text-left p-4 text-sm font-medium text-foreground-secondary">Value</th>
                <th className="text-left p-4 text-sm font-medium text-foreground-secondary">Pixels</th>
                <th className="text-left p-4 text-sm font-medium text-foreground-secondary">Preview</th>
              </tr>
            </thead>
            <tbody>
              {spacingScale.map((space) => (
                <tr key={space.name} className="border-t border-border">
                  <td className="p-4">
                    <code className="text-xs bg-surface-hover px-2 py-1 rounded">space-{space.name}</code>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary font-mono">{space.value}</td>
                  <td className="p-4 text-sm text-foreground-tertiary">{space.px}</td>
                  <td className="p-4">
                    <div 
                      className="bg-primary-500 h-4 rounded"
                      style={{ width: space.value, maxWidth: '200px' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: Border Radius */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground-primary">Border Radius</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {borderRadiusScale.map((radius) => (
            <div key={radius.name} className="text-center">
              <div 
                className="w-16 h-16 mx-auto bg-primary-500 border-2 border-primary-300"
                style={{ borderRadius: radius.value }}
              />
              <p className="text-sm font-medium mt-3">{radius.name}</p>
              <code className="text-xs text-foreground-tertiary">{radius.value}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Shadows */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground-primary">Shadows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {shadowScale.slice(0, 7).map((shadow) => (
            <div 
              key={shadow.name}
              className={`p-6 bg-surface-primary rounded-lg shadow-${shadow.name} border border-border`}
            >
              <p className="font-medium text-foreground-primary">{shadow.name}</p>
              <p className="text-xs text-foreground-tertiary mt-1">{shadow.desc}</p>
            </div>
          ))}
        </div>
        
        <h3 className="text-lg font-semibold mt-8 mb-4 text-foreground-primary">Special Shadows</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-surface-primary rounded-lg shadow-inner border border-border">
            <p className="font-medium text-foreground-primary">inner</p>
            <p className="text-xs text-foreground-tertiary mt-1">Inset shadow for pressed states</p>
          </div>
          <div className="p-6 bg-surface-primary rounded-lg border-2 border-primary-500 shadow-focus">
            <p className="font-medium text-foreground-primary">focus</p>
            <p className="text-xs text-foreground-tertiary mt-1">Focus ring for accessibility</p>
          </div>
          <div className="p-6 bg-surface-primary rounded-lg shadow-brand">
            <p className="font-medium text-foreground-primary">brand</p>
            <p className="text-xs text-foreground-tertiary mt-1">Branded shadow for CTAs</p>
          </div>
        </div>
      </section>

      {/* Section: Z-Index Scale */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground-primary">Z-Index Scale</h2>
        <div className="bg-surface-secondary rounded-lg border border-border p-6">
          <div className="space-y-4">
            {[
              { name: 'hide', value: -1 },
              { name: 'base', value: 0 },
              { name: 'dropdown', value: 1000 },
              { name: 'sticky', value: 1020 },
              { name: 'fixed', value: 1030 },
              { name: 'modalBackdrop', value: 1040 },
              { name: 'modal', value: 1050 },
              { name: 'popover', value: 1060 },
              { name: 'tooltip', value: 1070 },
              { name: 'toast', value: 1080 },
            ].map((z) => (
              <div key={z.name} className="flex items-center gap-4">
                <code className="text-sm bg-surface-hover px-3 py-1 rounded w-32 text-center">
                  z-{z.name}
                </code>
                <span className="text-sm text-foreground-secondary w-16">{z.value}</span>
                <div className="flex-1 h-2 bg-surface-hover rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary-500 rounded-full"
                    style={{ width: `${(z.value / 1080) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Transitions */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground-primary">Transitions</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: 'instant', duration: '0ms' },
            { name: 'fast', duration: '100ms' },
            { name: 'normal', duration: '200ms' },
            { name: 'slow', duration: '300ms' },
            { name: 'slower', duration: '500ms' },
          ].map((t) => (
            <div key={t.name} className="p-4 bg-surface-secondary rounded-lg border border-border group">
              <div 
                className="w-full h-8 bg-primary-500 rounded transition-all duration-200 group-hover:bg-primary-600 group-hover:scale-110"
                style={{ transitionDuration: t.duration }}
              />
              <p className="text-sm font-medium mt-3">{t.name}</p>
              <code className="text-xs text-foreground-tertiary">{t.duration}</code>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof SpacingShowcase> = {
  title: "Design Tokens/Spacing & Layout",
  component: SpacingShowcase,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSpacing: Story = {};
