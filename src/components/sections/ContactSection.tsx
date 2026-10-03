import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare } from 'lucide-react';
import { ContactForm } from '../forms/ContactForm';

import portrait1 from '../../assets/images/contact_portrait_1.png';
import portrait2 from '../../assets/images/contact_portrait_2.png';

interface ContactSectionProps {
  preselectedService: string;
  onNotify: (title: string, message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService, onNotify }) => {
  const { t } = useTranslation();

  const handleFormSuccess = () => {
    onNotify(
      t('contact.form.successTitle'),
      t('contact.form.successMessage')
    );
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Heading + Contact Info List + Interactive Proposal Form */}
          <div className="contact-info-col">
            {/* <div className="badge-tag">
              <MessageSquare size={14} />
              <span>{t('contact.badge')}</span>
            </div> */}

            <h2 className="section-heading">
              {t('contact.title')}
            </h2>

            <div className="contact-info-list">
              {/*<div className="contact-item">
                <h3 className="contact-item-title">{t('contact.addressTitle')}</h3>
                <p className="contact-item-desc">{t('contact.addressText')}</p>
              </div>*/}

              <div className="contact-item">
                <h3 className="contact-item-title">{t('contact.emailTitle')}</h3>
                <p className="contact-item-desc">
                  <a href={`mailto:${t('contact.emailText')}`} style={{ textDecoration: 'underline' }}>
                    {t('contact.emailText')}
                  </a>
                </p>
              </div>

              <div className="contact-item">
                <h3 className="contact-item-title">{t('contact.phoneTitle')}</h3>
                <p className="contact-item-desc">
                  <a href={`tel:${t('contact.phoneText')}`}>
                    {t('contact.phoneText')}
                  </a>
                </p>
              </div>
            </div>

            <ContactForm
              preselectedService={preselectedService}
              onSuccess={handleFormSuccess}
            />
          </div>

          {/* Right Column: Two staggered rounded portrait photos matching the prototype layout */}
          <div className="contact-portraits-wrapper">
            <div className="portrait-card portrait-card-1">
              <img
                src={portrait1}
                alt={t('contact.portrait1Alt')}
                loading="lazy"
              />
            </div>
            <div className="portrait-card portrait-card-2">
              <img
                src={portrait2}
                alt={t('contact.portrait2Alt')}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
