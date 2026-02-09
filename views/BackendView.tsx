
import React from 'react';
import { Language, AppView } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface BackendProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const BackendView: React.FC<BackendProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  return (
    <div className="bg-[#fcfdfe] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300 overflow-x-hidden">
      <Header 
        currentView={AppView.BACKEND_APIS} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-20 relative z-10">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary border border-blue-100 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
              <span className="material-icons-round text-sm">terminal</span>
              Software Engineering Portfolio
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-black text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter">
              Backend & APIs: <br/>
              <span className="text-primary italic">Sistemas Robustos</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-medium mb-12">
              Arquitetura de alta performance focada em escalabilidade, segurança e integridade de dados. Transformando lógica complexa em infraestruturas resilientes.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="bg-white dark:bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2 shadow-sm">
                  <span className="material-icons-round text-primary text-sm">verified</span>
                  <span className="text-[10px] font-black uppercase text-slate-400">99.9% Uptime</span>
               </div>
               <div className="bg-white dark:bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2 shadow-sm">
                  <span className="material-icons-round text-primary text-sm">security</span>
                  <span className="text-[10px] font-black uppercase text-slate-400">Zero Trust Architecture</span>
               </div>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000">
             <div className="bg-[#0f172a] rounded-3xl border border-white/10 shadow-3xl overflow-hidden font-mono text-[11px] leading-relaxed">
                <div className="bg-slate-800/50 px-5 py-3 border-b border-white/5 flex items-center justify-between">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                   </div>
                   <span className="text-slate-500 uppercase text-[9px] font-bold tracking-widest">api-v1-service.controller.ts</span>
                </div>
                <div className="p-8 text-slate-300">
                   <p className="mb-1"><span className="text-purple-400">@Post</span>(<span className="text-emerald-400">'/deploy/microservice'</span>)</p>
                   <p className="mb-1"><span className="text-blue-400">async</span> <span className="text-yellow-400">initializeInfrastructure</span>(<span className="text-purple-400">@Body</span>() config: <span className="text-blue-400">Config</span>) {'{'}</p>
                   <p className="mb-1 pl-4 text-slate-500 italic">// Initialize cluster with load balancing</p>
                   <p className="mb-1 pl-4"><span className="text-blue-400">const</span> cluster = <span className="text-blue-400">await</span> <span className="text-purple-400">this</span>.k8s.<span className="text-yellow-400">createDeployment</span>({'{'}</p>
                   <p className="mb-1 pl-8">replicas: <span className="text-orange-400">3</span>,</p>
                   <p className="mb-1 pl-8">strategy: <span className="text-emerald-400">'RollingUpdate'</span>,</p>
                   <p className="mb-1 pl-8">security: <span className="text-emerald-400">'OAuth2+JWT'</span></p>
                   <p className="mb-1 pl-4">{'}'});</p>
                   <p className="mb-1 pl-4"><span className="text-blue-400">return</span> {'{'} status: <span className="text-orange-400">201</span>, clusterId: cluster.id {'}'};</p>
                   <p className="mb-1">{'}'}</p>
                </div>
                <div className="bg-slate-900/80 px-5 py-3 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Response Time: 42ms</span>
                   <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Success</span>
                </div>
             </div>
             {/* Glow */}
             <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Especialidades Técnicas</h2>
        <p className="text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">Engenharia de software focada em resolver problemas de larga escala com padrões de design modernos e eficientes.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { 
              title: 'Arquitetura de Microserviços', 
              icon: 'hub', 
              desc: 'Desenvolvimento de sistemas desacoplados utilizando Docker, Kubernetes e mensageria (RabbitMQ/Kafka) para garantir independência e escalabilidade horizontal.',
              tags: ['DOCKER', 'K8S', 'GRPC']
            },
            { 
              title: 'APIs RESTful & GraphQL', 
              icon: 'api', 
              desc: 'Design de APIs intuitivas e bem documentadas (Swagger/Postman). Otimização de queries GraphQL e implementação de versionamento robusto.',
              tags: ['NODE.JS', 'APOLLO', 'NESTJS']
            },
            { 
              title: 'Escalabilidade de Banco', 
              icon: 'storage', 
              desc: 'Modelagem de dados complexa em SQL e NoSQL. Expertise em otimização de consultas, sharding, replicação e estratégias de indexação avançadas.',
              tags: ['POSTGRESQL', 'MONGODB', 'REDIS']
            }
          ].map((spec, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-icons-round text-3xl">{spec.icon}</span>
              </div>
              <h3 className="text-xl font-black mb-4 dark:text-white tracking-tight">{spec.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-medium">{spec.desc}</p>
              <div className="flex gap-2">
                {spec.tags.map(tag => (
                  <span key={tag} className="text-[8px] font-black text-slate-400 border border-slate-100 dark:border-slate-800 px-2 py-1 rounded uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Data Flow & Architecture Diagram Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
         <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-tight dark:text-white">
              Fluxo de Dados & <br/> Arquitetura
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-12 font-medium">
              Cada sistema é desenhado para minimizar latência e maximizar a segurança. Meus diagramas refletem uma infraestrutura cloud-native moderna onde cada componente tem uma responsabilidade única.
            </p>
            <div className="space-y-8">
               {[
                 { title: 'Edge Computing', desc: 'Filtragem inicial e cache em camadas CDN.', icon: 'check_circle' },
                 { title: 'API Gateway', desc: 'Roteamento centralizado, Rate Limiting e Auth Check.', icon: 'check_circle' },
                 { title: 'Event Driven Architecture', desc: 'Processamento assíncrono para tarefas pesadas.', icon: 'check_circle' }
               ].map(item => (
                 <div key={item.title} className="flex gap-4">
                    <span className="material-icons-round text-primary mt-1">{item.icon}</span>
                    <div>
                       <h4 className="font-black dark:text-white text-sm">{item.title}</h4>
                       <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
         
         <div className="flex-1 w-full relative">
            <div className="bg-white dark:bg-slate-900 p-12 rounded-[3.5rem] shadow-3xl border border-slate-100 dark:border-slate-800 text-center">
               <div className="flex justify-center gap-10 mb-10">
                  <div className="flex flex-col items-center gap-2">
                     <span className="material-icons-round text-slate-400">laptop</span>
                     <span className="text-[8px] font-bold text-slate-400 uppercase">Web Client</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <span className="material-icons-round text-slate-400">smartphone</span>
                     <span className="text-[8px] font-bold text-slate-400 uppercase">Mobile App</span>
                  </div>
               </div>
               
               <div className="w-1 h-12 bg-slate-100 dark:bg-slate-800 mx-auto mb-4"></div>
               
               <div className="bg-primary text-white py-3 px-8 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/30 mx-auto inline-block mb-10">
                  Gateway / Auth
               </div>
               
               <div className="grid grid-cols-3 gap-4 mb-10">
                  {['Users SV', 'Orders SV', 'Billing SV'].map(sv => (
                    <div key={sv} className="border border-slate-100 dark:border-slate-800 p-4 rounded-xl flex flex-col items-center gap-2">
                       <span className="text-[9px] font-black dark:text-white uppercase">{sv}</span>
                       <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                       </div>
                    </div>
                  ))}
               </div>
               
               <div className="w-1 h-12 bg-slate-100 dark:bg-slate-800 mx-auto mb-4"></div>
               
               <div className="flex justify-center gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white">
                     <span className="material-icons-round">database</span>
                  </div>
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white">
                     <span className="material-icons-round">bolt</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Performance & Security Row */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center">
                     <span className="material-icons-round text-2xl">verified_user</span>
                  </div>
                  <h2 className="text-3xl font-black tracking-tight">Segurança Robusta</h2>
               </div>
               <p className="text-slate-400 font-medium leading-relaxed mb-10">Implementação de padrões de segurança de nível bancário para proteção de dados sensíveis e autenticação segura.</p>
               
               <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/5 font-mono text-[10px] space-y-3">
                  <div className="flex justify-between items-center text-slate-500 border-b border-white/5 pb-3">
                     <span>AUTH IMPLEMENTATION</span>
                     <span className="text-emerald-500">ENCRYPTED</span>
                  </div>
                  <div className="flex justify-between">
                     <span>OAuth2 & OpenID Connect</span>
                     <span className="material-icons-round text-sm text-emerald-500">check_circle</span>
                  </div>
                  <div className="flex justify-between">
                     <span>JWT (JSON Web Tokens)</span>
                     <span className="material-icons-round text-sm text-emerald-500">check_circle</span>
                  </div>
                  <div className="flex justify-between">
                     <span>RBAC & ACL Policies</span>
                     <span className="material-icons-round text-sm text-emerald-500">check_circle</span>
                  </div>
                  <div className="flex justify-between">
                     <span>Data Encryption at Rest</span>
                     <span className="material-icons-round text-sm text-emerald-500">check_circle</span>
                  </div>
               </div>
            </div>

            <div>
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center">
                     <span className="material-icons-round text-2xl">bolt</span>
                  </div>
                  <h2 className="text-3xl font-black tracking-tight">Alta Performance</h2>
               </div>
               <p className="text-slate-400 font-medium leading-relaxed mb-10">Otimização de cada milissegundo para garantir a melhor experiência do usuário final, mesmo sob carga intensa.</p>
               
               <div className="space-y-6">
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                     <h4 className="font-bold text-sm mb-4">Caching Strategy</h4>
                     <p className="text-[10px] text-slate-400 leading-relaxed mb-6 font-medium">Implementação de Redis multi-camada para redução de carga no DB e respostas instantâneas.</p>
                     <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-primary w-[85%] rounded-full"></div>
                     </div>
                     <div className="flex justify-between text-[8px] font-black text-slate-500 uppercase tracking-widest">
                        <span>CACHE MISS: 15%</span>
                        <span className="text-primary">CACHE HIT: 85%</span>
                     </div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                     <h4 className="font-bold text-sm mb-4">Load Balancing</h4>
                     <p className="text-[10px] text-slate-400 leading-relaxed mb-6 font-medium">Distribuição inteligente de tráfego usando Nginx e ferramentas Cloud Native.</p>
                     <div className="flex flex-wrap gap-2">
                        {['Round Robin', 'Least Conn', 'IP Hash'].map(algo => (
                           <span key={algo} className="bg-white/5 px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest">{algo}</span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Tech Stack Row */}
      <section className="py-24 text-center opacity-40">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-12">Tecnologias de Domínio</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 text-xl font-black tracking-tighter grayscale">
          {['Node.js', 'TypeScript', 'GoLang', 'PostgreSQL', 'Kubernetes', 'AWS', 'GraphQL'].map(t => (
            <span key={t} className="hover:text-primary transition-colors cursor-default">{t}</span>
          ))}
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-primary rounded-[3.5rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-3xl shadow-primary/30">
           <h2 className="text-5xl md:text-[5rem] font-black mb-10 tracking-tighter leading-none relative z-10">
             Pronto para construir <br/> sistemas que escalam?
           </h2>
           <p className="text-xl opacity-80 max-w-2xl mx-auto mb-16 relative z-10 font-medium">
             Se você precisa de uma API sólida, um sistema de microserviços eficiente ou quer otimizar sua infraestrutura atual, vamos conversar.
           </p>
           <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button onClick={() => setView(AppView.ONBOARDING)} className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-sm shadow-2xl hover:brightness-110 active:scale-95 transition-all">
                 Iniciar um Projeto
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-sm hover:bg-white/10 active:scale-95 transition-all">
                 Ver Documentação API
              </button>
           </div>
           {/* Background elements */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
        </div>
      </section>

      <Footer lang={lang} setView={setView} showCTA={false} />
    </div>
  );
};

export default BackendView;
