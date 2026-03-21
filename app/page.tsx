import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Package, 
  ArrowRight, 
  CheckCircle, 
  Star,
  BarChart3,
  Shield,
  Clock,
  Zap,
  Box,
  Home,
  Sofa,
  Refrigerator
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">MudaFácil</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Funcionalidades
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Preços
            </Link>
            <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
              Entrar
            </Link>
            <Button asChild>
              <Link href="/register">Começar Grátis</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Arraste seus móveis, escolha o caminhão e{" "}
                <span className="text-primary">mude sem estresse</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Monte visualmente a carga da sua mudança com drag & drop, compare tamanhos de caminhão em tempo real e receba cotações instantâneas de transportadoras avaliadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-base">
                  <Link href="/register">
                    Começar Grátis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base">
                  <Link href="#features">Ver Como Funciona</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>14 dias grátis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cancele quando quiser</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
                <div className="grid grid-cols-2 gap-4">
                  {/* Caminhões */}
                  <div className="col-span-2 bg-white rounded-lg p-4 border shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Selecione o Caminhão</h3>
                      <span className="text-sm text-muted-foreground">4 opções</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {["Fiorino", "HR", "3/4", "Baú"].map((truck) => (
                        <div key={truck} className="p-2 border rounded text-center text-sm bg-primary/5 border-primary/20">
                          <Truck className="h-4 w-4 mx-auto mb-1 text-primary" />
                          {truck}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Canvas de Carga */}
                  <div className="col-span-2 bg-white rounded-lg p-4 border shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Canvas de Carga</h3>
                      <span className="text-sm text-accent font-medium">65% ocupado</span>
                    </div>
                    <div className="bg-gray-50 rounded border-2 border-dashed border-gray-200 h-32 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center gap-4 p-4">
                        <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                          <Refrigerator className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="w-16 h-10 bg-green-100 rounded flex items-center justify-center">
                          <Box className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="w-20 h-8 bg-purple-100 rounded flex items-center justify-center">
                          <Sofa className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="w-12 h-12 bg-yellow-100 rounded flex items-center justify-center">
                          <Home className="h-6 w-6 text-yellow-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Resumo */}
                  <div className="col-span-2 bg-white rounded-lg p-4 border shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Volume Total</p>
                        <p className="text-2xl font-bold">8.5 m³</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Peso Estimado</p>
                        <p className="text-2xl font-bold">320 kg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tudo que você precisa para sua mudança
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma plataforma completa para planejar, visualizar e contratar sua mudança de forma inteligente.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Box className="h-6 w-6" />}
              title="Canvas de Carga Interativo"
              description="Arraste ícones de móveis para dentro de um container virtual. Cada item tem dimensão proporcional real e encaixa visualmente no espaço disponível."
            />
            <FeatureCard
              icon={<Truck className="h-6 w-6" />}
              title="Seletor de Caminhão"
              description="Compare visualmente 4 tamanhos com barra de ocupação em tempo real conforme você adiciona itens ao canvas."
            />
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Filtros de Cotação"
              description="Filtre transportadoras por preço, nota de avaliação, data disponível, seguro incluso e tipo de veículo."
            />
            <FeatureCard
              icon={<Package className="h-6 w-6" />}
              title="Catálogo Visual de Itens"
              description="Biblioteca com 40+ ícones categorizados (quarto, cozinha, sala, escritório) com peso e volume pré-estimados."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Resumo Inteligente"
              description="Painel lateral com volume total, peso estimado, percentual de ocupação e alerta se estiver acima da capacidade."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Transportadoras Avaliadas"
              description="Receba cotações de empresas com nota média, total de avaliações e seguro incluso."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos que cabem no seu bolso
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comece grátis e evolua conforme suas necessidades de mudança.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              name="FREE"
              price="R$ 0"
              description="Para começar a planejar sua primeira mudança"
              features={[
                "1 mudança ativa",
                "Até 15 itens no canvas",
                "3 cotações por mudança",
                "Sem filtros avançados"
              ]}
              cta="Começar Grátis"
              popular={false}
            />
            <PricingCard
              name="TRIAL"
              price="Grátis por 14 dias"
              description="Experimente todos os recursos sem limitações"
              features={[
                "Tudo ilimitado",
                "Filtros avançados",
                "Suporte prioritário",
                "Exportação de relatórios"
              ]}
              cta="Iniciar Trial"
              popular={true}
            />
            <PricingCard
              name="PRO"
              price="R$ 29,90/mês"
              description="Para quem faz mudanças frequentes"
              features={[
                "Tudo ilimitado",
                "Filtros avançados",
                "Suporte prioritário",
                "Exportação de relatórios",
                "Histórico completo"
              ]}
              cta="Assinar PRO"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para sua mudança sem estresse?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Comece agora mesmo e descubra como é fácil planejar sua mudança com o MudaFácil.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-base">
            <Link href="/register">
              Começar Grátis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Truck className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">MudaFácil</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 MudaFácil. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl border bg-white hover:shadow-lg transition-shadow">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  popular,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}) {
  return (
    <div className={`p-8 rounded-2xl border-2 bg-white relative ${popular ? 'border-primary shadow-xl scale-105' : 'border-border'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
          Mais Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="w-full" 
        variant={popular ? "default" : "outline"}
        asChild
      >
        <Link href="/register">{cta}</Link>
      </Button>
    </div>
  );
}