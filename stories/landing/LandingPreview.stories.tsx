"use client";

import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import Link from 'next/link';
import { Truck, Package, ArrowRight, CheckCircle, BarChart3, Shield, Zap, Box } from 'lucide-react';

// Product type
interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

// Product images for parallax - MudaFácil themed
const products: Product[] = [
  { title: "Família se mudando", link: "#", thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop" },
  { title: "Carregando caixas", link: "#", thumbnail: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=600&fit=crop" },
  { title: "Mudança organizada", link: "#", thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop" },
  { title: "Crianças ajudando", link: "#", thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop" },
  { title: "Transporte de móveis", link: "#", thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=600&fit=crop" },
  { title: "Nova casa", link: "#", thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop" },
  { title: "Pessoas carregando", link: "#", thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=600&fit=crop" },
  { title: "Mudança com crianças", link: "#", thumbnail: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=600&fit=crop" },
  { title: "Pessoa idosa", link: "#", thumbnail: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&h=600&fit=crop" },
  { title: "Equipe", link: "#", thumbnail: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=600&fit=crop" },
  { title: "Caminhão", link: "#", thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=600&fit=crop" },
  { title: "Organizando caixas", link: "#", thumbnail: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&h=600&fit=crop" },
  { title: "Família feliz", link: "#", thumbnail: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=600&fit=crop" },
  { title: "Mudança residencial", link: "#", thumbnail: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=600&fit=crop" },
  { title: "Contentamento", link: "#", thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=600&fit=crop" },
];

// Mini parallax component for Storybook
const MiniParallax = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-[300vh] overflow-hidden">
      {/* Background parallax images - simplified for Storybook */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="grid grid-cols-5 gap-4 p-4 transform -rotate-12 scale-125">
          {products.slice(0, 10).map((product, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden opacity-50">
              <img 
                src={product.thumbnail} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

// Hero Component
const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-white to-secondary-50 overflow-hidden">
      {/* Parallax background images */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative h-full w-full">
          {/* First row - moving right */}
          <motion.div 
            className="absolute top-10 left-0 flex gap-4 opacity-20"
            animate={{ x: [0, -2000] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {[...products.slice(0, 5), ...products.slice(0, 5)].map((p, i) => (
              <div key={i} className="w-64 h-48 rounded-xl overflow-hidden flex-shrink-0">
                <img src={p.thumbnail} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
          
          {/* Second row - moving left */}
          <motion.div 
            className="absolute top-40 left-0 flex gap-4 opacity-15"
            animate={{ x: [-2000, 0] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {[...products.slice(5, 10), ...products.slice(5, 10)].map((p, i) => (
              <div key={i} className="w-56 h-40 rounded-xl overflow-hidden flex-shrink-0">
                <img src={p.thumbnail} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
          
          {/* Third row - moving right */}
          <motion.div 
            className="absolute top-72 left-0 flex gap-4 opacity-10"
            animate={{ x: [0, -2000] }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          >
            {[...products.slice(10, 15), ...products.slice(10, 15)].map((p, i) => (
              <div key={i} className="w-72 h-52 rounded-xl overflow-hidden flex-shrink-0">
                <img src={p.thumbnail} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 md:py-20 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
            Arraste seus móveis, escolha o caminhão e{" "}
            <span className="text-primary-600">mude sem estresse</span>
          </h1>
          <p className="text-lg md:text-xl mt-6 text-secondary-600">
            Monte visualmente a carga da sua mudança com drag & drop, compare 
            tamanhos de caminhão em tempo real e receba cotações instantâneas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-700 flex items-center justify-center gap-2 transition-colors">
              Começar Grátis
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-secondary-300 px-8 py-4 rounded-lg text-lg font-medium hover:bg-secondary-50 transition-colors">
              Ver Como Funciona
            </button>
          </div>
          <div className="flex items-center gap-6 mt-6 text-sm text-secondary-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success-500" />
              <span>14 dias grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success-500" />
              <span>Sem cartão</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    { icon: <Box className="h-6 w-6" />, title: "Canvas Interativo", description: "Arraste móveis para o container virtual com dimensões reais." },
    { icon: <Truck className="h-6 w-6" />, title: "4 Tamanhos", description: "Compare Fiorino, HR, 3/4 e Baú com ocupação em tempo real." },
    { icon: <BarChart3 className="h-6 w-6" />, title: "Filtros", description: "Filtre por preço, nota, data e seguro inclusos." },
    { icon: <Package className="h-6 w-6" />, title: "40+ Ícones", description: "Catálogo categorizado com peso e volume estimados." },
    { icon: <Zap className="h-6 w-6" />, title: "Resumo Inteligente", description: "Volume, peso e alertas de capacidade em tempo real." },
    { icon: <Shield className="h-6 w-6" />, title: "Avaliações", description: "Cotações de empresas com nota e seguro." },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo para sua mudança</h2>
          <p className="text-lg text-secondary-500">Plataforma completa para planejar sua mudança</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LandingPreview: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-primary-600">MudaFácil</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary-600 transition-colors">Funcionalidades</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary-600 transition-colors">Preços</a>
            <button className="text-sm font-medium hover:text-primary-600 transition-colors">Entrar</button>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
              Começar Grátis
            </button>
          </nav>
        </div>
      </header>

      {/* Hero with Parallax */}
      <HeroSection />

      {/* Features */}
      <FeaturesSection />

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-secondary-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos acessíveis</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border-2 border-secondary-200 bg-white">
              <h3 className="text-2xl font-bold mb-2">FREE</h3>
              <p className="text-3xl font-bold mb-4">R$ 0</p>
              <ul className="space-y-2 mb-6">
                {["1 mudança", "15 itens", "3 cotações"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-secondary-200 py-2 rounded-md hover:bg-secondary-50 transition-colors">
                Escolher
              </button>
            </div>
            
            <div className="p-8 rounded-2xl border-2 border-primary-600 bg-white shadow-xl scale-105 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-500 text-white px-3 py-1 rounded-full text-xs">Popular</div>
              <h3 className="text-2xl font-bold mb-2">TRIAL</h3>
              <p className="text-3xl font-bold mb-4">14 dias grátis</p>
              <ul className="space-y-2 mb-6">
                {["Tudo ilimitado", "Filtros avançados", "Suporte"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors">
                Escolher
              </button>
            </div>
            
            <div className="p-8 rounded-2xl border-2 border-secondary-200 bg-white">
              <h3 className="text-2xl font-bold mb-2">PRO</h3>
              <p className="text-3xl font-bold mb-4">R$ 29,90/mês</p>
              <ul className="space-y-2 mb-6">
                {["Tudo ilimitado", "Suporte prioritário", "Histórico"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-secondary-200 py-2 rounded-md hover:bg-secondary-50 transition-colors">
                Escolher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para mudar sem estresse?</h2>
          <button className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-md text-lg font-medium hover:bg-secondary-100 mt-4 transition-colors">
            Começar Grátis <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-primary-600" />
            <span className="font-bold">MudaFácil</span>
          </div>
          <p className="text-sm text-secondary-500">© 2026 MudaFácil</p>
        </div>
      </footer>
    </div>
  );
};

const LandingMeta: Meta<typeof LandingPreview> = {
  title: 'Landing Preview/Visual',
  component: LandingPreview,
  parameters: {
    layout: 'fullscreen',
  },
};

export default LandingMeta;
export type Story = StoryObj<typeof LandingMeta>;
export const Default: Story = {};
