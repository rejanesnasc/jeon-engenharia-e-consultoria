import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutPhoto1 from '../../assets/images/about_substation.jpg';
import aboutPhoto2 from '../../assets/images/about_engineer.jpg';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* <div className="badge-tag">
          <ShieldCheck size={14} />
          <span>{t('about.badge')}</span>
        </div> */}

        <h2 className="section-heading">
          {t('about.title')}
        </h2>

        <div className="about-grid">
          {/* Two rounded rectangle images side by side - matching prototype */}
          <div className="about-photos-container">
            <div className="about-photo-card">
              <img
                src={aboutPhoto1}
                alt={t('about.photo1Alt')}
                loading="lazy"
              />
            </div>
            <div className="about-photo-card">
              <img
                src={aboutPhoto2}
                alt={t('about.photo2Alt')}
                loading="lazy"
              />
            </div>
          </div>

          {/* Institutional technical description */}
          <div className="about-content">
            <p className="about-text">
              {t('about.description')}
            </p>
            <p className="about-text">
              {t('about.secondaryText')}
            </p>
            <p className="about-text">
              {t('about.thirdText')}
            </p>
          </div>
        </div>
        <div className="about-stats">
              <div className="stat-item">
                <span className="stat-value">{t('about.stats.metric1.value')}</span>
                <span className="stat-label">{t('about.stats.metric1.label')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{t('about.stats.metric2.value')}</span>
                <span className="stat-label">{t('about.stats.metric2.label')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{t('about.stats.metric3.value')}</span>
                <span className="stat-label">{t('about.stats.metric3.label')}</span>
              </div>
            </div>
      </div>
    </section>
  );
};
