
import React, { useState } from 'react';
import { Language, AppView } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface WorkWithUsProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const WorkWithUsView: React.FC<WorkWithUsProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  const [selectedStack, setSelectedStack] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stacks = ['React', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'LangChain', 'TypeScript', 'Docker'];

  const toggleStack = (stack: string) => {
    if (selectedStack.includes(stack)) {
      setSelectedStack(selectedStack.filter(s => s !== stack));
    } else {
      setSelectedStack([...selectedStack, stack]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="bg-[#f6f8fa] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300 overflow-x-hidden">
      <Header 
        currentView={AppView.WORK_WITH_US} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-20">
        {/* Hero Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          <div className="inline-flex items-center bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            Oportunidades Abertas
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter max-w-4xl mx-auto leading-tight">
            Trabalhe em Projetos Inovadores com <span className="text-violet-600">IA e Engenharia de Software</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Estamos construindo o futuro da inteligência artificial aplicada. Junte-se à nossa rede de talentos freelancers e colabore em desafios de alta complexidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center gap-3 mb-10">
               <span className="material-icons-round text-violet-600 text-2xl">assignment_ind</span>
               <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Candidatura Técnica</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Seu nome aqui"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-5 px-6 text-sm focus:ring-2 focus:ring-violet-600 dark:text-white transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">E-mail Profissional</label>
                  <input 
                    type="email" 
                    required
                    placeholder="email@exemplo.com"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-5 px-6 text-sm focus:ring-2 focus:ring-violet-600 dark:text-white transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Link do Portfólio / GitHub</label>
                  <div className="relative">
                    <span className="material-icons-round absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-lg">link</span>
                    <input 
                      type="url" 
                      required
                      placeholder="github.com/usuario"
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-5 pl-14 pr-6 text-sm focus:ring-2 focus:ring-violet-600 dark:text-white transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Especialidade Principal</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-5 px-6 text-sm focus:ring-2 focus:ring-violet-600 dark:text-white transition-all appearance-none">
                    <option>Selecione sua área</option>
                    <option>Fullstack Developer</option>
                    <option>IA Specialist</option>
                    <option>Cloud Architect</option>
                    <option>Data Scientist</option>
                    <option>UI/UX Designer</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1 block">Stack Técnica (Selecione o que domina)</label>
                <div className="flex flex-wrap gap-3">
                  {stacks.map(s => (
                    <button 
                      key={s} 
                      type="button"
                      onClick={() => toggleStack(s)}
                      className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${selectedStack.includes(s) ? 'bg-violet-600 text-white border-violet-600' : 'bg-white dark:bg-slate-800 text-slate-500 border-slate-100 dark:border-slate-700 hover:border-violet-600/30'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Currículo (PDF)</label>
                <div className="border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-[2rem] p-12 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-800/20 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer group">
                  <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-violet-600 transition-all mb-4 shadow-sm">
                    <span className="material-icons-round">cloud_upload</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Arraste seu arquivo PDF aqui ou <span className="text-violet-600 font-bold">clique para buscar</span></p>
                  <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-black">Tamanho máximo: 10MB</p>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitted}
                className={`w-full bg-violet-600 text-white py-5 rounded-2xl font-black text-sm shadow-xl shadow-violet-600/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 ${isSubmitted ? 'brightness-75' : ''}`}
              >
                <span className="material-icons-round text-xl">send</span>
                {isSubmitted ? 'Candidatura Enviada!' : 'Enviar Candidatura'}
              </button>
            </form>
          </div>

          {/* Side Info Column */}
          <div className="lg:col-span-4 space-y-8 animate-in fade-in slide-in-from-right duration-700">
            {/* Why Partner Card */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-10">
                <span className="material-icons-round text-violet-600">verified</span>
                <h3 className="text-lg font-black dark:text-white">Por que ser um parceiro?</h3>
              </div>
              
              <ul className="space-y-8">
                {[
                  { title: 'Projetos de Escala', desc: 'Atue em sistemas reais com milhares de usuários ativos.', icon: 'check_circle' },
                  { title: 'Foco em IA e Inovação', desc: 'Desenvolva soluções modernas utilizando LLMs e RAG.', icon: 'check_circle' },
                  { title: 'Trabalho 100% Remoto', desc: 'Flexibilidade total para você trabalhar de onde quiser.', icon: 'check_circle' },
                  { title: 'Networking Especializado', desc: 'Conecte-se com outros desenvolvedores sêniores da área.', icon: 'check_circle' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="material-icons-round text-violet-600 text-lg flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="text-sm font-black dark:text-white mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote Card */}
            <div className="bg-violet-50 dark:bg-violet-900/20 rounded-[2rem] p-8 border border-violet-100 dark:border-violet-800/30">
               <div className="flex items-center gap-4 mb-6">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop" className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-700" alt="Vini" />
                  <div>
                    <h5 className="font-black text-sm dark:text-white">Vini Amaral</h5>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Software Architect</p>
                  </div>
               </div>
               <p className="text-xs text-slate-600 dark:text-slate-300 font-medium italic leading-relaxed">
                 "Buscamos mentes curiosas que amam resolver problemas reais com código limpo e tecnologias de ponta."
               </p>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} setView={setView} showCTA={false} />
    </div>
  );
};

export default WorkWithUsView;
