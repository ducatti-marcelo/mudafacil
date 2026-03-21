import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components/ui/input";
import { MapPin } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Digite algo...",
  },
};

export const WithValue: Story = {
  args: {
    value: "São Paulo, SP",
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Campo desabilitado",
    disabled: true,
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "seu@email.com",
  },
};

export const Endereco: Story = {
  render: () => (
    <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "8px" }}>
      <label style={{ fontSize: "14px", fontWeight: 500, display: "flex", alignItems: "center", gap: "8px" }}>
        <MapPin style={{ width: "16px", height: "16px" }} />
        Endereço de Origem
      </label>
      <Input placeholder="Rua, número, bairro, cidade" />
    </div>
  ),
};
