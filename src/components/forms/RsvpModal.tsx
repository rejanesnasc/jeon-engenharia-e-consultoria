import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Calendar, MapPin, UserCheck, ArrowRight } from 'lucide-react';
import type { EventItem } from '../../types';
import imagemPalestrante from '../../assets/images/senior_transmission_line.png';

interface RsvpModalProps {
  event: EventItem | null;
  onClose: () => void;
  onSuccess: (eventName: string) => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({ event, onClose, onSuccess }) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess(event.title);
      onClose();
    }, 600);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label={t('events.modal.closeAria')}>
          <X size={20} />
        </button>

        {/* <div className="badge-tag" style={{ marginBottom: '12px' }}>
          <Calendar size={14} />
          <span>{event.category}</span>
        </div> */}

        <h3 className="section-heading" style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
          {event.title}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
            <Calendar size={16} color="#d97706" />
            <span>{event.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
            <MapPin size={16} color="#d97706" />
            <span>{event.location}</span>
          </div>
        </div>

        <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
          {event.description}
        </p>

        {/* Verifica se é o event-1 para mostrar a imagem e o link */}
        {event.id === 'event-1' ? (
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            {/* ATENÇÃO: Substitua o src abaixo pelo caminho real da sua imagem */}
            <img 
            src={imagemPalestrante} 
            alt="Palestrante Alberto Sousa" 
            style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '20px' }}
            />   
            <a
              href="https://www.inmrworldcongress.com/speaker/sousa-alberto/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
              style={{
                padding: '12px 20px',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                textDecoration: 'none',
                width: '100%'
              }}
            >
              <span>{t('events.register') || 'Acessar página do Palestrante'}</span>
              <ArrowRight size={18} />
            </a>
          </div>
        ) : (
          /* Formulário padrão para os demais eventos */
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">{t('contact.form.name')} *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                placeholder="Eng. João Silva"
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t('contact.form.email')} *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="joao@concessionaria.com.br"
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t('contact.form.company')}</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="form-input"
                placeholder="Transmissora Nacional S.A."
              />
            </div>

            <div style={{ display: 'flex', gap: '14px', marginTop: '24px' }}>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-dark"
                style={{ flex: 1 }}
              >
                {loading ? (
                  <span>{t('events.modal.submitting')}</span>
                ) : (
                  <>
                    <UserCheck size={18} />
                    <span>{t('events.modal.submit')}</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-outline"
                style={{ color: 'var(--text-primary)', borderColor: 'var(--border-light)' }}
              >
                <span>{t('events.modal.cancel')}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};