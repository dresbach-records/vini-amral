
import React from 'react';
import { Language, AppView } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LandingProps {
  onStart: () => void;
  onViewProjects: () => void;
  onFAQ: () => void;
  onLogin: () => void;
  onAbout: () => void;
  onServices?: () => void;
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const LandingView: React.FC<LandingProps> = ({ 
  onStart, onViewProjects, onFAQ, onLogin, onAbout, onServices, lang, setLang, isDarkMode, setIsDarkMode, setView 
}) => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header 
        currentView={AppView.LANDING} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 md:pt-64 md:pb-40 overflow-hidden bg-slate-50/50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 border border-amber-200 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
              ✨ Inovação & Tecnologia
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-[1.05] mb-8 dark:text-white tracking-tighter">
              Vini Amaral — <br/>
              <span className="text-primary">Engenharia</span> de<br/>
              Software & <span className="text-primary">IA</span>.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl font-medium">
              Transformando ideias complexas em soluções tecnológicas escaláveis e inovadoras para o mercado global através de arquitetura de ponta.
            </p>
            <div className="flex flex-wrap gap-5">
              <button onClick={onStart} className="bg-primary text-white px-8 py-4 rounded-xl font-black text-sm shadow-2xl shadow-primary/30 hover:brightness-110 transition-all active:scale-95">
                Iniciar Projeto
              </button>
              <button onClick={onViewProjects} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-black text-sm dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2">
                Ver Portfólio
                <span className="material-icons-round text-sm">east</span>
              </button>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000">
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white dark:border-slate-900 group">
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                alt="Workspace" 
              />
              
              <div className="absolute top-6 right-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                     <span className="material-icons-round text-[10px]">auto_awesome</span>
                   </div>
                   <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">Tech Stack</span>
                </div>
                <h4 className="text-xs font-black mb-3">AI Integrated</h4>
                <div className="flex gap-2">
                  {['Py', 'Ts', 'Go'].map(tech => (
                    <span key={tech} className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-bold text-slate-600 dark:text-slate-400">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center">
                   <span className="material-icons-round text-xl">stars</span>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-400 tracking-tight">Top Rated Engineer</p>
                   <div className="flex text-amber-500">
                      {[1,2,3,4,5].map(s => <span key={s} className="material-icons-round text-xs">star</span>)}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Companies Bar */}
      <section className="py-16 bg-white dark:bg-slate-950 border-y border-slate-50 dark:border-slate-900 text-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Empresas que Confiam</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 dark:opacity-20 grayscale">
          {['Microsoft', 'Stripe', 'Nubank', 'Airbnb', 'GitHub'].map(c => (
            <span key={c} className="text-2xl font-black tracking-tighter cursor-default hover:grayscale-0 transition-all">{c}</span>
          ))}
        </div>
      </section>

      {/* Specialties */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 block">Especialidades</span>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white tracking-tight">Excelência Técnica em Cada Detalhe</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Engenharia de Software', icon: 'phonelink_setup', desc: 'Desenvolvimento full-stack com as tecnologias mais modernas e eficientes do mercado global.' },
            { title: 'Produtos Digitais', icon: 'precision_manufacturing', desc: 'Criação de produtos focados em experiência do usuário (UX) e estratégia de crescimento de mercado.' },
            { title: 'Sistemas Inteligentes', icon: 'auto_awesome', desc: 'Integração de Inteligência Artificial e automação para otimizar processos complexos de negócio.' }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <span className="material-icons-round text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-black mb-4 dark:text-white tracking-tight">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer lang={lang} setView={setView} />
    </div>
  );
};

export default LandingView;
