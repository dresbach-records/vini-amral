
import React from 'react';
import { Language, AppView } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AboutProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const AboutView: React.FC<AboutProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen font-sans selection:bg-primary selection:text-white transition-colors duration-300">
      <Header 
        currentView={AppView.ABOUT} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      {/* Hero Section Clone */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-block px-3 py-1 bg-blue-50 text-primary text-[10px] font-black uppercase tracking-widest rounded mb-6">
            SOFTWARE ENGINEER
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[1] mb-8 text-slate-900 dark:text-white tracking-tighter">
            Construindo o <br/>
            futuro através da <br/>
            <span className="text-primary">Engenharia e IA.</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-lg font-medium">
            Sou Vini Amaral, arquiteto de software apaixonado por transformar problemas complexos em soluções elegantes e escaláveis. Com foco atual em SaaS e Inteligência Artificial.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-white px-8 py-3.5 rounded-lg font-bold text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:brightness-110 transition-all active:scale-95">
              <span className="material-icons-round text-sm">download</span>
              Baixar CV
            </button>
            <button onClick={() => setView(AppView.CASE_STUDY)} className="bg-white dark:bg-transparent border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-slate-50 transition-all">
              Ver Projetos
            </button>
          </div>
        </div>
        
        <div className="relative animate-in fade-in zoom-in duration-1000">
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              alt="Vini Amaral Profile" 
            />
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/10 rounded-[3rem]"></div>
        </div>
      </section>

      {/* Trajectory & Skills */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24">
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span className="material-icons-round text-primary text-2xl">history</span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Trajetória Profissional</h2>
          </div>
          <div className="space-y-0 relative border-l-2 border-slate-100 dark:border-slate-800 ml-4">
            {[
              { year: '2023 - PRESENTE', title: 'Inovação em IA & SaaS', desc: 'Liderando o desenvolvimento de plataformas SaaS integradas com LLMs (Large Language Models), focando em otimização de fluxos de trabalho e arquitetura de dados moderna.' },
              { year: '2020 - 2022', title: 'Liderança Técnica & Cloud', desc: 'Atuação como Tech Lead em squads de alta performance, migrando arquiteturas legadas para microsserviços na nuvem (AWS).' },
              { year: '2017 - 2019', title: 'Fundação na Engenharia', desc: 'Início da carreira focado em desenvolvimento Backend e Arquitetura de Sistemas, consolidando conhecimentos em Clean Code.' }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-12 pb-16 last:pb-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 bg-primary z-10"></div>
                <div>
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="material-icons-round text-primary text-2xl">code_off</span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Competências Técnicas</h2>
          </div>
          <div className="space-y-6">
            {[
              { title: 'Arquitetura de Software', icon: 'layers', tags: ['Microservices', 'DDD', 'Clean Arch', 'System Design'] },
              { title: 'Cloud Computing', icon: 'cloud', tags: ['AWS / Azure', 'Docker & K8s', 'Terraform', 'CI/CD'] },
              { title: 'IA & SaaS', icon: 'smart_toy', tags: ['LangChain', 'Python', 'Vector DBs', 'OpenAI API'] }
            ].map((skill, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group border-l-4 border-l-primary">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-icons-round text-primary text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <h3 className="font-extrabold text-slate-900 dark:text-white tracking-tight">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map(tag => (
                    <span key={tag} className="bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-md text-[10px] font-bold text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} setView={setView} />
    </div>
  );
};

export default AboutView;
