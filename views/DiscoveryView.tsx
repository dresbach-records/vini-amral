
import React, { useState, useRef, useEffect } from 'react';
import { Message, ProjectGoal, ArchitectureNode } from '../types';
import { generateTechnicalResponse } from '../services/geminiService';

interface DiscoveryProps {
  onPortal: () => void;
}

const DiscoveryView: React.FC<DiscoveryProps> = ({ onPortal }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Olá! Sou o Estrategista Técnico IA do Vini. Estou aqui para traduzir sua visão de negócio em um blueprint técnico. \n\nPara começar, conte-me um pouco sobre o problema central que você quer resolver ou a inovação que planeja.",
      timestamp: '09:41'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [blueprint, setBlueprint] = useState({
    type: 'Logistics Analytics',
    industry: 'Transportation & Tech',
    complexity: 3,
    goals: [
      { id: '1', text: 'Real-time GPS processing & visualization', completed: true },
      { id: '2', text: 'Predictive delay estimation via ML', completed: true },
    ] as ProjectGoal[],
    nodes: [
      { category: 'Backend', technology: 'FastAPI / Python' },
      { category: 'Stream', technology: 'Redis / Kafka' },
      { category: 'DB', technology: 'TimescaleDB' },
      { category: 'Frontend', technology: 'Next.js 14' }
    ] as ArchitectureNode[]
  });

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg: Message = { role: 'user', content: input, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const aiResponse = await generateTechnicalResponse(input, messages);
    
    const assistantMsg: Message = { 
      role: 'assistant', 
      content: aiResponse || "Interessante! Isso sugere uma arquitetura escalável. Estou atualizando seu blueprint agora.", 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    setMessages(prev => [...prev, assistantMsg]);
    setIsTyping(false);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Header */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
            <span className="material-icons-round text-sm">terminal</span>
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-tight">VINI AMARAL <span className="text-primary">CONSULTANCY</span></h1>
            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest leading-none">AI Onboarding Hub v2.4</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="h-8 w-8 rounded-full overflow-hidden bg-slate-200 border border-slate-200">
            <img src="https://picsum.photos/32/32" alt="Avatar" />
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Chat Feed */}
        <section className="flex-1 flex flex-col bg-white dark:bg-slate-900 relative">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 max-w-3xl ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${msg.role === 'assistant' ? 'bg-primary/10 text-primary' : 'bg-slate-200 text-slate-500'}`}>
                  <span className="material-icons-round text-lg">{msg.role === 'assistant' ? 'smart_toy' : 'person'}</span>
                </div>
                <div className={`space-y-2 ${msg.role === 'user' ? 'text-right' : ''}`}>
                  <div className={`p-4 rounded-xl shadow-sm border ${msg.role === 'assistant' ? 'bg-background-light dark:bg-slate-800 rounded-tl-none border-slate-100 dark:border-slate-700' : 'bg-primary text-white rounded-tr-none border-primary'}`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono">{msg.timestamp}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-4 max-w-3xl">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-icons-round text-lg animate-pulse">smart_toy</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl rounded-tl-none border border-slate-100 dark:border-slate-700">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-4xl mx-auto">
              <div className="relative flex items-center">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="w-full bg-background-light dark:bg-slate-800 border-none rounded-xl py-4 pl-12 pr-16 text-sm focus:ring-2 focus:ring-primary placeholder:text-slate-400"
                  placeholder="Descreva os detalhes técnicos do seu projeto..."
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-3 bg-primary text-white p-2 rounded-lg hover:brightness-110 transition-all"
                >
                  <span className="material-icons-round">send</span>
                </button>
              </div>
              <div className="mt-3 flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono uppercase">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Agente IA Online
                </div>
                <button onClick={onPortal} className="text-[10px] font-bold text-primary uppercase hover:underline">
                  Gerar Projeto Completo &gt;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Blueprint Sidebar */}
        <aside className="w-96 border-l border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6 overflow-y-auto custom-scrollbar hidden xl:flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xs uppercase tracking-widest text-slate-400">Blueprint do Projeto</h2>
            <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded font-bold uppercase">v0.1-Alpha</span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                <span className="material-icons-round">category</span>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-slate-400">Tipo de Projeto</p>
                <h3 className="text-sm font-bold">{blueprint.type}</h3>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Indústria</span>
                <span className="font-medium">{blueprint.industry}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Complexidade</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`w-3 h-1 rounded-full ${i < blueprint.complexity ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-slate-400">Objetivos Extraídos</h3>
            <ul className="space-y-3">
              {blueprint.goals.map(goal => (
                <li key={goal.id} className="flex items-start gap-3">
                  <span className="material-icons-round text-green-500 text-sm mt-0.5">check_circle</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{goal.text}</p>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <span className="material-icons-round text-slate-300 dark:text-slate-700 text-sm mt-0.5">radio_button_unchecked</span>
                <p className="text-xs text-slate-400 italic">Aguardando mais detalhes...</p>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Nodes de Arquitetura</h3>
            <div className="grid grid-cols-2 gap-2">
              {blueprint.nodes.map((node, i) => (
                <div key={i} className="p-2 rounded bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <p className="text-[9px] font-mono text-slate-400 uppercase">{node.category}</p>
                  <p className="text-[11px] font-bold text-primary">{node.technology}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg overflow-hidden relative group">
            <div className="relative z-10">
              <h4 className="font-bold text-sm mb-1">Expert Review</h4>
              <p className="text-[10px] opacity-90 mb-3">Vini Amaral revisa pessoalmente cada blueprint em até 24h.</p>
              <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all">
                Solicitar Sync
              </button>
            </div>
            <span className="material-icons-round absolute -bottom-4 -right-4 text-8xl opacity-10 group-hover:scale-110 transition-transform">bolt</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DiscoveryView;
