import Link from "next/link";
import { Truck, Package, ArrowRight, CheckCircle, BarChart3, Shield, Zap, Box, Home, Sofa, Refrigerator } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-[#2563EB]" />
            <span className="text-xl font-bold text-[#2563EB]">MudaFácil</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-[#2563EB]">Funcionalidades</a>
            <a href="#pricing" className="text-sm font-medium hover:text-[#2563EB]">Preços</a>
            <Link href="/login" className="text-sm font-medium hover:text-[#2563EB]">Entrar</Link>
            <Link href="/register" className="bg-[#2563EB] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1d4ed8]">
              Começar Grátis
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Arraste seus móveis, escolha o caminhão e{" "}
                <span className="text-[#2563EB]">mude sem estresse</span>
              </h1>
              <p className="text-lg text-[#64748B] max-w-lg">
                Monte visualmente a carga da sua mudança com drag & drop, compare tamanhos de caminhão em tempo real e receba cotações instantâneas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="bg-[#2563EB] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#1d4ed8] flex items-center justify-center gap-2">
                  Começar Grátis <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#features" className="border border-[#E2E8F0] px-6 py-3 rounded-md text-base font-medium hover:bg-gray-50 flex items-center justify-center">
                  Ver Como Funciona
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-[#64748B]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>14 dias grátis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Sem cartão</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 border border-[#E2E8F0]">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-white rounded-lg p-4 border shadow-sm">
                  <h3 className="font-semibold mb-3">Selecione o Caminhão</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {["Fiorino", "HR", "3/4", "Baú"].map((truck) => (
                      <div key={truck} className="p-2 border rounded text-center text-sm bg-blue-50 border-blue-200">
                        <Truck className="h-4 w-4 mx-auto mb-1 text-[#2563EB]" />
                        {truck}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-2 bg-white rounded-lg p-4 border shadow-sm">
                  <div className="flex justify-between mb-3">
                    <h3 className="font-semibold">Canvas de Carga</h3>
                    <span className="text-sm text-[#F59E0B] font-medium">65%</span>
                  </div>
                  <div className="bg-gray-50 rounded border-2 border-dashed border-gray-200 h-32 flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                      <Refrigerator className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="w-16 h-10 bg-green-100 rounded flex items-center justify-center">
                      <Box className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="w-20 h-8 bg-purple-100 rounded flex items-center justify-center">
                      <Sofa className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </div>
                <div className="col-span-2 bg-white rounded-lg p-4 border shadow-sm">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-[#64748B]">Volume Total</p>
                      <p className="text-2xl font-bold">8.5 m³</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-[#64748B]">Peso Estimado</p>
                      <p className="text-2xl font-bold">320 kg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <section id="pricing" className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
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
          <Link href="/register" className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100 mt-4">
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
    <div className="p-6 rounded-xl border bg-white hover:shadow-lg">
      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563EB] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[#64748B]">{description}</p>
    </div>
  );
}

function PricingCard({ name, price, features, popular }: { name: string; price: string; features: string[]; popular?: boolean }) {
  return (
    <div className={`p-8 rounded-2xl border-2 bg-white ${popular ? 'border-[#2563EB] shadow-xl scale-105' : 'border-[#E2E8F0]'}`}>
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
      <Link href="/register" className="block w-full text-center border border-[#E2E8F0] py-2 rounded-md hover:bg-gray-50">
        Escolher
      </Link>
    </div>
  );
}
