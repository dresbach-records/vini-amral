
import React from 'react';
import { Language, AppView } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ServicesProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const ServicesView: React.FC<ServicesProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300 relative overflow-x-hidden">
      <Header 
        currentView={AppView.SERVICES} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 border border-amber-100 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
          <span className="material-icons-round text-sm">auto_awesome</span>
          Engenharia de Software Moderna
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter">
          Serviços de <span className="text-accent-gold">Engenharia</span> <br/>
          e Inovação Digital
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Soluções técnicas robustas para transformar ideias complexas em arquiteturas escaláveis, processos eficientes e times de alta performance.
        </p>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {[
          { 
            title: 'Consultoria de Software', 
            icon: 'insights', 
            desc: 'Transformação digital e garantia de qualidade técnica. Foco em eliminar dívida técnica e modernizar stacks legadas.',
            met: ['Agile & Lean Software', 'Code Review Rigoroso', 'Tech Debt Assessment'],
            pub: 'Startups em escala e empresas consolidadas buscando eficiência.'
          },
          { 
            title: 'Arquitetura de Sistemas', 
            icon: 'hub', 
            rec: true,
            desc: 'Desenho de infraestruturas resilientes e cloud-native prontas para lidar com milhões de acessos simultâneos.',
            met: ['Cloud-Native Patterns', 'Microservices Ecosystem', 'Security-by-Design'],
            pub: 'Negócios em fase de hipercrescimento e sistemas de missão crítica.'
          },
          { 
            title: 'Mentoria Tech', 
            icon: 'school', 
            desc: 'Aceleração de carreira para engenheiros de software e formação de lideranças técnicas estratégicas.',
            met: ['1-on-1 Personalized', 'Career Roadmap Planning', 'Tech Leadership Training'],
            pub: 'Desenvolvedores Sêniores e novos CTOs/Tech Leads.'
          }
        ].map((item, i) => (
          <div key={i} className={`bg-white dark:bg-slate-900 rounded-[3rem] p-10 flex flex-col transition-all duration-500 ${item.rec ? 'shadow-2xl shadow-yellow-500/10 border-2 border-accent-gold scale-105 z-10' : 'shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-50 dark:border-slate-800'}`}>
            {item.rec && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-white px-6 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                <span className="material-icons-round text-xs">star</span>
                Recomendado
              </div>
            )}
            <div className={`w-16 h-12 rounded-xl flex items-center justify-center mb-10 ${item.rec ? 'bg-accent-gold text-white shadow-lg shadow-yellow-500/30 w-full h-16' : 'bg-slate-50 dark:bg-slate-800 text-accent-gold'}`}>
              <span className="material-icons-round text-3xl">{item.icon}</span>
            </div>
            <h3 className="text-2xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-10 font-medium">{item.desc}</p>
            
            <div className="space-y-6 mb-12 flex-1">
              <div>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-4 ${item.rec ? 'text-accent-gold opacity-60' : 'text-slate-300'}`}>METODOLOGIA</p>
                <ul className="space-y-3">
                  {item.met.map(m => (
                    <li key={m} className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                      <span className="material-icons-round text-accent-gold text-lg">check_circle</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${item.rec ? 'text-accent-gold opacity-60' : 'text-slate-300'}`}>PÚBLICO-ALVO</p>
                <p className="text-xs font-medium text-slate-500">{item.pub}</p>
              </div>
            </div>
            
            <button className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all font-black text-sm active:scale-95 ${item.rec ? 'bg-accent-gold text-white shadow-xl shadow-yellow-500/40 hover:brightness-110' : 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100'}`}>
              <span className="material-icons-round text-lg">{item.rec ? 'bolt' : 'smart_toy'}</span>
              Iniciar Diagnóstico com IA
            </button>
          </div>
        ))}
      </section>

      <Footer lang={lang} setView={setView} />
    </div>
  );
};

export default ServicesView;
