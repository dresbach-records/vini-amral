
import React, { useState } from 'react';
import { Language } from '../types';

interface PortalProps {
  onAdmin: () => void;
  onLogout: () => void;
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

const PortalView: React.FC<PortalProps> = ({ onAdmin, onLogout, lang, setLang, isDarkMode, setIsDarkMode }) => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [showLangMenu, setShowLangMenu] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'projects', label: 'Meus Projetos', icon: 'layers' },
    { id: 'roadmap', label: 'Roadmap', icon: 'route' },
    { id: 'docs', label: 'Documentos', icon: 'description' },
    { id: 'support', label: 'Suporte & FAQ', icon: 'help_outline' },
    { id: 'settings', label: 'Configurações', icon: 'settings' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex font-display overflow-hidden">
      
      {/* Sidebar Navigation - Fixed & Professional */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col z-40 hidden lg:flex shadow-sm">
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span className="material-icons-round">terminal</span>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-sm font-bold tracking-tight truncate">Vini Amaral</h1>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Client Hub 2026</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeMenu === item.id 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className="material-icons-round text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Plano Atual</p>
            <p className="text-xs font-bold mb-3">Consultoria Premium</p>
            <button className="w-full py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-[10px] font-black uppercase hover:bg-slate-100 transition-colors">
              Upgrade
            </button>
          </div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 mt-4 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all"
          >
            <span className="material-icons-round text-lg">logout</span>
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between z-30">
          <div>
            <h2 className="text-xl font-black capitalize">{activeMenu}</h2>
            <p className="text-xs text-slate-400">Bem-vindo de volta, Alex Thompson</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
               <button 
                 onClick={() => setIsDarkMode(!isDarkMode)}
                 className="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-primary transition-colors"
                 title="Mudar Tema"
               >
                 <span className="material-icons-round text-lg">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
               </button>

               <div className="relative">
                 <button 
                   onClick={() => setShowLangMenu(!showLangMenu)}
                   className="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-500 uppercase text-[10px] font-black"
                 >
                   {lang}
                 </button>
                 {showLangMenu && (
                   <div className="absolute top-full right-0 mt-2 w-24 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden py-1 z-[100]">
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

               <button className="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-500 relative">
                 <span className="material-icons-round text-lg">notifications</span>
                 <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
               </button>
               <button onClick={onAdmin} className="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-500">
                 <span className="material-icons-round text-lg">admin_panel_settings</span>
               </button>
            </div>
            
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Alex Thompson</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Stellar Labs</p>
              </div>
              <img className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-md object-cover" src="https://picsum.photos/40/40" alt="Avatar" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-slate-50 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* KPI Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-5 group hover:border-primary transition-all">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-icons-round text-2xl">rocket_launch</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Status</p>
                  <h3 className="text-lg font-black">Em Execução</h3>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-5 group hover:border-emerald-500 transition-all">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <span className="material-icons-round text-2xl">flag</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Próximo Marco</p>
                  <h3 className="text-lg font-black">Beta MVP</h3>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-5 group hover:border-amber-500 transition-all">
                <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/20 text-amber-600 rounded-xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <span className="material-icons-round text-2xl">assignment_late</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Pendências</p>
                  <h3 className="text-lg font-black">2 Ações</h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Timeline Section */}
              <div className="lg:col-span-8">
                <section className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 p-8">
                  <div className="flex justify-between items-center mb-10">
                    <h2 className="text-xl font-black flex items-center gap-3">
                      <span className="material-icons-round text-primary">route</span>
                      Visual Project Roadmap
                    </h2>
                    <button className="text-[10px] font-black text-primary uppercase border border-primary/20 px-3 py-1 rounded-full hover:bg-primary/5">Expandir Tudo</button>
                  </div>
                  
                  <div className="space-y-0 relative border-l-2 border-slate-100 dark:border-slate-800 ml-4">
                    {[
                      { title: 'Requirements Gathering', status: 'COMPLETE', done: true, icon: 'check', desc: 'Detailed scope defined with AI-assisted discovery.' },
                      { title: 'Architecture & Design', status: 'COMPLETE', done: true, icon: 'check', desc: 'Full cloud architecture blueprint and UI strategy.' },
                      { title: 'Core Development', status: 'ACTIVE', done: false, active: true, icon: 'engineering', desc: 'Sprints focused on Backend/API microservices.', progress: 72 },
                      { title: 'QA & Pilot Launch', status: 'PLANNED', done: false, icon: 'biotech', desc: 'Stress testing and limited pilot user onboarding.' }
                    ].map((step, i) => (
                      <div key={i} className="relative pl-12 pb-12 last:pb-0">
                        <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full flex items-center justify-center text-white z-10 transition-transform hover:scale-110 ${step.done ? 'bg-green-500' : step.active ? 'bg-primary ring-4 ring-primary/20' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                          <span className="material-icons-round text-sm">{step.icon}</span>
                        </div>
                        <div className={`transition-all duration-300 ${step.active ? 'bg-primary/5 dark:bg-primary/10 p-6 rounded-2xl border border-primary/20' : 'p-2'}`}>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className={`font-black ${step.active ? 'text-primary text-lg' : 'text-slate-900 dark:text-white'}`}>{step.title}</h4>
                            {step.active && <span className="bg-primary text-white px-2 py-0.5 rounded text-[8px] font-black uppercase">LIVE NOW</span>}
                          </div>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{step.desc}</p>
                          {step.progress && (
                            <div className="space-y-2">
                               <div className="flex justify-between text-[9px] font-black text-slate-400">
                                 <span>PROCESSO DE DESENVOLVIMENTO</span>
                                 <span className="text-primary">{step.progress}%</span>
                               </div>
                               <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                 <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{width: `${step.progress}%`}}></div>
                               </div>
                            </div>
                          )}
                          <span className={`text-[10px] font-bold mt-3 block ${step.done ? 'text-green-600' : 'text-slate-400'}`}>{step.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Insights Sidebar */}
              <aside className="lg:col-span-4 space-y-6">
                <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                        <span className="material-icons-round text-primary">auto_awesome</span>
                      </div>
                      <h4 className="font-black text-sm uppercase tracking-widest">AI Project Insight</h4>
                    </div>
                    <p className="text-sm opacity-80 leading-relaxed mb-6 italic">"Vossa velocidade de desenvolvimento está 12% acima da média do setor para este tipo de stack. Recomendamos antecipar a integração de pagamentos."</p>
                    <button className="w-full py-3 bg-white text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest hover:brightness-90 transition-all">Ver Relatório Completo</button>
                  </div>
                  <span className="material-icons-round absolute -bottom-10 -right-10 text-[12rem] opacity-5 group-hover:rotate-12 transition-transform duration-700">insights</span>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8">
                   <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-6">Suporte Direto</h4>
                   <div className="space-y-4">
                     <button className="w-full flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl hover:bg-primary hover:text-white transition-all group">
                        <span className="material-icons-round text-primary group-hover:text-white">chat</span>
                        <span className="text-xs font-bold">Falar com Consultor</span>
                     </button>
                     <button className="w-full flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl hover:bg-primary hover:text-white transition-all group">
                        <span className="material-icons-round text-primary group-hover:text-white">calendar_today</span>
                        <span className="text-xs font-bold">Agendar Reunião Sync</span>
                     </button>
                   </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PortalView;
