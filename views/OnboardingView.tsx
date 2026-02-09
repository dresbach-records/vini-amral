
import React, { useState } from 'react';

interface OnboardingProps {
  onContinue: () => void;
  onBack: () => void;
}

const OnboardingView: React.FC<OnboardingProps> = ({ onContinue, onBack }) => {
  const [budget, setBudget] = useState(45000);
  const [selectedType, setSelectedType] = useState('AI Automation');

  const projectTypes = [
    { id: 'ai', title: 'AI Automation', icon: 'psychology', desc: 'Custom LLMs, workflow agents, and smart data processing.' },
    { id: 'web', title: 'Modern Web App', icon: 'language', desc: 'High-performance React/Next.js platforms and dashboards.' },
    { id: 'saas', title: 'SaaS Product', icon: 'cloud_queue', desc: 'Scalable cloud-native software architectures for market.' },
    { id: 'mobile', title: 'Mobile Native', icon: 'smartphone', desc: 'Cross-platform iOS and Android excellence.' }
  ];

  return (
    <div className="bg-soft-blue dark:bg-slate-950 min-h-screen flex">
      {/* Left Sidebar Mockup */}
      <aside className="w-full lg:w-[450px] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col p-12 z-20">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-icons-round">architecture</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Vini Amaral</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Bem-vindo</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Acesse seu workspace de engenharia.</p>
        </div>
        <div className="flex-1">
          <button className="w-full py-4 border border-slate-200 dark:border-slate-700 rounded-xl mb-4 flex items-center justify-center gap-3">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1t4h-YIL6hjt0vRFtEOhJIwDIhqutpx-nuhG0dVOecwDsYcU79uQn2luVmQWeiKMIqhQXMyYgVq-BdEZ95wtU_dsqpVIlpJjZ0dbqjzqby9xplWx4MFiAX9VTjtf8a9ZoTI20rdmhsR2hPtFKq2z9irpABKchNahIov3Pu9KtSW7sLabgTsizInNHUvxbDuP1X8GhNhiU1XdEsWPys69DRviA9ZlxJivPHOY48e2scYGjnllRIwt9iwCKNB_15_5rdszNkJWEYBFO" className="w-5 h-5" alt="Google" />
            <span className="font-semibold">Continuar com Google</span>
          </button>
        </div>
        <div className="mt-auto pt-8 text-center text-xs text-slate-400">
          © 2024 Vini Amaral Engineering.
        </div>
      </aside>

      {/* Main Selection Area */}
      <main className="flex-1 p-8 md:p-24 relative overflow-y-auto custom-scrollbar">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Passo 1 de 3</span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4 leading-tight">Conte-nos sobre sua visão.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Vamos construir algo extraordinário. Selecione o foco principal do seu projeto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {projectTypes.map((type) => (
              <button 
                key={type.id}
                onClick={() => setSelectedType(type.title)}
                className={`group relative p-6 bg-white dark:bg-slate-900 border-2 rounded-xl text-left transition-all ${selectedType === type.title ? 'border-primary shadow-xl' : 'border-transparent hover:border-primary/30 shadow-sm'}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <span className="material-icons-round">{type.icon}</span>
                </div>
                {selectedType === type.title && (
                  <div className="absolute top-4 right-4">
                    <span className="material-icons-round text-primary">check_circle</span>
                  </div>
                )}
                <h3 className="font-bold text-lg mb-1">{type.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{type.desc}</p>
              </button>
            ))}
          </div>

          {/* Budget Slider */}
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur p-8 rounded-2xl border border-white dark:border-slate-800">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-bold text-xl">Orçamento Estimado</h3>
                <p className="text-sm text-slate-500">Nos ajuda a recomendar a stack ideal.</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-primary">R$ {budget.toLocaleString('pt-BR')}</span>
                <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider mt-1">Range de Investimento</span>
              </div>
            </div>
            <input 
              type="range" 
              min="5000" 
              max="250000" 
              step="5000" 
              value={budget} 
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="mt-12 flex items-center justify-between">
            <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">
              <span className="material-icons-round text-lg">west</span>
              Voltar
            </button>
            <button 
              onClick={onContinue}
              className="px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-xl shadow-primary/30 transition-all flex items-center gap-3 active:scale-95"
            >
              Continuar para Detalhes
              <span className="material-icons-round">east</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OnboardingView;
