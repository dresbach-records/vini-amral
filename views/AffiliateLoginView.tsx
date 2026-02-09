
import React, { useState } from 'react';
import { Language, AppView } from '../types';

interface AffiliateLoginProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
  onSuccess: () => void;
}

const AffiliateLoginView: React.FC<AffiliateLoginProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300 font-sans">
      {/* Absolute Header with Home Link Only */}
      <nav className="absolute top-0 w-full px-8 py-8 flex items-center justify-between pointer-events-none">
        <button 
          onClick={() => setView(AppView.LANDING)}
          className="pointer-events-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors group"
        >
          <span className="material-icons-round text-lg transition-transform group-hover:-translate-x-1">west</span>
          Voltar para Home
        </button>

        <div className="pointer-events-auto flex items-center gap-4">
           {/* Simple Theme Toggle */}
           <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-all border border-slate-100 dark:border-slate-800 shadow-sm"
          >
            <span className="material-icons-round text-lg">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
        </div>
      </nav>

      {/* Login Card Container */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full animate-in fade-in zoom-in duration-700">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-12 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 text-center">
            
            <div className="flex justify-center mb-8">
               <div className="w-16 h-16 bg-primary/10 rounded-[1.5rem] flex items-center justify-center text-primary">
                  <span className="material-icons-round text-4xl">handshake</span>
               </div>
            </div>

            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Portal de Afiliados</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-12 px-4">
              Acesse sua conta para gerenciar suas vendas e comissões de parceiro.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-900 dark:text-white pl-1">E-mail</label>
                <div className="relative">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-50 dark:border-slate-800 rounded-2xl py-4 px-6 text-sm focus:ring-0 focus:border-primary dark:text-white transition-all placeholder:text-slate-400"
                  />
                  <span className="material-icons-round absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold text-slate-900 dark:text-white">Senha</label>
                  <button type="button" className="text-[10px] font-bold text-primary hover:underline">Esqueci minha senha</button>
                </div>
                <div className="relative">
                  <input 
                    type={showPass ? "text" : "password"} 
                    required
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-50 dark:border-slate-800 rounded-2xl py-4 px-6 text-sm focus:ring-0 focus:border-primary dark:text-white transition-all placeholder:text-slate-400"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPass(!showPass)}
                    className="material-icons-round absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                  >
                    {showPass ? 'visibility_off' : 'visibility'}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 px-1">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-5 h-5 rounded-lg border-slate-200 dark:border-slate-700 text-primary focus:ring-0" 
                />
                <label htmlFor="remember" className="text-xs font-bold text-slate-500 dark:text-slate-400 cursor-pointer">Manter conectado</label>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                Entrar no Portal
                <span className="material-icons-round">login</span>
              </button>
            </form>

            <div className="relative mt-12 mb-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100 dark:border-slate-800"></div></div>
              <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white dark:bg-slate-900 px-4 mx-auto w-fit">Novo por aqui?</div>
            </div>

            <p className="text-xs font-medium text-slate-500">
              Ainda não é um afiliado? <button className="text-primary font-bold hover:underline">Cadastre-se aqui</button>
            </p>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-12 flex justify-center gap-8">
        <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Privacidade</button>
        <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mt-1.5"></span>
        <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Termos de Uso</button>
        <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mt-1.5"></span>
        <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Suporte Técnico</button>
      </footer>
    </div>
  );
};

export default AffiliateLoginView;
