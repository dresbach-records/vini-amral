
export enum AppView {
  LANDING = 'landing',
  ABOUT = 'about',
  SERVICES = 'services',
  CASE_STUDY = 'case_study',
  FAQ = 'faq',
  LOGIN_CLIENT = 'login_client',
  LOGIN_ADM = 'login_adm',
  ONBOARDING = 'onboarding',
  DISCOVERY = 'discovery',
  PORTAL = 'portal',
  ADMIN_DASHBOARD = 'admin_dashboard',
  ADMIN_LOGS = 'admin_logs',
  CUSTOM_APPS = 'custom_apps',
  IA_DATA_SCIENCE = 'ia_data_science',
  PWA_APPS = 'pwa_apps',
  UI_UX_DESIGN = 'ui_ux_design',
  BACKEND_APIS = 'backend_apis',
  CONTACT = 'contact',
  WORK_WITH_US = 'work_with_us',
  BLOG = 'blog',
  OPEN_SOURCE = 'open_source',
  AFFILIATE_LOGIN = 'affiliate_login',
  AFFILIATE_DASHBOARD = 'affiliate_dashboard'
}

export type Language = 'pt' | 'en' | 'es';

export interface ProjectGoal {
  id: string;
  text: string;
  completed: boolean;
}

export interface ArchitectureNode {
  category: string;
  technology: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface Lead {
  id: string;
  name: string;
  company: string;
  complexity: 'Simples' | 'Médio' | 'Complexo';
  status: string;
  date: string;
  avatar: string;
  source: 'Web' | 'App Store' | 'Play Store';
}

export interface LogEntry {
  id: string;
  timestamp: string;
  service: string;
  status: 'SUCCESS' | 'ERROR' | 'WARN';
  message: string;
}
