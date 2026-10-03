import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SterritonLogo } from '../common/SterritonLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#hero" className="nav-brand" aria-label="JEON Engineering">
          <SterritonLogo size={36} variant="white" alt="JEON Logo" />
        </a>

        <nav className="nav-links" aria-label={t('nav.mainNavAria')}>
          <a href="#about" className="nav-link">
            {t('nav.about')}
          </a>
          <a href="#services" className="nav-link">
            {t('nav.services')}
          </a>
          {/* <a href="#events" className="nav-link">
            {t('nav.events')}
          </a> */}
          <a href="#contact" className="nav-link">
            {t('nav.contact')}
          </a>
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher />
          <a href="#contact" className="btn btn-white" style={{ padding: '8px 18px', fontSize: '0.875rem' }}>
            <span>{t('nav.requestProposal')}</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};
