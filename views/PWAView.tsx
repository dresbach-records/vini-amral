
import React from 'react';
import { Language, AppView } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PWAProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const PWAView: React.FC<PWAProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  return (
    <div className="bg-[#fcfdfe] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300 overflow-x-hidden">
      <Header 
        currentView={AppView.PWA_APPS} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 relative z-10">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary border border-blue-100 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
              <span className="material-icons-round text-sm">language</span>
              Especialista em Web de Alta Performance
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-black text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter">
              Construindo a <br/>
              espinha dorsal de <br/>
              produtos <span className="text-primary italic">digitais <br/> modernos.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-medium mb-12">
              Especialista em criar Progressive Web Apps escaláveis, resilientes e ultra-rápidos utilizando o que há de mais avançado em arquitetura frontend e cloud.
            </p>
            <div className="flex flex-wrap gap-5">
              <button onClick={() => setView(AppView.ONBOARDING)} className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-sm shadow-2xl shadow-primary/30 hover:brightness-110 transition-all active:scale-95">
                Consultar Arquitetura
              </button>
              <button onClick={() => setView(AppView.CASE_STUDY)} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-10 py-5 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all">
                Ver Case Studies
              </button>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000 hidden lg:block">
             {/* Decorative Hexagon Wireframe Icon Style */}
             <div className="w-[500px] h-[500px] border border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
                <svg width="300" height="300" viewBox="0 0 100 100" className="opacity-10 dark:opacity-20 text-primary animate-[spin_60s_linear_infinite]">
                   <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                   <path d="M50 0 L50 100 M6.7 25 L93.3 75 M6.7 75 L93.3 25" fill="none" stroke="currentColor" strokeWidth="0.5" />
                   <circle cx="50" cy="50" r="1.5" fill="currentColor" />
                   <circle cx="50" cy="0" r="1.5" fill="currentColor" />
                   <circle cx="93.3" cy="25" r="1.5" fill="currentColor" />
                   <circle cx="93.3" cy="75" r="1.5" fill="currentColor" />
                   <circle cx="50" cy="100" r="1.5" fill="currentColor" />
                   <circle cx="6.7" cy="75" r="1.5" fill="currentColor" />
                   <circle cx="6.7" cy="25" r="1.5" fill="currentColor" />
                </svg>
             </div>
          </div>
        </div>
      </section>

      {/* Specialty Row */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Especialidade em Ecossistema Web</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Next.js & Serverless', 
              icon: 'rocket', 
              level: 'Advanced', 
              desc: 'Domínio completo do ecossistema React/Next.js para soluções globais de alta disponibilidade.',
              items: ['SSR & Static Generation', 'Edge Functions', 'Vercel / AWS Deployment']
            },
            { 
              title: 'Offline-First PWAs', 
              icon: 'cloud_off', 
              level: 'Expert', 
              desc: 'Service Workers avançados para persistência de dados e funcionamento sem conexão.',
              items: ['Background Sync', 'Cache API Orchestration', 'IndexedDB Persistence']
            },
            { 
              title: 'Core Web Vitals', 
              icon: 'speed', 
              level: 'Certified', 
              desc: 'Foco em performance bruta, acessibilidade e experiência fluida em qualquer dispositivo.',
              items: ['LCP / CLS Optimization', 'Zero-Bundle bloat', 'Web Workers offloading']
            }
          ].map((spec, i) => (
            <div key={i} className="bg-slate-50/50 dark:bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 text-primary rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-icons-round text-3xl">{spec.icon}</span>
                </div>
                <span className="text-[8px] font-black uppercase text-primary border border-primary/20 px-2 py-0.5 rounded">{spec.level}</span>
              </div>
              <h3 className="text-xl font-black mb-4 dark:text-white">{spec.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed">{spec.desc}</p>
              <ul className="space-y-3">
                {spec.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <span className="material-icons-round text-primary text-sm">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Pillars */}
      <section className="py-32 bg-slate-50/30 dark:bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-24">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <h2 className="text-4xl font-black mb-12 tracking-tight dark:text-white leading-tight">Pilares da Engenharia Web</h2>
            <div className="space-y-12">
               {[
                 { title: 'Arquitetura Serverless', icon: 'bolt', desc: 'Redução drástica de custos operacionais e tempo de resposta. O foco total no código, sem gerenciar servidores.' },
                 { title: 'UX Resiliente & Mobile-First', icon: 'grid_view', desc: 'Interfaces que escalam independentemente, garantindo fidelidade visual e facilidade de manutenção em mobile.' },
                 { title: 'Segurança & Conformidade', icon: 'verified_user', desc: 'Implementação de HTTPS obrigatório, criptografia ponta-a-ponta e conformidade com LGPD/GDPR.' }
               ].map(p => (
                 <div key={p.title} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                       <span className="material-icons-round text-2xl">{p.icon}</span>
                    </div>
                    <div>
                       <h4 className="text-xl font-black mb-3 dark:text-white">{p.title}</h4>
                       <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{p.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000">
             <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-3xl border border-slate-100 dark:border-slate-800 relative">
                <div className="flex justify-between items-center mb-8">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                   </div>
                   <span className="text-[10px] font-mono text-slate-400 uppercase">architecture_v3_final.svg</span>
                </div>
                
                {/* Visual Architecture Diagram Placeholder */}
                <div className="aspect-square flex items-center justify-center relative">
                   <div className="absolute w-4/5 h-4/5 border border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                   <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white shadow-2xl z-10">
                      <span className="material-icons-round text-3xl">add</span>
                   </div>
                   <div className="absolute top-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-primary rounded-lg flex items-center justify-center">
                      <span className="material-icons-round text-sm">storage</span>
                   </div>
                   <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-primary rounded-lg flex items-center justify-center">
                      <span className="material-icons-round text-sm">api</span>
                   </div>
                   <div className="absolute top-1/2 left-10 -translate-y-1/2 w-8 h-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-md"></div>
                   <div className="absolute top-1/2 right-10 -translate-y-1/2 w-8 h-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-md"></div>
                </div>
                
                <div className="flex justify-between items-center pt-8 border-t border-slate-50 dark:border-slate-800">
                   <div className="flex items-center gap-2">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">STATUS:</span>
                      <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">OPERATIONAL</span>
                   </div>
                   <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">LATENCY: 12ms</span>
                </div>
             </div>
             {/* Glow */}
             <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { icon: 'trending_up', label: '-40%', sub: 'CUSTOS DE INFRA', desc: 'Redução média através de otimização de imagens e recursos.' },
          { icon: 'speed', label: '99.99%', sub: 'UPTIME GARANTIDO', desc: 'Arquitetura Multi-Cloud com failover automático e CDN global.' },
          { icon: 'bolt', label: '2.5x', sub: 'VELOCIDADE DE DEPLOY', desc: 'Pipelines CI/CD automatizados para atualizações instantâneas.' },
          { icon: 'query_stats', label: 'Real-time', sub: 'MONITORAMENTO', desc: 'Dashboards em tempo real com alertas preditivos e logs centrais.' }
        ].map(m => (
          <div key={m.label} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:border-primary transition-all group">
             <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-xl">{m.icon}</span>
             </div>
             <h4 className="text-3xl font-black mb-1 dark:text-white tracking-tighter">{m.label}</h4>
             <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-4">{m.sub}</p>
             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-primary rounded-[3.5rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-3xl shadow-primary/30">
           <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-tight relative z-10">
             Pronto para escalar sua <br/> infraestrutura?
           </h2>
           <p className="text-xl opacity-80 max-w-2xl mx-auto mb-16 relative z-10 font-medium">
             Vamos desenhar juntos a solução web perfeita para o seu negócio, focando em performance, custo e segurança.
           </p>
           <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button onClick={() => setView(AppView.ONBOARDING)} className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-sm shadow-2xl hover:brightness-110 active:scale-95 transition-all">
                 Agendar Consultoria
              </button>
              <button className="bg-transparent border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black text-sm hover:bg-white/10 active:scale-95 transition-all">
                 Baixar Guia PWA 2024
              </button>
           </div>
           
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
        </div>
      </section>

      <Footer lang={lang} setView={setView} showCTA={false} />
    </div>
  );
};

export default PWAView;
