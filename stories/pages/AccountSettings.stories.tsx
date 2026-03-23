import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/ui/card';

const AccountSettingsPage = () => {
  const [activeTab, setActiveTab] = React.useState('profile');
  const [saving, setSaving] = React.useState(false);

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'security', label: 'Segurança', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { id: 'notifications', label: 'Notificações', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
    { id: 'billing', label: 'Pagamentos', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { id: 'preferences', label: 'Preferências', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  ];

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="font-bold text-foreground-primary">MudaFácil</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-foreground-tertiary hover:text-foreground-secondary rounded-lg hover:bg-surface-hover">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-700">MD</span>
                </div>
                <span className="text-sm font-medium text-foreground-primary hidden sm:block">Marcelo Ducatti</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground-primary">Configurações da Conta</h1>
          <p className="text-foreground-secondary mt-1">Gerencie suas informações pessoais e preferências</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg border border-border p-2 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-foreground-secondary hover:bg-surface-hover hover:text-foreground-primary'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                  </svg>
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <div className="flex-1 space-y-6">
            {/* Profile Section */}
            {activeTab === 'profile' && (
              <>
                {/* Avatar Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Foto de Perfil</CardTitle>
                    <CardDescription>Clique na foto para alterar sua imagem de perfil</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-700">MD</span>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Alterar foto
                        </Button>
                        <p className="text-xs text-foreground-tertiary mt-2">
                          JPG, PNG ou GIF. Máximo 2MB.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Info Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Informações Pessoais</CardTitle>
                    <CardDescription>Atualize seus dados pessoais</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground-primary mb-2">
                            Nome
                          </label>
                          <Input defaultValue="Marcelo" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground-primary mb-2">
                            Sobrenome
                          </label>
                          <Input defaultValue="Ducatti" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground-primary mb-2">
                          E-mail
                        </label>
                        <Input type="email" defaultValue="marcelo@mudafacil.com.br" />
                        <p className="text-xs text-foreground-tertiary mt-1">
                          Seu e-mail é usado para login e notificações
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground-primary mb-2">
                          Telefone
                        </label>
                        <Input type="tel" defaultValue="(11) 99999-9999" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground-primary mb-2">
                          CPF
                        </label>
                        <Input defaultValue="123.456.789-00" disabled />
                        <p className="text-xs text-foreground-tertiary mt-1">
                          O CPF não pode ser alterado após a verificação
                        </p>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="justify-end gap-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Salvar alterações</Button>
                  </CardFooter>
                </Card>

                {/* Address Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Endereço</CardTitle>
                    <CardDescription>Seu endereço de cobrança</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground-primary mb-2">
                            CEP
                          </label>
                          <Input defaultValue="01310-100" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground-primary mb-2">
                            Cidade
                          </label>
                          <Input defaultValue="São Paulo" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-foreground-primary mb-2">
                            Rua
                          </label>
                          <Input defaultValue="Av. Paulista" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground-primary mb-2">
                            Número
                          </label>
                          <Input defaultValue="1000" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground-primary mb-2">
                          Complemento
                        </label>
                        <Input defaultValue="Apto 123" />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="justify-end gap-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Salvar endereço</Button>
                  </CardFooter>
                </Card>
              </>
            )}

            {/* Security Section */}
            {activeTab === 'security' && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Alterar Senha</CardTitle>
                    <CardDescription>Para sua segurança, use uma senha forte</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground-primary mb-2">
                          Senha atual
                        </label>
                        <Input type="password" placeholder="••••••••" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground-primary mb-2">
                          Nova senha
                        </label>
                        <Input type="password" placeholder="••••••••" />
                        <p className="text-xs text-foreground-tertiary mt-1">
                          Mínimo 8 caracteres, incluindo letras e números
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground-primary mb-2">
                          Confirmar nova senha
                        </label>
                        <Input type="password" placeholder="••••••••" />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="justify-end gap-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Atualizar senha</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Autenticação de Dois Fatores</CardTitle>
                    <CardDescription>Adicione uma camada extra de segurança à sua conta</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-4 bg-surface-secondary rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-warning-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-foreground-primary">2FA Desativado</p>
                          <p className="text-sm text-foreground-tertiary">Proteja sua conta com autenticação</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Ativar</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sessões Ativas</CardTitle>
                    <CardDescription>Gerencie onde você está logado</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-success-200 bg-success-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-foreground-primary">MacBook Pro - Chrome</p>
                            <p className="text-sm text-foreground-tertiary">São Paulo, Brasil • Ativo agora</p>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-success-700 bg-success-100 px-2 py-1 rounded">
                          Este dispositivo
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-foreground-primary">iPhone 14 - Safari</p>
                            <p className="text-sm text-foreground-tertiary">São Paulo, Brasil • 2h atrás</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">Revogar</Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Sair de todos os dispositivos</Button>
                  </CardFooter>
                </Card>
              </>
            )}

            {/* Notifications Section */}
            {activeTab === 'notifications' && (
              <Card>
                <CardHeader>
                  <CardTitle>Preferências de Notificação</CardTitle>
                  <CardDescription>Escolha como você quer receber atualizações</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { title: 'Novos orçamentos', desc: 'Receba alertas quando empresas enviarem orçamentos', enabled: true },
                      { title: 'Atualizações de mudança', desc: 'Notificações sobre o status das suas mudanças', enabled: true },
                      { title: 'Promoções e ofertas', desc: 'Ofertas especiais e descontos de parceiros', enabled: false },
                      { title: 'Newsletter semanal', desc: 'Resumo semanal com dicas e novidades', enabled: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-surface-secondary rounded-lg">
                        <div>
                          <p className="font-medium text-foreground-primary">{item.title}</p>
                          <p className="text-sm text-foreground-tertiary">{item.desc}</p>
                        </div>
                        <button 
                          className={`w-12 h-6 rounded-full transition-colors ${item.enabled ? 'bg-primary-600' : 'bg-secondary-300'}`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${item.enabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="justify-end gap-3">
                  <Button variant="outline">Cancelar</Button>
                  <Button>Salvar preferências</Button>
                </CardFooter>
              </Card>
            )}

            {/* Billing Section */}
            {activeTab === 'billing' && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Plano Atual</CardTitle>
                    <CardDescription>Gerencie sua assinatura</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-6 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-primary-100 text-sm">Plano</p>
                          <p className="text-2xl font-bold">PRO</p>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold">R$ 29,90</p>
                          <p className="text-primary-100 text-sm">/mês</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-primary-500 flex items-center justify-between">
                        <span className="text-primary-100">Próxima cobrança: 23/04/2026</span>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
                          Gerenciar assinatura
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Métodos de Pagamento</CardTitle>
                    <CardDescription>Seus cartões salvos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-primary-200 bg-primary-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-white rounded flex items-center justify-center border">
                            <span className="text-xs font-bold text-blue-600">VISA</span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground-primary">•••• 4242</p>
                            <p className="text-sm text-foreground-tertiary">Expira 12/2027</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-primary-700 bg-primary-100 px-2 py-1 rounded">Padrão</span>
                          <Button variant="ghost" size="sm">Editar</Button>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Adicionar novo cartão
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Histórico de Faturas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { date: '23/02/2026', value: 'R$ 29,90', status: 'Pago' },
                        { date: '23/01/2026', value: 'R$ 29,90', status: 'Pago' },
                        { date: '23/12/2025', value: 'R$ 29,90', status: 'Pago' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 hover:bg-surface-hover rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground-primary">{item.date}</p>
                              <p className="text-xs text-foreground-tertiary">Fatura #2026-{String(i + 1).padStart(3, '0')}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-medium">{item.value}</span>
                            <Button variant="ghost" size="sm">Baixar</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Preferences Section */}
            {activeTab === 'preferences' && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Idioma e Região</CardTitle>
                    <CardDescription>Personalize sua experiência</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground-primary mb-2">
                          Idioma
                        </label>
                        <select className="w-full h-10 px-3 border border-border rounded-md bg-white text-foreground-primary">
                          <option>Português (Brasil)</option>
                          <option>English</option>
                          <option>Español</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground-primary mb-2">
                          Fuso horário
                        </label>
                        <select className="w-full h-10 px-3 border border-border rounded-md bg-white text-foreground-primary">
                          <option>GMT-3 (São Paulo)</option>
                          <option>GMT-2 (Fernando de Noronha)</option>
                          <option>GMT-4 (Manaus)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground-primary mb-2">
                          Moeda
                        </label>
                        <select className="w-full h-10 px-3 border border-border rounded-md bg-white text-foreground-primary">
                          <option>BRL (R$)</option>
                          <option>USD ($)</option>
                          <option>EUR (€)</option>
                        </select>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="justify-end gap-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Salvar</Button>
                  </CardFooter>
                </Card>

                <Card className="border-danger-200">
                  <CardHeader>
                    <CardTitle className="text-danger-600">Zona de Perigo</CardTitle>
                    <CardDescription>Ações irreversíveis para sua conta</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 border border-danger-200 bg-danger-50 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-danger-700">Excluir conta</p>
                          <p className="text-sm text-danger-600 mt-1">
                            Todas as suas dados serão permanentemente removidos. Esta ação não pode ser desfeita.
                          </p>
                        </div>
                        <Button variant="destructive" size="sm">
                          Excluir conta
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

const meta: Meta<typeof AccountSettingsPage> = {
  title: "Pages/Account Settings",
  component: AccountSettingsPage,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
