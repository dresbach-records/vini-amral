
import React, { useState, useEffect } from 'react';
import { AppView, Language } from './types';
import LandingView from './views/LandingView';
import OnboardingView from './views/OnboardingView';
import DiscoveryView from './views/DiscoveryView';
import PortalView from './views/PortalView';
import AdminDashboard from './views/AdminDashboard';
import CaseStudyView from './views/CaseStudyView';
import LoginView from './views/LoginView';
import FAQView from './views/FAQView';
import AboutView from './views/AboutView';
import ServicesView from './views/ServicesView';
import CustomAppsView from './views/CustomAppsView';
import IADataScienceView from './views/IADataScienceView';
import PWAView from './views/PWAView';
import UIUXDesignView from './views/UIUXDesignView';
import BackendView from './views/BackendView';
import ContactView from './views/ContactView';
import WorkWithUsView from './views/WorkWithUsView';
import BlogView from './views/BlogView';
import OpenSourceView from './views/OpenSourceView';
import AffiliateLoginView from './views/AffiliateLoginView';
import AffiliateDashboard from './views/AffiliateDashboard';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.LANDING);
  const [lang, setLang] = useState<Language>('pt');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'client' | 'admin' | 'affiliate' | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/login-adm') {
      setView(AppView.LOGIN_ADM);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLogin = (role: 'client' | 'admin' | 'affiliate') => {
    setIsAuthenticated(true);
    setUserRole(role);
    if (role === 'admin') setView(AppView.ADMIN_DASHBOARD);
    else if (role === 'affiliate') setView(AppView.AFFILIATE_DASHBOARD);
    else setView(AppView.PORTAL);
  };

  const renderView = () => {
    const commonProps = { lang, setLang, isDarkMode, setIsDarkMode, setView };

    switch (view) {
      case AppView.LANDING:
        return <LandingView 
          {...commonProps}
          onStart={() => setView(AppView.ONBOARDING)} 
          onViewProjects={() => setView(AppView.CASE_STUDY)} 
          onFAQ={() => setView(AppView.FAQ)}
          onLogin={() => setView(AppView.LOGIN_CLIENT)}
          onAbout={() => setView(AppView.ABOUT)}
          onServices={() => setView(AppView.SERVICES)}
        />;
      case AppView.ABOUT:
        return <AboutView 
          {...commonProps} 
          onBack={() => setView(AppView.LANDING)}
          onContact={() => setView(AppView.FAQ)}
        />;
      case AppView.SERVICES:
        return <ServicesView 
          {...commonProps}
          onBack={() => setView(AppView.LANDING)}
          onAbout={() => setView(AppView.ABOUT)}
          onPortfolio={() => setView(AppView.CASE_STUDY)}
        />;
      case AppView.CUSTOM_APPS:
        return <CustomAppsView {...commonProps} />;
      case AppView.IA_DATA_SCIENCE:
        return <IADataScienceView {...commonProps} />;
      case AppView.PWA_APPS:
        return <PWAView {...commonProps} />;
      case AppView.UI_UX_DESIGN:
        return <UIUXDesignView {...commonProps} />;
      case AppView.BACKEND_APIS:
        return <BackendView {...commonProps} />;
      case AppView.CONTACT:
        return <ContactView {...commonProps} />;
      case AppView.WORK_WITH_US:
        return <WorkWithUsView {...commonProps} />;
      case AppView.BLOG:
        return <BlogView {...commonProps} />;
      case AppView.OPEN_SOURCE:
        return <OpenSourceView {...commonProps} />;
      case AppView.AFFILIATE_LOGIN:
        return <AffiliateLoginView {...commonProps} onSuccess={() => handleLogin('affiliate')} />;
      case AppView.AFFILIATE_DASHBOARD:
        return isAuthenticated && userRole === 'affiliate' ? 
          <AffiliateDashboard {...commonProps} onLogout={() => { setIsAuthenticated(false); setView(AppView.LANDING); }} /> : 
          <AffiliateLoginView {...commonProps} onSuccess={() => handleLogin('affiliate')} />;
      case AppView.FAQ:
        return <FAQView {...commonProps} onBack={() => setView(AppView.LANDING)} />;
      case AppView.LOGIN_CLIENT:
      case AppView.LOGIN_ADM:
        return <LoginView 
          isAdmin={view === AppView.LOGIN_ADM} 
          onSuccess={(role) => handleLogin(role)} 
          onBack={() => setView(AppView.LANDING)} 
        />;
      case AppView.ONBOARDING:
        return <OnboardingView {...commonProps} onContinue={() => setView(AppView.DISCOVERY)} onBack={() => setView(AppView.LANDING)} />;
      case AppView.DISCOVERY:
        return <DiscoveryView {...commonProps} onPortal={() => setView(AppView.PORTAL)} />;
      case AppView.PORTAL:
        return isAuthenticated ? 
          <PortalView 
            {...commonProps}
            onAdmin={() => setView(AppView.ADMIN_DASHBOARD)} 
            onLogout={() => { setIsAuthenticated(false); setView(AppView.LANDING); }} 
          /> : 
          <LoginView isAdmin={false} onSuccess={() => handleLogin('client')} onBack={() => setView(AppView.LANDING)} />;
      case AppView.ADMIN_DASHBOARD:
        return (isAuthenticated && userRole === 'admin') ? 
          <AdminDashboard 
            {...commonProps}
            onPortal={() => setView(AppView.PORTAL)} 
            onLogout={() => { setIsAuthenticated(false); setView(AppView.LANDING); }} 
          /> : 
          <LoginView isAdmin={true} onSuccess={() => handleLogin('admin')} onBack={() => setView(AppView.LANDING)} />;
      case AppView.CASE_STUDY:
        return <CaseStudyView {...commonProps} onBack={() => setView(AppView.LANDING)} />;
      default:
        return <LandingView 
          {...commonProps}
          onStart={() => setView(AppView.ONBOARDING)} 
          onViewProjects={() => setView(AppView.CASE_STUDY)} 
          onFAQ={() => setView(AppView.FAQ)} 
          onLogin={() => setView(AppView.LOGIN_CLIENT)}
          onAbout={() => setView(AppView.ABOUT)}
          onServices={() => setView(AppView.SERVICES)}
        />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {renderView()}
    </div>
  );
};

export default App;
