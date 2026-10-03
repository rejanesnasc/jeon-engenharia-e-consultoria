import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Wrench } from 'lucide-react';
import { ServiceDetailModal } from '../forms/ServiceDetailModal';

import imgAssetMgmt from '../../assets/images/service_asset_mgmt.jpg';
import imgAuditEng from '../../assets/images/service_audit_eng.jpg';
import imgFatTest from '../../assets/images/service_fat_test.jpg';
import imgDueDiligence from '../../assets/images/service_team_proto.jpg';

interface ServicesSectionProps {
  onSelectServiceForProposal: (serviceName: string) => void;
}

type ServiceKey = 'asset_management' | 'owners_engineering' | 'fat_inspection' | 'due_diligence';

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForProposal }) => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<ServiceKey | null>(null);

  const servicesData: { key: ServiceKey; image: string }[] = [
    {
      key: 'asset_management',
      image: imgAssetMgmt
    },
    {
      key: 'owners_engineering',
      image: imgAuditEng
    },
    {
      key: 'fat_inspection',
      image: imgFatTest
    },
    {
      key: 'due_diligence',
      image: imgDueDiligence
    }
  ];

  return (
    <section id="services" className="section-wrapper services-section">
      <div className="container">
        <div className="services-header">
          {/* <div className="badge-tag">
            <Wrench size={14} />
            <span>{t('services.badge')}</span>
          </div> */}
          <h2 className="section-heading">
            {t('services.title')}
          </h2>
          <p className="section-subheading" style={{ maxWidth: '720px' }}>
            {t('services.subtitle')}
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((item) => (
            <div
              key={item.key}
              className="service-card"
              onClick={() => setSelectedService(item.key)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedService(item.key)}
              aria-label={t('services.viewDetailsAria', { service: t(`services.items.${item.key}.title`) })}
            >
              <img
                src={item.image}
                alt={t(`services.items.${item.key}.title`)}
                className="service-bg"
                loading="lazy"
              />
              <div className="service-overlay" />
              <div className="service-content">
                <h3 className="service-title">
                  {t(`services.items.${item.key}.title`)}
                </h3>
                <p className="service-desc">
                  {t(`services.items.${item.key}.shortDesc`)}
                </p>
                <span className="service-btn">
                  <span>{t('services.viewDetails')}</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ServiceDetailModal
        serviceKey={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForProposal={onSelectServiceForProposal}
      />
    </section>
  );
};
