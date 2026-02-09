
import React from 'react';
import { Language, AppView } from '../types';

interface FooterProps {
  lang: Language;
  setView: (v: AppView) => void;
  showCTA?: boolean;
}

const Footer: React.FC<FooterProps> = ({ lang, setView, showCTA = true }) => {
  return (
    <footer className="bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100 dark:border-slate-900">
      {showCTA && (
        <section className="max-w-7xl mx-auto px-6 mb-24 mt-24">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-3xl shadow-primary/20">
            <div className="relative z-10 max-w-2xl text-center md:text-left mb-10 md:mb-0">
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Vamos criar algo incrível?</h2>
              <p className="text-lg opacity-80 max-w-lg font-medium">Estou sempre aberto a novos desafios e colaborações de engenharia de software.</p>
            </div>
            <button 
              onClick={() => setView(AppView.FAQ)}
              className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition-all relative z-10 whitespace-nowrap active:scale-95"
            >
              Entrar em Contato
            </button>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </section>
      )}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => setView(AppView.LANDING)}>
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <span className="material-icons-round">code</span>
            </div>
            <span className="text-xl font-black tracking-tight dark:text-white">
              Vini<span className="text-primary">Amaral</span>
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 max-w-sm font-medium">
            Engenheiro de Software especializado em ecossistemas mobile e arquiteturas escaláveis. Foco em IA, Cloud e SaaS.
          </p>
          <div className="flex gap-4">
             <button className="w-10 h-10 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-primary transition-all shadow-sm">
              <span className="material-icons-round text-lg">link</span>
            </button>
            <button className="w-10 h-10 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-primary transition-all shadow-sm">
              <span className="material-icons-round text-lg">code</span>
            </button>
            <button className="w-10 h-10 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-primary transition-all shadow-sm">
              <span className="material-icons-round text-lg">alternate_email</span>
            </button>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[10px] font-black uppercase text-slate-900 dark:text-white mb-8 tracking-widest opacity-40">Serviços</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-500 dark:text-slate-400">
            <li><button onClick={() => setView(AppView.CUSTOM_APPS)} className="hover:text-primary transition-colors text-left">Apps iOS & Android</button></li>
            <li><button onClick={() => setView(AppView.PWA_APPS)} className="hover:text-primary transition-colors text-left">Web Apps Progressivos</button></li>
            <li><button onClick={() => setView(AppView.IA_DATA_SCIENCE)} className="hover:text-primary transition-colors text-left">IA & Data Science</button></li>
            <li><button onClick={() => setView(AppView.UI_UX_DESIGN)} className="hover:text-primary transition-colors text-left">UI/UX Design</button></li>
            <li><button onClick={() => setView(AppView.BACKEND_APIS)} className="hover:text-primary transition-colors text-left">Backend & APIs</button></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-[10px] font-black uppercase text-slate-900 dark:text-white mb-8 tracking-widest opacity-40">Plataforma</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-500 dark:text-slate-400">
            <li><button onClick={() => setView(AppView.ABOUT)} className="hover:text-primary transition-colors">Sobre Mim</button></li>
            <li><button onClick={() => setView(AppView.WORK_WITH_US)} className="hover:text-primary transition-colors">Trabalhe Conosco</button></li>
            <li><button onClick={() => setView(AppView.BLOG)} className="hover:text-primary transition-colors">Blog Tech</button></li>
            <li>
               <button onClick={() => setView(AppView.OPEN_SOURCE)} className="hover:text-primary transition-colors block mb-4">Open Source</button>
               <button onClick={() => setView(AppView.AFFILIATE_LOGIN)} className="flex items-center gap-2 text-[10px] bg-primary/5 dark:bg-primary/10 px-3 py-1.5 rounded-lg text-primary hover:bg-primary hover:text-white transition-all font-black uppercase tracking-widest border border-primary/20">
                  <span className="material-icons-round text-sm">handshake</span>
                  Login Afiliado
               </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto py-12 px-6 border-t border-slate-50 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
           <div className="flex items-center gap-3">
             <span className="material-icons-round text-lg opacity-50">copyright</span>
             2024 Vini Amaral. Todos os direitos reservados.
           </div>
           <button 
             onClick={() => setView(AppView.LOGIN_ADM)}
             className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg hover:text-primary transition-colors border border-transparent hover:border-primary/20 group"
           >
             <span className="material-icons-round text-[14px] opacity-50 group-hover:opacity-100">admin_panel_settings</span>
             Acesso Administrativo
           </button>
        </div>
        <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <button className="hover:text-primary transition-colors">Privacidade</button>
          <button className="hover:text-primary transition-colors">Termos</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
