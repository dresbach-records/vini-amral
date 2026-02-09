
import React, { useState } from 'react';
import { Language, AppView } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ContactProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setView: (v: AppView) => void;
}

const ContactView: React.FC<ContactProps> = ({ lang, setLang, isDarkMode, setIsDarkMode, setView }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#f0f4f8] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300 overflow-x-hidden">
      <Header 
        currentView={AppView.CONTACT} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[2rem] p-10 md:p-14 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Envie uma mensagem</h1>
            <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium leading-relaxed">
              Tem um projeto em mente ou quer apenas dizer um "oi"? Sinta-se à vontade para entrar em contato.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Nome</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Seu nome completo"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-primary dark:text-white transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">E-mail</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="email@exemplo.com"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-primary dark:text-white transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Assunto</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Em que posso ajudar?"
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-primary dark:text-white transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Mensagem</label>
                <textarea 
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-primary dark:text-white transition-all placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitted}
                className={`w-full md:w-auto bg-primary text-white px-10 py-4 rounded-xl font-black text-sm shadow-xl shadow-primary/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 ${isSubmitted ? 'brightness-75' : ''}`}
              >
                {isSubmitted ? 'Mensagem Enviada!' : 'Enviar Mensagem'}
                <span className="material-icons-round text-lg">send</span>
              </button>
            </form>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-right duration-700">
            {/* Direct Connect Card */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-xl border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Conecte-se diretamente</h3>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-icons-round">alternate_email</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">E-mail Profissional</p>
                    <p className="font-bold dark:text-white">vini.amaral@dev.io</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-icons-round">place</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Localização</p>
                    <p className="font-bold dark:text-white">São Paulo, Brasil <span className="text-slate-400 font-medium">(Remoto)</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Scheduling Card */}
            <div className="bg-primary rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20">
               <div className="p-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                     <span className="material-icons-round text-lg">calendar_today</span>
                     <h4 className="font-bold text-sm tracking-tight">Agende uma conversa</h4>
                  </div>
                  <p className="text-xs opacity-80 font-medium">Reserve 15-30 minutos na minha agenda.</p>
               </div>
               
               <div className="bg-white dark:bg-slate-800 p-8 m-1 rounded-b-[1.8rem]">
                  <div className="flex flex-col items-center text-center">
                     <div className="relative mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop" 
                          className="w-20 h-20 rounded-full object-cover border-4 border-slate-50 dark:border-slate-700 shadow-lg"
                          alt="Vini Amaral"
                        />
                        <div className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                     </div>
                     <h5 className="font-black text-slate-900 dark:text-white mb-1">Intro Call - Vini Amaral</h5>
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-8">30 min • Video Call</p>
                     
                     <button className="w-full py-3.5 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95">
                        Ver Horários Disponíveis
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <section className="w-full aspect-[21/9] bg-slate-200 dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden flex items-center justify-center group mb-20">
           <div className="absolute inset-0 bg-slate-300/20 dark:bg-primary/5 blur-3xl opacity-50"></div>
           <button className="relative z-10 bg-white dark:bg-slate-800 px-8 py-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 font-black text-xs uppercase tracking-widest text-slate-700 dark:text-white hover:scale-105 transition-all active:scale-95">
              <span className="material-icons-round text-primary">map</span>
              Ver localização no mapa
           </button>
           <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
        </section>
      </main>

      <Footer lang={lang} setView={setView} showCTA={false} />
    </div>
  );
};

export default ContactView;
