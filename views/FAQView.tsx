
import React, { useState } from 'react';
import { getAIResponse } from '../services/geminiService';
import { AppView, Language } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface FAQProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const FAQView: React.FC<FAQProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const suggested = [
    "Como funciona a precificação?",
    "Quais stacks o Vini utiliza?",
    "Quanto tempo leva um MVP?",
    "Vocês fazem apps mobile?"
  ];

  const handleAsk = async (text: string) => {
    if (!text.trim()) return;
    setLoading(true);
    setQuery(text);
    const res = await getAIResponse('faq', text);
    setResponse(res || "Não consegui processar agora.");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col transition-colors duration-300">
      <Header 
        currentView={AppView.FAQ} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-40 pb-24">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          <h1 className="text-4xl md:text-7xl font-black mb-6 dark:text-white tracking-tighter">FAQ <span className="text-primary">Inteligente</span></h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">Tire suas dúvidas técnicas ou de negócio diretamente com nossa IA treinada na metodologia do Vini.</p>
        </div>

        <div className="relative mb-12 animate-in fade-in zoom-in duration-500">
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAsk(query)}
            className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-primary rounded-[2rem] py-8 px-10 text-lg shadow-2xl shadow-slate-200/50 dark:shadow-none transition-all pr-24 dark:text-white placeholder:text-slate-400 outline-none font-medium"
            placeholder="Ex: Como é o processo de Discovery?"
          />
          <button 
            onClick={() => handleAsk(query)}
            disabled={loading}
            className="absolute right-4 top-4 bottom-4 px-8 bg-primary text-white rounded-2xl font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95"
          >
            {loading ? <span className="animate-spin material-icons-round">sync</span> : <span className="material-icons-round">send</span>}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          {suggested.map((s, i) => (
            <button 
              key={i}
              onClick={() => handleAsk(s)}
              className="p-6 text-left border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-primary hover:bg-primary/5 transition-all group bg-white dark:bg-slate-900/50 shadow-sm"
            >
              <p className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">{s}</p>
            </button>
          ))}
        </div>

        {response && (
          <div className="bg-primary/5 border border-primary/20 p-10 rounded-[3rem] animate-in slide-in-from-bottom-4 fade-in duration-500 mb-20 shadow-xl shadow-primary/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="material-icons-round text-2xl">smart_toy</span>
              </div>
              <div>
                <p className="text-xs font-black text-primary uppercase tracking-widest">Resposta da IA</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Analista Técnico Disponível</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-medium whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </main>

      <Footer lang={lang} setView={setView} showCTA={false} />
    </div>
  );
};

export default FAQView;
