import React from 'react';
import { useTranslation } from 'react-i18next';
import { X, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  serviceKey: 'asset_management' | 'owners_engineering' | 'fat_inspection' | 'due_diligence' | null;
  onClose: () => void;
  onSelectServiceForProposal: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  serviceKey,
  onClose,
  onSelectServiceForProposal
}) => {
  const { t } = useTranslation();

  if (!serviceKey) return null;

  const title = t(`services.items.${serviceKey}.title`);
  const fullDesc = t(`services.items.${serviceKey}.fullDesc`);
  const handleRequestQuote = () => {
    onSelectServiceForProposal(serviceKey);
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label={t('services.modal.closeAria')}>
          <X size={20} />
        </button>

        {/* <div className="badge-tag" style={{ marginBottom: '12px' }}>
          <Award size={14} />
          <span>{t('services.modal.badge')}</span>
        </div> */}

        <h3 className="section-heading" style={{ fontSize: '1.85rem', marginBottom: '16px' }}>
          {title}
        </h3>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
          {fullDesc}
        </p>

        {/* {standards && standards.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '10px' }}>
              {t('services.modal.standardsTitle')}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {standards.map((std, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'var(--bg-subtle)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}
                >
                  {std}
                </span>
              ))}
            </div>
          </div>
        )} */}

        {/* {deliverables && deliverables.length > 0 && (
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '12px' }}>
              {t('services.modal.deliverablesTitle')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {deliverables.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={18} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )} */}

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <button onClick={handleRequestQuote} className="btn btn-dark" style={{ flex: 1 }}>
            <span>{t('services.modal.requestProposal')}</span>
            <ArrowRight size={18} />
          </button>
          <button onClick={onClose} className="btn btn-outline" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-light)' }}>
            <span>{t('services.modal.close')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
