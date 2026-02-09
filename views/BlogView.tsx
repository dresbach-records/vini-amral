
import React, { useState } from 'react';
import { Language, AppView } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: 'Engenharia de Software' | 'IA & Automação' | 'Arquitetura Cloud';
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

interface BlogViewProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const BlogView: React.FC<BlogViewProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Escalando Micro-serviços com Kubernetes e Istio',
      summary: 'Uma visão profunda sobre como gerenciar o tráfego e a segurança em malhas de serviços complexas para aplicações de larga escala.',
      category: 'Arquitetura Cloud',
      date: '15 Mai, 2024',
      readTime: '8 min de leitura',
      image: 'https://images.unsplash.com/photo-1667372333374-0d70498847cc?q=80&w=1470&auto=format&fit=crop',
      author: { name: 'Vini Amaral', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop' }
    },
    {
      id: '2',
      title: 'Refatoração: Quando o Código Limpo se torna uma Dívida Técnica',
      summary: 'Nem toda refatoração é saudável. Aprenda a identificar o ponto de equilíbrio entre perfeccionismo técnico e entrega de valor.',
      category: 'Engenharia de Software',
      date: '10 Mai, 2024',
      readTime: '15 min de leitura',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1528&auto=format&fit=crop',
      author: { name: 'Vini Amaral', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop' }
    },
    {
      id: '3',
      title: 'Automatizando QA com Testes Baseados em LLMs',
      summary: 'Como integrar modelos de linguagem no seu pipeline de CI/CD para identificar bugs lógicos antes do deploy.',
      category: 'IA & Automação',
      date: '02 Mai, 2024',
      readTime: '6 min de leitura',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop',
      author: { name: 'Vini Amaral', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop' }
    },
    {
      id: '4',
      title: 'Domain-Driven Design na Prática: Descomplicando Conceitos',
      summary: 'Um guia prático sobre como implementar DDD sem cair nas armadilhas de complexidade desnecessária.',
      category: 'Engenharia de Software',
      date: '28 Abr, 2024',
      readTime: '10 min de leitura',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop',
      author: { name: 'Vini Amaral', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop' }
    }
  ];

  const filteredPosts = activeFilter === 'Todos' ? posts : posts.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#f8f9fa] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300 overflow-x-hidden">
      <Header 
        currentView={AppView.BLOG} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        
        {/* Featured Post Card */}
        <section className="mb-20 animate-in fade-in slide-in-from-top duration-700">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row items-center">
            <div className="lg:w-[55%] h-[400px] lg:h-[550px] relative overflow-hidden bg-amber-100/30">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4628c975c?q=80&w=1528&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                alt="Featured Post" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white dark:to-slate-900 hidden lg:block"></div>
            </div>
            <div className="lg:w-[45%] p-10 lg:p-20">
              <span className="bg-blue-50 dark:bg-blue-900/30 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Em Destaque</span>
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight">
                O Futuro do Desenvolvimento de Software com IA Generativa
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 font-medium leading-relaxed">
                Como as novas ferramentas de LLM estão transformando o fluxo de trabalho da engenharia de software moderno e o que esperar para os próximos 5 anos.
              </p>
              <div className="flex items-center gap-4 mb-10">
                <img src={posts[0].author.avatar} className="w-10 h-10 rounded-full object-cover" alt="Author" />
                <div>
                  <p className="text-sm font-bold dark:text-white">Vini Amaral</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Engenheiro de Software • 12 min de leitura</p>
                </div>
              </div>
              <button className="bg-primary text-white px-10 py-4 rounded-xl font-black text-sm shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
                Ler Artigo Completo
              </button>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Feed */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {['Todos', 'Engenharia de Software', 'IA & Automação', 'Arquitetura Cloud'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${activeFilter === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white dark:bg-slate-900 text-slate-500 border border-slate-100 dark:border-slate-800 hover:bg-slate-50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post, idx) => (
                <article key={post.id} className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 group shadow-sm hover:shadow-xl transition-all animate-in fade-in slide-in-from-bottom duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="relative h-56 overflow-hidden">
                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={post.title} />
                    <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest">{post.category}</span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1.5"><span className="material-icons-round text-xs">schedule</span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                    <div className="flex justify-between items-center pt-6 border-t border-slate-50 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <img src={post.author.avatar} className="w-6 h-6 rounded-full object-cover" alt="Author" />
                        <span className="text-[10px] font-bold dark:text-slate-400">{post.author.name}</span>
                      </div>
                      <button className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                        Ler mais <span className="material-icons-round text-sm">east</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center pt-8">
              <button className="inline-flex items-center gap-3 px-10 py-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl text-sm font-black text-slate-900 dark:text-white hover:bg-slate-50 transition-all shadow-sm">
                Ver Mais Artigos
                <span className="material-icons-round">add</span>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8 animate-in fade-in slide-in-from-right duration-700">
            
            {/* Search */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-6">Busca</h4>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="O que você quer aprender?" 
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-4 pl-6 pr-12 text-sm focus:ring-2 focus:ring-primary dark:text-white transition-all"
                />
                <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
              <div className="relative z-10">
                <h4 className="text-xl font-black mb-4 tracking-tight">Newsletter Técnica</h4>
                <p className="text-xs opacity-80 mb-8 font-medium leading-relaxed">Receba semanalmente insights sobre arquitetura de software e novas tecnologias diretamente no seu e-mail.</p>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-6 text-sm placeholder:text-white/50 focus:ring-2 focus:ring-white outline-none"
                  />
                  <button className="w-full bg-white text-primary py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:brightness-95 active:scale-95 transition-all shadow-xl">
                    Inscrever-se
                  </button>
                </div>
                <p className="text-[8px] opacity-50 mt-4 text-center font-bold uppercase tracking-widest">Respeitamos sua privacidade. Sem spam, nunca.</p>
              </div>
              <span className="material-icons-round absolute -bottom-8 -right-8 text-9xl opacity-10">mail</span>
            </div>

            {/* Popular Topics */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-6">Assuntos Populares</h4>
              <div className="flex flex-wrap gap-2">
                {['#DevOps', '#ReactJS', '#NodeJS', '#Rust', '#Python', '#AWS', '#Terraform', '#Microservices'].map(tag => (
                  <button key={tag} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-[10px] font-bold text-slate-500 rounded-lg border border-slate-100 dark:border-slate-700 hover:text-primary hover:border-primary/30 transition-all">{tag}</button>
                ))}
              </div>
            </div>

            {/* Open Source Ad */}
            <div className="bg-slate-900 dark:bg-slate-800 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary">
                  <span className="material-icons-round text-xl">terminal</span>
                </div>
                <div>
                  <h5 className="font-black text-sm text-white">Open Source Projects</h5>
                  <p className="text-[10px] text-slate-500 font-bold tracking-widest">@viniamaral</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-medium italic mb-8 leading-relaxed">"Transformando café em código aberto desde 2015."</p>
              <button className="w-full py-3.5 border border-white/10 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                Seguir no GitHub
                <span className="material-icons-round text-sm">open_in_new</span>
              </button>
            </div>
          </aside>
        </div>
      </main>

      <Footer lang={lang} setView={setView} showCTA={false} />
    </div>
  );
};

export default BlogView;
