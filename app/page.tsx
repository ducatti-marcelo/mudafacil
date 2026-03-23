"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Truck, Package, ArrowRight, CheckCircle, BarChart3, Shield, Zap, Box, Home, Sofa, Refrigerator } from "lucide-react";

// Product type
interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

// Product images for parallax - MudaFácil themed with people doing moves
const products: Product[] = [
  {
    title: "Família se mudando",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop",
  },
  {
    title: "Carregando caixas",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=600&fit=crop",
  },
  {
    title: "Mudança organizada",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop",
  },
  {
    title: "Crianças ajudando",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop",
  },
  {
    title: "Transporte de móveis",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=600&fit=crop",
  },
  {
    title: "Nova casa, novo lar",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop",
  },
  {
    title: "Pessoas carregando caixas",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=600&fit=crop",
  },
  {
    title: "Mudança com crianças",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=600&fit=crop",
  },
  {
    title: "Pessoa idosa mudando",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&h=600&fit=crop",
  },
  {
    title: "Equipe de mudança",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=600&fit=crop",
  },
  {
    title: "Caminhão de mudança",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=600&fit=crop",
  },
  {
    title: "Organizando caixas",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&h=600&fit=crop",
  },
  {
    title: "Família feliz na nova casa",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=600&fit=crop",
  },
  {
    title: "Mudança residencial",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=600&fit=crop",
  },
  {
    title: "Contentamento com nova casa",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=600&fit=crop",
  },
];

// Hero Parallax Component
function HeroParallax({ products }: { products: Product[] }) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, 400]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, -400]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [8, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.6, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-200, 150]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="min-h-[150vh] py-10 md:py-20 overflow-hidden antialiased relative flex flex-col self-auto"
    >
      {/* Header Content */}
      <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-0 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-secondary-900"
        >
          Arraste seus móveis, escolha o caminhão e{" "}
          <span className="text-primary-600">mude sem estresse</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl mt-8 text-secondary-600"
        >
          Monte visualmente a carga da sua mudança com drag & drop, compare 
          tamanhos de caminhão em tempo real e receba cotações instantâneas.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link 
            href="/register" 
            className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-700 flex items-center justify-center gap-2 transition-colors"
          >
            Começar Grátis
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a 
            href="#features" 
            className="border border-secondary-300 px-8 py-4 rounded-lg text-lg font-medium hover:bg-secondary-50 flex items-center justify-center transition-colors"
          >
            Ver Como Funciona
          </a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-6 mt-8 text-sm text-secondary-500"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success-500" />
            <span>14 dias grátis</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success-500" />
            <span>Sem cartão</span>
          </div>
        </motion.div>
      </div>

      {/* Parallax Images */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function ProductCard({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl cursor-pointer">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 rounded-xl"
          alt={product.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none rounded-xl transition-opacity duration-300"></div>
      <h2 className="absolute bottom-6 left-6 opacity-0 group-hover/product:opacity-100 text-white text-lg font-medium transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-[#2563EB]" />
            <span className="text-xl font-bold text-[#2563EB]">MudaFácil</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-[#2563EB] transition-colors">Funcionalidades</a>
            <a href="#pricing" className="text-sm font-medium hover:text-[#2563EB] transition-colors">Preços</a>
            <Link href="/login" className="text-sm font-medium hover:text-[#2563EB] transition-colors">Entrar</Link>
            <Link href="/register" className="bg-[#2563EB] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1d4ed8] transition-colors">
              Começar Grátis
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero with Parallax */}
      <section className="relative bg-gradient-to-b from-white to-secondary-50">
        <HeroParallax products={products} />
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo para sua mudança</h2>
            <p className="text-lg text-[#64748B]">Plataforma completa para planejar sua mudança</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={<Box className="h-6 w-6" />} title="Canvas Interativo" description="Arraste móveis para o container virtual com dimensões reais." />
            <FeatureCard icon={<Truck className="h-6 w-6" />} title="4 Tamanhos" description="Compare Fiorino, HR, 3/4 e Baú com ocupação em tempo real." />
            <FeatureCard icon={<BarChart3 className="h-6 w-6" />} title="Filtros" description="Filtre por preço, nota, data e seguro inclusos." />
            <FeatureCard icon={<Package className="h-6 w-6" />} title="40+ Ícones" description="Catálogo categorizado com peso e volume estimados." />
            <FeatureCard icon={<Zap className="h-6 w-6" />} title="Resumo Inteligente" description="Volume, peso e alertas de capacidade em tempo real." />
            <FeatureCard icon={<Shield className="h-6 w-6" />} title="Avaliações" description="Cotações de empresas com nota e seguro." />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-secondary-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos acessíveis</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard name="FREE" price="R$ 0" features={["1 mudança", "15 itens", "3 cotações"]} />
            <PricingCard name="TRIAL" price="14 dias grátis" features={["Tudo ilimitado", "Filtros avançados", "Suporte"]} popular />
            <PricingCard name="PRO" price="R$ 29,90/mês" features={["Tudo ilimitado", "Suporte prioritário", "Histórico"]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2563EB] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para mudar sem estresse?</h2>
          <Link href="/register" className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100 mt-4 transition-colors">
            Começar Grátis <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-[#2563EB]" />
            <span className="font-bold">MudaFácil</span>
          </div>
          <p className="text-sm text-[#64748B]">© 2026 MudaFácil</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border bg-white hover:shadow-lg transition-shadow">
      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563EB] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[#64748B]">{description}</p>
    </div>
  );
}

function PricingCard({ name, price, features, popular }: { name: string; price: string; features: string[]; popular?: boolean }) {
  return (
    <div className={`p-8 rounded-2xl border-2 bg-white relative ${popular ? 'border-[#2563EB] shadow-xl scale-105' : 'border-[#E2E8F0]'}`}>
      {popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white px-3 py-1 rounded-full text-xs">Popular</div>}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-green-500" /> {f}
          </li>
        ))}
      </ul>
      <Link href="/register" className="block w-full text-center border border-[#E2E8F0] py-2 rounded-md hover:bg-gray-50 transition-colors">
        Escolher
      </Link>
    </div>
  );
}
