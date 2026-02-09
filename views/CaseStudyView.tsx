
import React, { useState } from 'react';
import { AppView, Language } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'SaaS' | 'Mobile' | 'Web';
  image: string;
  tags: string[];
  status: string;
}

interface CaseStudyProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const CaseStudyView: React.FC<CaseStudyProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Nexus Cloud ERP',
      description: 'Sistema de gestão empresarial completo para pequenas e médias empresas, focado em...',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      tags: ['REACT', 'POSTGRESQL', 'AWS'],
      status: 'Concluído'
    },
    {
      id: '2',
      title: 'FitFlow Mobile',
      description: 'Aplicativo multiplataforma para acompanhamento de treinos e dieta com integração em tempo real.',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1470&auto=format&fit=crop',
      tags: ['FLUTTER', 'FIREBASE', 'DART'],
      status: 'Concluído'
    },
    {
      id: '3',
      title: 'CryptoPulse',
      description: 'Plataforma de monitoramento de criptoativos com gráficos avançados e alertas personalizados.',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1432&auto=format&fit=crop',
      tags: ['NEXT.JS', 'TAILWIND', 'WEB3.JS'],
      status: 'Concluído'
    },
    {
      id: '4',
      title: 'EduSmart Portal',
      description: 'Sistema de e-learning com suporte a aulas ao vivo e correção automática de exercícios.',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop',
      tags: ['NODE.JS', 'VUE.JS', 'REDIS'],
      status: 'Concluído'
    },
    {
      id: '5',
      title: 'ImobiSearch',
      description: 'Portal imobiliário de alta performance com filtros avançados e geolocalização.',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop',
      tags: ['REACT', 'LEAFLET', 'MONGODB'],
      status: 'Concluído'
    },
    {
      id: '6',
      title: 'EcoBite Delivery',
      description: 'App de entrega focado em restaurantes sustentáveis com rastreamento em tempo real.',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786486a9?q=80&w=1471&auto=format&fit=crop',
      tags: ['REACT NATIVE', 'REDUX', 'EXPRESS'],
      status: 'Concluído'
    }
  ];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#f8f9fc] dark:bg-slate-950 min-h-screen font-sans selection:bg-primary selection:text-white transition-colors duration-300">
      <Header 
        currentView={AppView.CASE_STUDY} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      <header className="max-w-7xl mx-auto px-6 pt-40 pb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
          Portfólio de Projetos
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Exploração de soluções de engenharia de software e inovação. Sistemas <br className="hidden md:block"/> focados em escalabilidade, performance e experiência do usuário.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 flex justify-center gap-3 mb-16">
        {['Todos', 'SaaS', 'Mobile', 'Web'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeFilter === filter 
              ? 'bg-primary text-white shadow-xl shadow-primary/20' 
              : 'bg-white dark:bg-slate-900 text-slate-500 border border-slate-100 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div 
            key={project.id} 
            className="group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-in fade-in slide-in-from-bottom"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="relative aspect-[1.5/1] overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute top-5 right-5 bg-emerald-100/90 backdrop-blur text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {project.status}
              </div>
            </div>

            <div className="p-10">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2 font-medium">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-blue-50 dark:bg-blue-900/20 text-primary text-[10px] font-black px-3 py-1 rounded uppercase tracking-wider border border-blue-100/50 dark:border-blue-900/30">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
                  <span className="material-icons-round text-sm">visibility</span>
                  Ver Detalhes
                </button>
                <button className="flex-1 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <span className="material-icons-round text-sm">code</span>
                  Ver Código
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      <div className="text-center mt-20">
        <button className="inline-flex items-center gap-2 text-primary font-black text-sm hover:gap-4 transition-all">
          Carregar mais projetos
          <span className="material-icons-round">east</span>
        </button>
      </div>

      <Footer lang={lang} setView={setView} />
    </div>
  );
};

export default CaseStudyView;
