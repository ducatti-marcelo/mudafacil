import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Truck } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: "350px" }}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const MudancaCard: Story = {
  render: () => (
    <Card style={{ width: "350px" }}>
      <CardHeader style={{ flexDirection: "row", alignItems: "center", gap: "16px" }}>
        <div style={{ padding: "8px", backgroundColor: "#2563EB10", borderRadius: "8px" }}>
          <Truck style={{ width: "24px", height: "24px", color: "#2563EB" }} />
        </div>
        <div>
          <CardTitle style={{ fontSize: "16px" }}>São Paulo → Rio de Janeiro</CardTitle>
          <CardDescription>15 de Abril, 2026</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
          <span style={{ color: "#64748B" }}>Status</span>
          <span style={{ 
            padding: "4px 8px", 
            backgroundColor: "#FEF3C7", 
            color: "#92400E", 
            borderRadius: "999px",
            fontSize: "12px"
          }}>
            ORÇAMENTO
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" style={{ width: "100%" }}>Ver Detalhes</Button>
      </CardFooter>
    </Card>
  ),
};

export const PricingCard: Story = {
  render: () => (
    <Card style={{ width: "350px", border: "2px solid #2563EB" }}>
      <CardHeader>
        <div style={{ 
          position: "absolute", 
          top: "-12px", 
          left: "50%", 
          transform: "translateX(-50%)",
          backgroundColor: "#F59E0B",
          color: "white",
          padding: "4px 12px",
          borderRadius: "999px",
          fontSize: "12px"
        }}>
          Mais Popular
        </div>
        <CardTitle>PRO</CardTitle>
        <div style={{ marginTop: "8px" }}>
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>R$ 29,90/mês</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "14px" }}>
          <li style={{ padding: "8px 0" }}>✓ Mudanças ilimitadas</li>
          <li style={{ padding: "8px 0" }}>✓ Itens ilimitados</li>
          <li style={{ padding: "8px 0" }}>✓ Filtros avançados</li>
          <li style={{ padding: "8px 0" }}>✓ Suporte prioritário</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button style={{ width: "100%" }}>Assinar PRO</Button>
      </CardFooter>
    </Card>
  ),
};
