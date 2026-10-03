import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './locales/pt-BR.json';
import en from './locales/en.json';

const savedLanguage = localStorage.getItem('sterriton_lang') || 'pt-BR';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': { translation: ptBR },
      en: { translation: en }
    },
    lng: savedLanguage,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    }
  });

export const updateDocumentMetadata = (lang: string) => {
  document.documentElement.lang = lang;
  const title = i18n.t('seo.title');
  if (title) {
    document.title = title;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const desc = i18n.t('seo.description');
    if (desc) {
      metaDesc.setAttribute('content', desc);
    }
  }
};

i18n.on('languageChanged', (lng) => {
  updateDocumentMetadata(lng);
});

// Initialize on page load
if (typeof document !== 'undefined') {
  updateDocumentMetadata(savedLanguage);
}

export const changeAppLanguage = (lang: 'pt-BR' | 'en') => {
  i18n.changeLanguage(lang);
  localStorage.setItem('sterriton_lang', lang);
  updateDocumentMetadata(lang);
};

export default i18n;
