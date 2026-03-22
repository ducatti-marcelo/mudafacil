import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "../../components/ui/dropdown";

const meta = {
  title: 'UI/Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Dropdown
      label="Opções"
      items={[{ label: 'Perfil', onClick: ()=>{} }, { label: 'Configurações', onClick: ()=>{} }]}
    />
  ),
};
