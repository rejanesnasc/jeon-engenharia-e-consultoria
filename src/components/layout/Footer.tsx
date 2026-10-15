import React from 'react';
import { useTranslation } from 'react-i18next';
import { SterritonLogo } from '../common/SterritonLogo';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#hero" className="nav-brand" style={{ marginBottom: '16px', display: 'inline-flex' }} aria-label="JEON Engineering">
              <SterritonLogo size={36} variant="white" alt="JEON Logo" />
            </a>
            <p className="footer-brand-desc">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="footer-title">{t('footer.quickLinks')}</h4>
            <div className="footer-links">
              <a href="#hero" className="footer-link">{t('nav.home')}</a>
              <a href="#about" className="footer-link">{t('nav.about')}</a>
              <a href="#services" className="footer-link">{t('nav.services')}</a>
              {/* <a href="#events" className="footer-link">{t('nav.events')}</a> */}
              <a href="#contact" className="footer-link">{t('nav.contact')}</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">{t('footer.legal')}</h4>
            <div className="footer-links">
            <p className="footer-link">
            <a href="https://www.linkedin.com/company/jeon-engenharia-em-consultoria/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <svg className="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
            </a>
            </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
