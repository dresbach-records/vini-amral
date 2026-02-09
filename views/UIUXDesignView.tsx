
import React from 'react';
import { Language, AppView } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface UIUXDesignProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const UIUXDesignView: React.FC<UIUXDesignProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  return (
    <div className="bg-[#f9fafc] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300 overflow-x-hidden">
      <Header 
        currentView={AppView.UI_UX_DESIGN} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      {/* Hero Section - Consultancy Style */}
      <section className="relative pt-48 pb-32 px-6 bg-gradient-to-b from-white to-transparent dark:from-slate-900/20">
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 animate-in fade-in slide-in-from-top">
            Consultoria de Elite
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom duration-700">
            Elevando a <br/>
            <span className="text-primary italic">maturidade <br/> tecnológica</span> do seu <br/> negócio.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
            Software engineering de alta performance aliado a pensamento estratégico. Ajudo empresas a escalar produtos digitais com segurança, eficiência e visão de futuro.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 animate-in fade-in slide-in-from-bottom duration-1000">
            <button onClick={() => setView(AppView.ONBOARDING)} className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-sm shadow-2xl shadow-primary/30 hover:brightness-110 transition-all active:scale-95 flex items-center gap-3">
              Marcar Reunião Diagnóstica
              <span className="material-icons-round">east</span>
            </button>
            <button onClick={() => setView(AppView.SERVICES)} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-10 py-5 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all">
              Ver Serviços
            </button>
          </div>
        </div>
        
        {/* Abstract Background Visual */}
        <div className="absolute top-48 right-10 w-[500px] h-[500px] opacity-10 dark:opacity-20 hidden lg:block pointer-events-none">
           <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
              <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M50 0 L50 100 M6.7 25 L93.3 75 M6.7 75 L93.3 25" fill="none" stroke="currentColor" strokeWidth="0.5" />
           </svg>
        </div>
      </section>

      {/* Strategic Specialties */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Especialidades Estratégicas</h2>
           <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: 'Auditoria de Código', icon: 'code_off', desc: 'Análise profunda de arquitetura, segurança e dívida técnica. Identifico gargalos antes que eles se tornem crises.', items: ['Security Assessment', 'Scalability Review', 'Technical Debt Mapping'] },
             { title: 'Transformação Digital', icon: 'dynamic_feed', desc: 'Modernização de sistemas legados e migração para nuvem com foco em continuidade de negócio e ROI.', items: ['Cloud Migration (AWS/Azure)', 'Microservices Strategy', 'Legacy Refactoring'] },
             { title: 'Mentoria para CTOs', icon: 'psychology', desc: 'Apoio estratégico para lideranças técnicas. Desenvolvimento de processos ágeis e cultura de engenharia.', items: ['Engineering Management', 'Team Building & Hiring', 'Tech Roadmap Definition'] }
           ].map((spec, i) => (
             <div key={i} className="bg-white dark:bg-slate-900 p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 text-primary rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                   <span className="material-icons-round text-2xl">{spec.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-6 dark:text-white tracking-tight">{spec.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed">{spec.desc}</p>
                <ul className="space-y-4 mb-10">
                   {spec.items.map(item => (
                     <li key={item} className="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-300">
                        <span className="material-icons-round text-primary text-lg">check_circle</span>
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>
      </section>

      <Footer lang={lang} setView={setView} />
    </div>
  );
};

export default UIUXDesignView;
