
import React, { useState } from 'react';
import { Language, AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView, lang, setLang, isDarkMode, setIsDarkMode }) => {
  const navLinks = [
    { label: 'Open Source', view: AppView.OPEN_SOURCE },
    { label: 'Blog', view: AppView.BLOG },
    { label: 'Portfólio', view: AppView.CASE_STUDY },
    { label: 'Sobre', view: AppView.ABOUT },
    { label: 'Contato', view: AppView.CONTACT },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView(AppView.LANDING)}>
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform text-2xl">
            <span className="material-icons-round">code</span>
          </div>
          <span className="text-xl font-black tracking-tight dark:text-white hidden sm:block">
            Vini<span className="text-primary">Amaral</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setView(link.view)}
              className={`text-sm font-bold transition-colors ${
                currentView === link.view
                  ? 'text-primary'
                  : 'text-slate-500 dark:text-slate-400 hover:text-primary'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-primary transition-all hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              <span className="material-icons-round text-lg">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>

            {/* Language Pill Switcher */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
              {(['PT', 'EN'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l.toLowerCase() as Language)}
                  className={`px-4 py-1 rounded-full text-[10px] font-black transition-all ${
                    lang.toUpperCase() === l
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Botão de Login substituindo o antigo botão azul de contato */}
        <button
          onClick={() => setView(AppView.LOGIN_CLIENT)}
          className="bg-primary text-white px-8 py-2.5 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <span className="material-icons-round text-sm">login</span>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;
