import React from 'react';
import { useTranslation } from 'react-i18next';
import { changeAppLanguage } from '../../i18n/i18n';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('pt') ? 'pt-BR' : 'en';

  const toggleLanguage = () => {
    const nextLang = currentLang === 'pt-BR' ? 'en' : 'pt-BR';
    changeAppLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="lang-toggle-btn"
      title={currentLang === 'pt-BR' ? t('common.switchToEn') : t('common.switchToPt')}
      aria-label={t('common.toggleLanguage')}
      id="language-switcher-btn"
    >
      <Globe size={16} />
      <span>{currentLang === 'pt-BR' ? 'PT' : 'EN'}</span>
    </button>
  );
};
