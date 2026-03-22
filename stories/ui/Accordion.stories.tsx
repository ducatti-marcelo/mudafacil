import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../../components/ui/accordion";

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
} as Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Accordion items={[
      { header: 'Seção 1', content: <div>Conteúdo 1</div> },
      { header: 'Seção 2', content: <div>Conteúdo 2</div> },
    ]} />
  ),
};
