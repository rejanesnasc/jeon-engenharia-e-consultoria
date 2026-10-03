import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import heroBg from '../../assets/images/hero.jpg';
import logoWhite from '../../assets/images/logo_white@2x.png';
import logoWhite4x from '../../assets/images/logo_white@4x.png';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero-section">
      <img
        src={heroBg}
        alt={t('hero.imageAlt')}
        className="hero-bg"
        loading="eager"
      />
      <div className="hero-overlay" />

      <div className="container hero-container">
        <h1 className="hero-title">
          <img
            src={logoWhite4x}
            srcSet={`${logoWhite} 1x, ${logoWhite4x} 2x`}
            alt="JEON"
            className="hero-logo-title"
          />
          <span className="hero-title-sub">
            {t('hero.titleLine2')}
          </span>
        </h1>

        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>

        <div className="hero-actions">
          <a href="#services" className="btn btn-white">
            <span>{t('hero.ctaExplore')}</span>
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-outline">
            <span>{t('hero.ctaContact')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
