import React from 'react';
import { useTranslation } from 'react-i18next';
import { SterritonLogo } from '../common/SterritonLogo';
import { ArrowRight } from 'lucide-react';
import darkBannerBg from '../../assets/images/dark_banner_bg.jpg';

export const CtaBannerSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-banner-section">
      <img
        src={darkBannerBg}
        alt={t('cta.imageAlt')}
        className="cta-banner-bg"
      />
      <div className="cta-banner-overlay" />

      <div className="container cta-banner-container">
        <h2 className="cta-banner-headline">
          {t('cta.headline')}
        </h2>
        <p className="cta-banner-subheadline">
          {t('cta.subheadline')}
        </p>
        <a href="#contact" className="btn btn-white" style={{ padding: '14px 34px', fontSize: '1.05rem' }}>
          <span>{t('cta.button')}</span>
          <ArrowRight size={18} />
        </a>
      </div>

      {/* Logo in bottom right corner */}
      <div className="cta-banner-logo-corner">
        <SterritonLogo size={52} variant="white" alt="JEON Logo" />
      </div>
    </section>
  );
};
