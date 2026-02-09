
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
      
      {/* Sidebar - Perfil removido para o Header */}
      <aside className="w-[280px] bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 flex flex-col z-20 overflow-y-auto custom-scrollbar">
        <div className="p-8 flex-1">
          <div className="flex items-center gap-3 mb-12 cursor-pointer group" onClick={() => setView(AppView.LANDING)}>
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:scale-105 transition-transform">
              <span className="material-icons-round text-2xl">rocket_launch</span>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-base font-black tracking-tight dark:text-white leading-none mb-1">Affiliate Portal</h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Vini Amaral – WL</p>
            </div>
          </div>

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

        <div className="p-6 border-t border-slate-50 dark:border-slate-800 space-y-4">
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
        {/* Perfil movido para o cabeçalho superior */}
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
            
            <div className="h-8 w-px bg-slate-100 dark:bg-slate-800"></div>
            
            {/* Bloco de Perfil do Afiliado no Cabeçalho */}
            <div className="flex items-center gap-3 group pl-2">
               <div className="text-right hidden sm:block">
                  <p className="text-[11px] font-black dark:text-white leading-none mb-1">João Silva</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none">ID: #12345 • Premium</p>
               </div>
               <div className="relative">
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm overflow-hidden transition-all">
                     <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop" className="w-full h-full object-cover" alt="User" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
               </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 lg:p-16 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
             {activeTab === 'dashboard' && renderDashboard()}
             {activeTab !== 'dashboard' && (
                <div className="flex flex-col items-center justify-center py-40 text-center animate-in zoom-in duration-500">
                   <div className="w-20 h-20 bg-blue-50 dark:bg-slate-800 rounded-[2.5rem] flex items-center justify-center text-primary mb-8 shadow-inner">
                      <span className="material-icons-round text-5xl">construction</span>
                   </div>
                   <h2 className="text-2xl font-black dark:text-white mb-2 tracking-tight">Módulo em Atualização</h2>
                   <p className="text-slate-500 font-medium max-w-sm">Estamos finalizando esta seção para o novo ecossistema.</p>
                </div>
             )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AffiliateDashboard;
