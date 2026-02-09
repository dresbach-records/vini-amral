
import React, { useState } from 'react';
import { Lead, LogEntry, Language, AppView } from '../types';

interface AdminProps {
  onPortal: () => void;
  onLogout: () => void;
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const AdminDashboard: React.FC<AdminProps> = ({ onPortal, onLogout, lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [showLangMenu, setShowLangMenu] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'clientes', label: 'Clientes', icon: 'people' },
    { id: 'projetos', label: 'Projetos', icon: 'account_tree' },
    { id: 'financeiro', label: 'Financeiro', icon: 'payments' },
    { id: 'docs_ia', label: 'Documentos IA', icon: 'auto_awesome' },
    { id: 'configuracoes', label: 'Configurações', icon: 'settings' },
  ];

  const leads: Lead[] = [
    { id: '1', name: 'Stellar Labs', company: 'Mobile App Refresh', complexity: 'Simples', status: 'Novo', date: '2024-03-20', avatar: 'https://picsum.photos/40/41', source: 'Play Store' },
    { id: '2', name: 'Global Trade Co.', company: 'Microservices Migration', complexity: 'Complexo', status: 'Briefing', date: '2024-03-21', avatar: 'https://picsum.photos/40/42', source: 'Web' },
    { id: '3', name: 'Aura Fintech', company: 'Payment Gateway', complexity: 'Médio', status: 'Análise', date: '2024-03-22', avatar: 'https://picsum.photos/40/43', source: 'App Store' }
  ];

  const logs: LogEntry[] = [
    { id: 'l1', timestamp: '14:20:05', service: 'Play Store Sync', status: 'SUCCESS', message: 'Novo lead importado: Stellar Labs' },
    { id: 'l2', timestamp: '14:25:30', service: 'Gemini API', status: 'SUCCESS', message: 'Discovery report gerado para Global Trade' },
    { id: 'l3', timestamp: '14:30:12', service: 'AWS Lambda', status: 'ERROR', message: 'Timeout na geração de PDF de contrato' }
  ];

  return (
    <div className="bg-[#f8fafc] dark:bg-slate-950 min-h-screen flex font-sans transition-colors duration-300">
      
      {/* Sidebar - OBRIGATÓRIA E PADRONIZADA */}
      <aside className="w-[280px] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col fixed inset-y-0 z-50">
        {/* Header / Logo */}
        <div className="p-8 pb-4">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setView(AppView.LANDING)}>
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:scale-105 transition-transform">
              <span className="material-icons-round text-2xl">rocket_launch</span>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-base font-black tracking-tight dark:text-white leading-none mb-1 whitespace-nowrap">Vini Amaral</h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">SOFTWARE & INOVAÇÃO</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-bold transition-all relative group ${
                activeNav === item.id 
                ? 'bg-blue-50 dark:bg-primary/10 text-primary' 
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className={`material-icons-round text-xl ${activeNav === item.id ? 'text-primary' : 'text-slate-400'}`}>
                {item.icon}
              </span>
              {item.label}
              {activeNav === item.id && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-primary rounded-l-full shadow-[0_0_10px_rgba(10,95,214,0.4)]"></div>
              )}
            </button>
          ))}
        </nav>

        {/* Profile Footer Section */}
        <div className="mt-auto border-t border-slate-100 dark:border-slate-800">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6 px-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm" 
                  alt="Admin User" 
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-black dark:text-white leading-none mb-1 truncate">Vini Amaral</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest truncate">Engenharia & Inovação</p>
              </div>
            </div>

            <button 
              onClick={onLogout}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-slate-500 dark:text-slate-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/10 transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="material-icons-round text-xl text-slate-400 group-hover:text-red-500">logout</span>
                Sair da conta
              </div>
              <span className="material-icons-round text-sm opacity-30 group-hover:translate-x-1 transition-transform">chevron_right</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 ml-[280px] flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="max-w-md w-full relative">
            <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">search</span>
            <input 
              type="text" 
              placeholder="Pesquisar projetos, faturas..." 
              className="w-full bg-[#f8fafc] dark:bg-slate-800 border-none rounded-xl py-3 pl-12 pr-6 text-xs focus:ring-1 focus:ring-primary dark:text-white transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-400 transition-colors"
              >
                <span className="material-icons-round text-lg">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
              </button>

              <div className="relative">
                <button 
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[10px] font-black text-slate-500 transition-all"
                >
                  {lang.toUpperCase()}
                  <span className="material-icons-round text-sm">expand_more</span>
                </button>
                {showLangMenu && (
                  <div className="absolute top-full right-0 mt-2 w-24 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden py-1 z-50">
                    {(['pt', 'en', 'es'] as Language[]).map((l) => (
                      <button 
                        key={l}
                        onClick={() => { setLang(l); setShowLangMenu(false); }}
                        className={`w-full text-left px-4 py-2 text-xs font-bold uppercase transition-colors ${lang === l ? 'bg-primary/10 text-primary' : 'hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-500'}`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button className="w-10 h-10 rounded-full bg-blue-50 dark:bg-primary/10 flex items-center justify-center text-primary relative shadow-sm">
              <span className="material-icons-round text-lg">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Dynamic Content based on activeNav */}
        <main className="p-10">
          {activeNav === 'dashboard' && (
            <div className="space-y-8 animate-in fade-in duration-500">
               <div className="flex items-center justify-between mb-2">
                 <div>
                   <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Overview do Sistema</h2>
                   <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Status operacional e pipeline de leads atualizado.</p>
                 </div>
                 <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                    <span className="material-icons-round text-sm">add</span>
                    Novo Projeto
                 </button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {['Novo', 'Briefing', 'Análise', 'Proposta'].map((col) => (
                  <div key={col} className="flex flex-col gap-4">
                    <div className="flex items-center justify-between px-2">
                      <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{col}</h3>
                      <span className="text-[10px] bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full font-black border border-slate-100 dark:border-slate-800">
                        {leads.filter(l => l.status === col).length}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 min-h-[500px] bg-slate-100/50 dark:bg-slate-900/40 rounded-[2rem] p-4 border border-slate-200 dark:border-slate-800/50">
                      {leads.filter(l => l.status === col).map(lead => (
                        <div key={lead.id} className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary cursor-pointer group transition-all hover:shadow-xl hover:-translate-y-1">
                          <div className="flex justify-between items-start mb-4">
                            <span className={`text-[8px] font-black px-2 py-0.5 rounded-lg uppercase tracking-widest ${lead.source === 'Web' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>{lead.source}</span>
                            <span className="material-icons-round text-slate-300 group-hover:text-primary transition-colors text-lg">more_horiz</span>
                          </div>
                          <h4 className="font-black text-sm mb-1 dark:text-white">{lead.name}</h4>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">{lead.company}</p>
                          <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-700">
                            <span className={`text-[9px] font-black uppercase tracking-widest ${lead.complexity === 'Complexo' ? 'text-red-500' : 'text-emerald-500'}`}>{lead.complexity}</span>
                            <div className="flex -space-x-2">
                               <img src={lead.avatar} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800" alt="User" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeNav === 'financeiro' && (
            <div className="space-y-8 animate-in fade-in duration-500">
               <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-12 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden relative">
                  <div className="relative z-10">
                     <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Saúde Financeira (MRR)</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-blue-50 dark:bg-primary/5 rounded-[2rem] border border-blue-100/50 dark:border-primary/10">
                           <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Total Receivables</p>
                           <h4 className="text-4xl font-black text-primary tracking-tighter">R$ 142.5k</h4>
                           <p className="text-[10px] text-emerald-500 font-bold mt-4 flex items-center gap-1">
                              <span className="material-icons-round text-sm">trending_up</span>
                              ↑ 18% vs last month
                           </p>
                        </div>
                        <div className="p-8 bg-white dark:bg-slate-800/50 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Projetos Ativos</p>
                           <h4 className="text-4xl font-black dark:text-white tracking-tighter">12</h4>
                        </div>
                        <div className="p-8 bg-white dark:bg-slate-800/50 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Churn Rate</p>
                           <h4 className="text-4xl font-black dark:text-white tracking-tighter">1.2%</h4>
                        </div>
                     </div>
                  </div>
                  <span className="material-icons-round absolute -bottom-10 -right-10 text-[15rem] text-slate-50 dark:text-slate-800 opacity-50 -z-0">payments</span>
               </div>
            </div>
          )}

          {/* Placeholder for other sections */}
          {activeNav !== 'dashboard' && activeNav !== 'financeiro' && (
            <div className="flex flex-col items-center justify-center py-40 text-center animate-in zoom-in duration-500">
               <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-[2rem] flex items-center justify-center text-slate-300 dark:text-slate-700 mb-8">
                  <span className="material-icons-round text-5xl">{navItems.find(n => n.id === activeNav)?.icon}</span>
               </div>
               <h2 className="text-2xl font-black dark:text-white mb-2">Seção {navItems.find(n => n.id === activeNav)?.label}</h2>
               <p className="text-slate-500 font-medium">Esta funcionalidade está sendo implementada no Console v2.5</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
