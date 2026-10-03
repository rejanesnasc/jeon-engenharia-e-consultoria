export type Language = 'pt-BR' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyPoints: string[];
  standards: string[];
  image: string;
  tag: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  instructor?: string;
  instructorRole?: string;
  seatsTotal: number;
  seatsLeft: number;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
}
