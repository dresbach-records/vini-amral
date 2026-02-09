
import React from 'react';
import { Language, AppView } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface IADataScienceProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const IADataScienceView: React.FC<IADataScienceProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  return (
    <div className="bg-[#081229] min-h-screen font-sans text-white overflow-x-hidden selection:bg-primary">
      <Header 
        currentView={AppView.IA_DATA_SCIENCE} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-primary border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Advanced Intelligence Solutions
          </div>
          <h1 className="text-6xl md:text-[5.5rem] font-black leading-[1.05] mb-8 tracking-tighter max-w-4xl">
            Transformando Dados <br/>
            em <span className="text-primary italic">Decisões <br/> Estratégicas.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-medium mb-12">
            Desenvolvimento de modelos de Machine Learning e soluções de IA Generativa sob medida para otimizar processos complexos e antecipar tendências de mercado.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => setView(AppView.ONBOARDING)} className="bg-primary hover:brightness-110 text-white px-10 py-5 rounded-2xl font-black text-sm shadow-2xl shadow-primary/40 transition-all flex items-center gap-3 active:scale-95 group">
              Solicitar Consultoria
              <span className="material-icons-round text-lg group-hover:translate-x-1 transition-transform">east</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-10 h-10 rounded-full border-2 border-[#081229] object-cover" alt="User" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#081229] bg-slate-800 flex items-center justify-center text-[10px] font-bold">+12</div>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Equipes Impactadas</p>
            </div>
          </div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-gold/5 blur-[100px] rounded-full -z-10 -translate-x-1/2"></div>
      </section>

      {/* Specialties Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Machine Learning',
            icon: 'psychology',
            desc: 'Sistemas que aprendem e evoluem. Focado em classificação, clustering e visão computacional avançada.',
            met: ['Scikit-Learn / TensorFlow', 'Neural Networks', 'Computer Vision'],
            footer: 'model.fit(x_train, y_train)\naccuracy: 0.9824',
            color: 'primary'
          },
          {
            title: 'Análise Preditiva',
            icon: 'show_chart',
            desc: 'Preveja o futuro do seu negócio com modelos estatísticos de alta precisão para séries temporais.',
            met: ['Time Series Forecasting', 'Trend Analysis', 'Risk Mitigation'],
            footer: 'chart',
            color: 'primary'
          },
          {
            title: 'IA Generativa',
            icon: 'auto_awesome',
            desc: 'Integração de LLMs customizados (GPT, Llama) para automação inteligente de processos criativos.',
            met: ['Custom LLM Fine-tuning', 'RAG Pipelines', 'Prompt Engineering'],
            footer: 'terminal',
            badge: 'Inovação',
            color: 'primary'
          }
        ].map((item, i) => (
          <div key={i} className="bg-[#101c3d]/40 border border-white/5 p-10 rounded-[2.5rem] relative group hover:border-primary/30 transition-all flex flex-col h-full">
            {item.badge && (
              <span className="absolute top-6 right-6 bg-accent-gold text-black text-[8px] font-black uppercase px-2 py-1 rounded">
                {item.badge}
              </span>
            )}
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-10">
              <span className="material-icons-round text-2xl">{item.icon}</span>
            </div>
            <h3 className="text-2xl font-black mb-6 tracking-tight">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-10 font-medium">
              {item.desc}
            </p>
            
            <ul className="space-y-4 mb-12 flex-1">
              {item.met.map(m => (
                <li key={m} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                  {m}
                </li>
              ))}
            </ul>

            <div className="bg-[#081229] rounded-2xl p-4 border border-white/5">
              {item.footer === 'chart' ? (
                <div className="flex items-end gap-1 h-12">
                  {[40, 60, 45, 75, 100, 65].map((h, j) => (
                    <div key={j} className={`flex-1 rounded-sm ${j === 4 ? 'bg-accent-gold shadow-lg shadow-yellow-500/20' : 'bg-primary/40'}`} style={{height: `${h}%`}}></div>
                  ))}
                </div>
              ) : item.footer === 'terminal' ? (
                <div className="font-mono text-[10px] text-slate-500 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                   "Gere uma análise de..."
                </div>
              ) : (
                <div className="font-mono text-[10px] text-primary/60 leading-tight">
                  {item.footer.split('\n').map((line, k) => <div key={k}>{line}</div>)}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* High Performance Dashboards */}
      <section className="py-32 bg-[#0a152e]/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter leading-tight">
              Dashboards de <span className="text-primary italic">Alta Performance.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-12 font-medium">
              Não entregamos apenas código. Entregamos clareza visual. Meus sistemas incluem interfaces de monitoramento em tempo real para acompanhar a performance dos modelos de IA e métricas de negócio.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-[#101c3d]/60 p-6 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">TEMPO DE RESPOSTA</p>
                  <h4 className="text-3xl font-black">120ms</h4>
               </div>
               <div className="bg-[#101c3d]/60 p-6 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-black text-accent-gold uppercase tracking-widest mb-2">ASSERTIVIDADE</p>
                  <h4 className="text-3xl font-black text-accent-gold">94.2%</h4>
               </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl relative">
             <div className="bg-[#101c3d] border border-white/5 p-8 rounded-[2.5rem] shadow-3xl">
                <div className="flex justify-between items-center mb-10">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                   </div>
                   <span className="text-[10px] font-mono text-slate-500 uppercase">engine_overview_v2.0</span>
                </div>
                
                <div className="flex items-end gap-3 h-48 mb-10">
                   {[35, 45, 55, 100, 65, 40, 75].map((h, i) => (
                     <div key={i} className={`flex-1 rounded-lg ${i === 3 ? 'bg-accent-gold' : 'bg-primary'}`} style={{height: `${h}%`}}></div>
                   ))}
                </div>
             </div>
             {/* Glow */}
             <div className="absolute -inset-4 bg-primary/10 blur-2xl -z-10 rounded-full"></div>
          </div>
        </div>
      </section>

      <Footer lang={lang} setView={setView} />
    </div>
  );
};

export default IADataScienceView;
