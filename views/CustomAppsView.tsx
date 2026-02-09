
import React from 'react';
import { Language, AppView } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface CustomAppsProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const CustomAppsView: React.FC<CustomAppsProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  return (
    <div className="bg-[#f8faff] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300 overflow-x-hidden">
      <Header 
        currentView={AppView.CUSTOM_APPS} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
              Expert em desenvolvimento mobile
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-black text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter">
              Apps <br/>
              Customizados & <br/>
              Experiência <br/>
              <span className="text-primary italic">Mobile.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-medium mb-12">
              Transformo visões complexas em aplicativos de alta performance, escaláveis e intuitivos. Do conceito ao deploy nas lojas.
            </p>
            <div className="flex flex-wrap gap-5">
               <button onClick={() => setView(AppView.ONBOARDING)} className="bg-primary text-white px-10 py-4 rounded-xl font-black text-sm shadow-2xl shadow-primary/30 hover:brightness-110 transition-all active:scale-95 flex items-center gap-2">
                  Agendar Consultoria
                  <span className="material-icons-round text-lg">east</span>
               </button>
               <button onClick={() => setView(AppView.CASE_STUDY)} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-10 py-4 rounded-xl font-black text-sm hover:bg-slate-50 transition-all">
                  Ver Cases
               </button>
            </div>
          </div>

          <div className="flex-1 relative animate-in fade-in zoom-in duration-1000">
             <div className="relative z-10 p-4 bg-gradient-to-br from-blue-500/20 to-transparent rounded-[3rem] border border-white/50 dark:border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop" 
                  className="w-full max-w-md mx-auto rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-slate-900"
                  alt="App Mockup" 
                />
             </div>
             
             {/* Performance Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-50 dark:border-slate-800 flex items-center gap-4 animate-bounce z-20">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                   <span className="material-icons-round">bolt</span>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-400">PERFORMANCE</p>
                   <h4 className="text-xl font-black dark:text-white">99% Score</h4>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Desenvolvimento Nativo vs Híbrido</h2>
        <p className="text-slate-500 font-medium mb-16 max-w-2xl mx-auto">Escolha a abordagem técnica ideal para os seus objetivos de negócio e orçamento.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-slate-900 p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm text-left hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-xl flex items-center justify-center mb-8">
                <span className="material-icons-round text-3xl">smartphone</span>
              </div>
              <h3 className="text-2xl font-black mb-6 dark:text-white">Nativo (Swift/Kotlin)</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 font-medium">
                Máxima performance e acesso total às APIs de hardware. Ideal para apps com uso intensivo de processamento, games ou recursos específicos do sistema.
              </p>
              <ul className="space-y-4">
                 {['Performance de ponta', 'UX 100% aderente ao sistema', 'Offline-first robusto'].map(item => (
                   <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                     <span className="material-icons-round text-emerald-500 text-lg">check_circle</span>
                     {item}
                   </li>
                 ))}
              </ul>
           </div>

           <div className="bg-white dark:bg-slate-900 p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm text-left hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-xl flex items-center justify-center mb-8">
                <span className="material-icons-round text-3xl">devices</span>
              </div>
              <h3 className="text-2xl font-black mb-6 dark:text-white">Híbrido (React Native/Flutter)</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 font-medium">
                Um único código para iOS e Android. Ideal para acelerar o Time-to-Market e otimizar custos de manutenção sem perder a qualidade visual.
              </p>
              <ul className="space-y-4">
                 {['Custo-benefício otimizado', 'Manutenção simplificada', 'Entrega Multiplataforma'].map(item => (
                   <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                     <span className="material-icons-round text-emerald-500 text-lg">check_circle</span>
                     {item}
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      {/* DNA Quality Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
         <div className="flex-1 grid grid-cols-2 gap-6">
            {[
              { label: 'UX Intuitiva', desc: 'Design focado na redução da carga cognitiva.', icon: 'touch_app' },
              { label: 'Segurança', desc: 'Criptografia e conformidade com LGPD.', icon: 'security' },
              { label: 'Integrações', desc: 'Conectividade com ERPs, CRMs e Gateways.', icon: 'hub' },
              { label: 'Analytics', desc: 'Tracking completo da jornada do usuário.', icon: 'insights' }
            ].map(item => (
              <div key={item.label} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <span className="material-icons-round text-xl">{item.icon}</span>
                </div>
                <h4 className="font-black mb-2 dark:text-white text-sm">{item.label}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-tight">{item.desc}</p>
              </div>
            ))}
         </div>
         
         <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight leading-tight dark:text-white">
              Qualidade no <span className="text-primary italic">DNA</span> do Produto
            </h2>
            <div className="space-y-10">
               <div>
                  <div className="flex items-center gap-3 mb-4">
                     <span className="material-icons-round text-primary">auto_fix_high</span>
                     <h4 className="text-xl font-black dark:text-white">UX/UI Centrada no Usuário</h4>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium pl-9">
                    Desenvolvo protótipos navegáveis de alta fidelidade que validam a ideia antes de escrever a primeira linha de código, garantindo interfaces que encantam e convertem.
                  </p>
               </div>
               <div>
                  <div className="flex items-center gap-3 mb-4">
                     <span className="material-icons-round text-primary">terminal</span>
                     <h4 className="text-xl font-black dark:text-white">Integrações de API & Backend</h4>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium pl-9">
                    Construção de ecossistemas conectados. Garantimos que seu app se comunique perfeitamente com qualquer serviço terceiro ou legado através de APIs RESTful ou GraphQL.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Path to Deploy */}
      <section className="py-24 text-center">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">O Caminho até o Deploy</h2>
            <p className="text-slate-500 font-medium mb-20 max-w-2xl mx-auto">Um processo transparente e ágil para transformar código em valor.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { step: '01', label: 'Protótipo', icon: 'wb_incandescent', desc: 'Wireframes e UI Design para validar fluxos e usabilidade.' },
                 { step: '02', label: 'Coding', icon: 'code', desc: 'Desenvolvimento ágil seguindo as melhores práticas de Clean Code.' },
                 { step: '03', label: 'QA & Testes', icon: 'bug_report', desc: 'Testes automatizados e manuais em diversos dispositivos reais.' },
                 { step: '04', label: 'Deploy', icon: 'rocket_launch', desc: 'Submissão e aprovação na Apple App Store e Google Play Store.' }
               ].map(item => (
                 <div key={item.step} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-primary transition-all">
                    <span className="absolute top-6 right-8 text-4xl font-black text-slate-50 dark:text-slate-800 transition-colors group-hover:text-primary/10">{item.step}</span>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-8 relative z-10">
                      <span className="material-icons-round text-2xl">{item.icon}</span>
                    </div>
                    <h4 className="text-lg font-black mb-3 dark:text-white relative z-10">{item.label}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-relaxed relative z-10">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA Visual Reference Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
         <div className="bg-primary rounded-[3.5rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-3xl shadow-primary/30">
            <h2 className="text-5xl md:text-[5rem] font-black mb-10 tracking-tighter leading-none relative z-10">
              Vamos construir algo incrível <br/> juntos?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-16 relative z-10 font-medium">
              Meu foco é criar tecnologia que resolve problemas reais. Fale comigo e vamos dar vida ao seu app.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
               <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-sm shadow-2xl hover:brightness-110 active:scale-95 transition-all">
                  Solicitar Orçamento
               </button>
               <button onClick={() => setView(AppView.SERVICES)} className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-sm hover:bg-white/10 active:scale-95 transition-all">
                  Ver Stack Completa
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

export default CustomAppsView;
