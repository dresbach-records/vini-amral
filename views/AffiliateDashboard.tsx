
import React, { useState } from 'react';
import { Language, AppView } from '../types';

interface AffiliateDashboardProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
  onLogout: () => void;
}

type TabType = 'dashboard' | 'models' | 'referral' | 'commissions' | 'materials' | 'settings' | 'docs';

const AffiliateDashboard: React.FC<AffiliateDashboardProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView, onLogout }) => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [modelFilter, setModelFilter] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Data for the views
  const templates = [
    { title: 'SaaS Dashboard Pro', category: 'SAAS', desc: 'Painel administrativo moderno e responsivo com métricas, gráficos...', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop' },
    { title: 'Creative Portfolio', category: 'PORTFOLIO', desc: 'Layout criativo e minimalista ideal para freelancers, designers e...', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop' },
    { title: 'Enterprise Corporate', category: 'CORPORATE', desc: 'Design profissional e sóbrio focado em empresas de tecnologia e...', img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop' },
    { title: 'Modern SaaS Landing', category: 'SAAS', desc: 'Landing page otimizada para conversão com seções de planos...', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop' },
  ];

  const transactions = [
    { date: '24 Out, 2023', desc: 'Saque Solicitado', subDesc: 'Transferência Bancária - PIX', status: 'Pago', val: 'R$ 1.500,00' },
    { date: '15 Out, 2023', desc: 'Comissão de Venda', subDesc: 'Venda #8829-AB', status: 'Pago', val: 'R$ 250,00' },
    { date: '02 Out, 2023', desc: 'Saque Solicitado', subDesc: 'Transferência Bancária - DOC', status: 'Processando', val: 'R$ 800,00' },
  ];

  const materials = [
    { title: 'Banner Oferta de Verão', tag: 'BANNERS WEB', info: '728x90px • PNG • 450KB', img: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1470&auto=format&fit=crop' },
    { title: 'Post Feed - Benefícios', tag: 'INSTAGRAM', info: '1080x1080px • JPG • 1.2MB', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1471&auto=format&fit=crop' },
  ];

  // Render Functions for each Tab
  const renderDashboard = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Overview Geral</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Seu desempenho consolidado como parceiro premium.</p>
        </div>
        <button onClick={() => setActiveTab('commissions')} className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          <span className="material-icons-round text-sm">payments</span>
          Solicitar Saque
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Cliques totais', val: '12.4k', icon: 'ads_click', color: 'bg-blue-50 text-primary' },
          { label: 'Conversões', val: '842', icon: 'person_add', color: 'bg-emerald-50 text-emerald-500' },
          { label: 'Saldo Atual', val: 'R$ 4.2k', icon: 'account_balance_wallet', color: 'bg-amber-50 text-amber-500' },
          { label: 'Rank Semanal', val: '#4', icon: 'emoji_events', color: 'bg-purple-50 text-purple-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
              <span className="material-icons-round text-xl">{stat.icon}</span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-black dark:text-white">{stat.val}</h3>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm h-80 flex items-center justify-center text-slate-300">
        <div className="text-center">
          <span className="material-icons-round text-5xl mb-4">insights</span>
          <p className="text-sm font-bold">Gráfico de Performance (Em breve)</p>
        </div>
      </div>
    </div>
  );

  const renderModels = () => (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom duration-500">
      <div>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Meus Modelos (WL)</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Acesse e baixe templates white-label prontos para o seu negócio.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((item, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 group shadow-sm hover:shadow-xl transition-all">
            <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={item.title} />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-black dark:text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 font-medium mb-8">{item.desc}</p>
              <div className="flex gap-2">
                <button className="flex-1 py-3 border border-slate-100 dark:border-slate-800 rounded-xl text-[10px] font-black uppercase text-primary hover:bg-primary/5 transition-all">Visualizar</button>
                <button className="flex-1 py-3 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">Baixar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCommissions = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Financeiro</h1>
        <button className="bg-primary text-white px-8 py-3.5 rounded-xl font-black text-sm shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">Solicitar Saque</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Saldo Disponível', val: 'R$ 1.250,00', icon: 'account_balance', color: 'text-emerald-500' },
          { label: 'Comissões Pendentes', val: 'R$ 450,00', icon: 'schedule', color: 'text-amber-500' },
          { label: 'Total Pago', val: 'R$ 8.900,00', icon: 'verified', color: 'text-blue-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-6">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
               <span className={`material-icons-round text-xl ${stat.color}`}>{stat.icon}</span>
            </div>
            <h3 className="text-3xl font-black dark:text-white tracking-tight">{stat.val}</h3>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 dark:border-slate-800"><h3 className="text-lg font-black dark:text-white">Histórico</h3></div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-50 dark:border-slate-800">
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Data</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Descrição</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {transactions.map((tx, i) => (
              <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all">
                <td className="p-6 text-xs font-bold text-slate-400">{tx.date}</td>
                <td className="p-6 font-black text-xs dark:text-white">{tx.desc} <span className="block text-[10px] text-slate-400 font-medium">{tx.subDesc}</span></td>
                <td className="p-6 text-[10px] font-black uppercase text-emerald-500">{tx.status}</td>
                <td className="p-6 text-right font-black dark:text-white">{tx.val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderMaterials = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Materiais Promocionais</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Assets oficiais para suas campanhas.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {materials.map((mat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 overflow-hidden group shadow-sm">
            <div className="h-40 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img src={mat.img} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt={mat.title} />
            </div>
            <div className="p-6">
              <h4 className="font-black text-slate-900 dark:text-white mb-1 truncate">{mat.title}</h4>
              <p className="text-[10px] text-slate-400 mb-6 font-bold uppercase">{mat.tag}</p>
              <button className="w-full py-2.5 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Configurações</h1>
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm space-y-10">
        <div className="flex items-center gap-6">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop" className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 dark:border-slate-800" alt="Profile" />
          <div>
            <h4 className="font-black dark:text-white mb-1">João Silva</h4>
            <p className="text-xs text-slate-400 font-medium">Parceiro Premium desde Out, 2022</p>
            <button className="mt-4 text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Alterar Foto</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-slate-50 dark:border-slate-800">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase pl-1">E-mail de Contato</label>
            <input type="text" defaultValue="joao.silva@email.com" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-4 px-6 text-sm font-bold dark:text-white" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase pl-1">WhatsApp</label>
            <input type="text" defaultValue="+55 (11) 98765-4321" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-4 px-6 text-sm font-bold dark:text-white" />
          </div>
        </div>
        <button className="bg-primary text-white px-10 py-4 rounded-xl font-black text-sm shadow-xl shadow-primary/20">Salvar Alterações</button>
      </div>
    </div>
  );

  const renderDocs = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Documentação</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Guia completo para parceiros de sucesso.</p>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-12 border border-slate-100 dark:border-slate-800 shadow-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium space-y-6">
        <h3 className="text-xl font-black text-slate-900 dark:text-white">1. Introdução ao Programa</h3>
        <p>Nosso programa de afiliados recompensa indicações qualificadas de software enterprise. Cada venda gera comissão recorrente durante 12 meses.</p>
        <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary text-primary text-sm font-bold">Lembre-se: O cookie de rastreamento tem validade de 90 dias.</div>
        <h3 className="text-xl font-black text-slate-900 dark:text-white pt-6">2. Boas Práticas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Foque em tom de voz profissional e consultivo.</li>
          <li>Use os links curtos do dashboard.</li>
          <li>Acompanhe seus leads na aba "Vendas".</li>
        </ul>
      </div>
    </div>
  );

  const menuItems = [
    { id: 'dashboard', label: 'Início', icon: 'dashboard' },
    { id: 'models', label: 'Meus Modelos (WL)', icon: 'layers' },
    { id: 'referral', label: 'Minhas Vendas', icon: 'trending_up' },
    { id: 'commissions', label: 'Financeiro', icon: 'account_balance_wallet' },
    { id: 'materials', label: 'Materiais', icon: 'collections' },
    { id: 'docs', label: 'Documentação', icon: 'description' },
    { id: 'settings', label: 'Configurações', icon: 'settings' },
  ];

  return (
    <div className="flex h-screen bg-[#f4f7fa] dark:bg-slate-950 font-sans transition-colors duration-300 overflow-hidden">
      
      {/* Dynamic Sidebar */}
      <aside className="w-[280px] bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 flex flex-col z-20 overflow-y-auto custom-scrollbar">
        <div className="p-8 flex-1">
          {/* Logo Section */}
          <div className="flex items-center gap-3 mb-12 cursor-pointer group" onClick={() => setView(AppView.LANDING)}>
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:scale-105 transition-transform">
              <span className="material-icons-round text-2xl">rocket_launch</span>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-base font-black tracking-tight dark:text-white leading-none mb-1">Affiliate Portal</h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Vini Amaral – WL</p>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as TabType)}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-bold transition-all group ${
                  activeTab === item.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-600'
                }`}
              >
                <span className={`material-icons-round text-xl transition-colors ${activeTab === item.id ? 'text-white' : 'text-slate-400 group-hover:text-primary'}`}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer Section */}
        <div className="p-6 border-t border-slate-50 dark:border-slate-800 space-y-6">
          {/* Promo Card */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-700/50">
            <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">STATUS PARCEIRO</p>
            <p className="text-[10px] font-bold dark:text-white mb-3">Consultoria Premium (Ativo)</p>
            <button className="w-full bg-primary/10 text-primary py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
               Upgrade Plano
            </button>
          </div>

          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-xs font-black text-slate-400 hover:text-red-500 transition-all group uppercase tracking-widest"
          >
            <span className="material-icons-round text-lg group-hover:rotate-12 transition-transform">logout</span>
            Sair da conta
          </button>
        </div>
      </aside>

      {/* Main Page Area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-white/50 dark:bg-slate-950/50">
        {/* Header Navigation */}
        <header className="h-[80px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-8 flex items-center justify-between shrink-0 sticky top-0 z-10">
          <div className="max-w-md w-full relative">
             <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">search</span>
             <input 
               type="text" 
               placeholder="Pesquisar..." 
               className="w-full bg-[#f8fafc] dark:bg-slate-800/50 border-none rounded-xl py-3 pl-12 pr-6 text-sm focus:ring-1 focus:ring-primary dark:text-white"
             />
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-400 transition-colors">
               <span className="material-icons-round text-lg">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button className="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-400 relative">
              <span className="material-icons-round text-lg">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
            </button>
            <div className="h-8 w-px bg-slate-100 dark:bg-slate-800"></div>
            
            {/* Integrated Profile Header Button */}
            <button onClick={() => setActiveTab('settings')} className="flex items-center gap-3 group pl-2">
               <div className="text-right hidden sm:block">
                  <p className="text-[11px] font-black dark:text-white leading-none mb-1">João Silva</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none">ID: #12345 • Premium</p>
               </div>
               <div className="relative">
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm overflow-hidden group-hover:border-primary transition-all">
                     <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop" className="w-full h-full object-cover" alt="User" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
               </div>
            </button>
          </div>
        </header>

        {/* Dynamic Section Content */}
        <div className="flex-1 overflow-y-auto p-10 lg:p-16 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
             {activeTab === 'dashboard' && renderDashboard()}
             {activeTab === 'models' && renderModels()}
             {activeTab === 'commissions' && renderCommissions()}
             {activeTab === 'materials' && renderMaterials()}
             {activeTab === 'settings' && renderSettings()}
             {activeTab === 'docs' && renderDocs()}
             {activeTab === 'referral' && (
                <div className="flex flex-col items-center justify-center py-40 text-center animate-in zoom-in duration-500">
                   <div className="w-20 h-20 bg-blue-50 dark:bg-slate-800 rounded-[2.5rem] flex items-center justify-center text-primary mb-8 shadow-inner">
                      <span className="material-icons-round text-5xl">insights</span>
                   </div>
                   <h2 className="text-2xl font-black dark:text-white mb-2 tracking-tight">Rastreamento de Vendas</h2>
                   <p className="text-slate-500 font-medium max-w-sm">Aqui você poderá ver cada clique e cada conversão em tempo real. Esta funcionalidade está sendo atualizada para a v2.5.</p>
                   <button onClick={() => setActiveTab('dashboard')} className="mt-10 text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                      <span className="material-icons-round text-sm">west</span>
                      Voltar ao Início
                   </button>
                </div>
             )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AffiliateDashboard;
