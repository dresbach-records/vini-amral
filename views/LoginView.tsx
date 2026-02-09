
import React, { useState } from 'react';

interface LoginProps {
  isAdmin: boolean;
  onSuccess: (role: 'client' | 'admin') => void;
  onBack: () => void;
}

const LoginView: React.FC<LoginProps> = ({ isAdmin, onSuccess, onBack }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
        <div className={`p-8 ${isAdmin ? 'bg-slate-900' : 'bg-primary'} text-white text-center relative`}>
          <button onClick={onBack} className="absolute left-6 top-8 opacity-60 hover:opacity-100">
            <span className="material-icons-round">west</span>
          </button>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="material-icons-round text-3xl">{isAdmin ? 'admin_panel_settings' : 'lock'}</span>
          </div>
          <h1 className="text-2xl font-bold">{isAdmin ? 'Acesso Administrativo' : 'Portal do Cliente'}</h1>
          <p className="text-sm opacity-80 mt-1">Insira suas credenciais para continuar</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">E-mail Corporativo</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-primary transition-all" 
              placeholder="vini@exemplo.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Senha</label>
            <input 
              type="password" 
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-primary transition-all" 
              placeholder="••••••••"
            />
          </div>
          
          <button 
            onClick={() => onSuccess(isAdmin ? 'admin' : 'client')}
            className={`w-full py-4 rounded-xl font-bold text-white shadow-xl transition-all active:scale-95 ${isAdmin ? 'bg-slate-900 hover:bg-black' : 'bg-primary hover:bg-primary-dark shadow-primary/25'}`}
          >
            Entrar no Hub
          </button>
          
          {!isAdmin && (
            <div className="text-center">
              <p className="text-xs text-slate-500">Ainda não tem um projeto? <button className="text-primary font-bold">Comece por aqui</button></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginView;
