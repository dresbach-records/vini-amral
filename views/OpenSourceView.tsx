
import React from 'react';
import { Language, AppView } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface OpenSourceProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const OpenSourceView: React.FC<OpenSourceProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  return (
    <div className="bg-[#fcfdfe] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300 overflow-x-hidden">
      <Header 
        currentView={AppView.OPEN_SOURCE} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      {/* Hero Section */}
      <section className="relative pt-40 px-6 animate-in fade-in duration-700">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[450px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop" 
              className="w-full h-full object-cover brightness-[0.4]" 
              alt="Community Background" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                Open Source & <br/> Comunidade
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                Transformando o futuro através da colaboração e inovação tecnológica constante. Junte-se a nós para construir ferramentas que movem o mundo.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-primary text-white px-10 py-4 rounded-xl font-black text-sm shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
                  Ver Repositórios
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-black text-sm hover:bg-white/20 active:scale-95 transition-all">
                  Documentação
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Nos ajude a divulgar</h2>
        <p className="text-slate-500 font-medium mb-12 max-w-xl mx-auto">Compartilhe nossa missão e ajude a fortalecer a comunidade de tecnologia nas suas redes.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'LinkedIn', icon: 'share', color: 'text-blue-600' },
            { name: 'Twitter / X', icon: 'chat', color: 'text-slate-900 dark:text-white' },
            { name: 'Facebook', icon: 'groups', color: 'text-blue-800' },
            { name: 'Telegram', icon: 'send', color: 'text-sky-500' }
          ].map((social) => (
            <button key={social.name} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-primary/10">
                <span className={`material-icons-round text-2xl ${social.color}`}>{social.icon}</span>
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">{social.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Promotional Materials Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
          <div className="flex-1 relative z-10">
            <span className="bg-blue-50 dark:bg-blue-900/30 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Exclusivo</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Materiais Promocionais</h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium">
              Oferecemos kits promocionais completos com banners, criativos e guias de marca em troca do seu engajamento com a comunidade. Ideal para criadores de conteúdo e parceiros.
            </p>
            <ul className="space-y-4 mb-10">
               {[
                 'Criativos para Social Media',
                 'Brand Guidelines & Assets',
                 'Modelos de Landing Pages'
               ].map(item => (
                 <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <span className="material-icons-round text-primary text-xl">check_circle</span>
                    {item}
                 </li>
               ))}
            </ul>
            <button className="bg-primary text-white px-10 py-4 rounded-xl font-black text-sm shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
              Solicitar Kit Completo
            </button>
          </div>
          
          <div className="flex-1 relative">
             <div className="relative z-10 p-4 bg-amber-50 rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=1470&auto=format&fit=crop" 
                  className="w-full rounded-[2rem] shadow-lg" 
                  alt="Assets Mockup" 
                />
                <div className="absolute bottom-10 right-10 bg-emerald-500 text-white p-4 rounded-2xl flex items-center gap-3 shadow-2xl animate-bounce">
                   <span className="material-icons-round text-2xl">download</span>
                   <div className="text-left">
                     <p className="text-[10px] font-black leading-none">TAMANHO</p>
                     <p className="text-xs font-bold uppercase">12.8MB ZIP</p>
                   </div>
                </div>
             </div>
             {/* Decorative glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[80px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* White-Label Models Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Modelos White-Label</h2>
        <p className="text-slate-500 font-medium mb-16 max-w-2xl mx-auto">Acesse templates de alta performance prontos para o seu projeto.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: 'SaaS Landing Page', desc: 'Design minimalista focado em conversão para startups de software.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop' },
             { title: 'Portfólio Criativo', desc: 'Ideal para engenheiros e designers que buscam uma vitrine profissional.', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop' },
             { title: 'Corporate Admin', desc: 'Dashboard completo com componentes modulares e clean.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1470&auto=format&fit=crop' }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group">
                <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src={item.img} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={item.title} />
                </div>
                <div className="p-8 text-left">
                  <h3 className="text-xl font-black dark:text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed">{item.desc}</p>
                  <div className="flex justify-between items-center pt-6 border-t border-slate-50 dark:border-slate-800">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">Grátis para uso</span>
                    <button className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                      Preview <span className="material-icons-round text-sm">open_in_new</span>
                    </button>
                  </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Affiliates Portal Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-primary rounded-[3.5rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-3xl shadow-primary/30">
           <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-10">
              <span className="material-icons-round text-4xl">handshake</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight relative z-10">
             Portal de Afiliados
           </h2>
           <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto mb-16 relative z-10 font-medium">
             Torne-se um parceiro estratégico e ganhe comissões recorrentes por cada cliente indicado que contratar nossos serviços de engenharia e inovação.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10">
              {[
                { val: '15%', label: 'COMISSÃO INICIAL' },
                { val: '90 Dias', label: 'JANELA DE COOKIE' },
                { val: 'Recorrente', label: 'PAGAMENTOS MENSAIS' }
              ].map(stat => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem]">
                  <h4 className="text-4xl font-black mb-2">{stat.val}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{stat.label}</p>
                </div>
              ))}
           </div>

           <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-sm shadow-2xl hover:brightness-110 active:scale-95 transition-all relative z-10">
             Acessar Portal de Afiliados
           </button>
           
           <p className="text-[9px] font-bold uppercase tracking-widest mt-8 opacity-40 relative z-10">Aprovação imediata para parceiros selecionados.</p>
           
           {/* Background decorative dots */}
           <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
        </div>
      </section>

      <Footer lang={lang} setView={setView} showCTA={false} />
    </div>
  );
};

export default OpenSourceView;
