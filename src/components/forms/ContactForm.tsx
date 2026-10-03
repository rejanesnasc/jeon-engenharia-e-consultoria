import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle } from 'lucide-react';
import type { ContactFormData } from '../../types';

interface ContactFormProps {
  preselectedService?: string;
  onSuccess: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ preselectedService = '', onSuccess }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: preselectedService,
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      const serviceMap: Record<string, string> = {
        asset_management: 'asset_management',
        owners_engineering: 'owners_engineering',
        fat_inspection: 'fat_inspection',
        due_diligence: 'due_diligence',
        'Gestão Estratégica e Saúde Operacional': 'asset_management',
        'Auditoria Técnica e Eng. do Proprietário': 'owners_engineering',
        'Inspeção de Fábrica e Garantia FAT': 'fat_inspection',
        'Due Diligence Técnica e M&A': 'due_diligence',
      };

      let matchedKey = serviceMap[preselectedService] || preselectedService;
      if (!serviceMap[matchedKey]) {
        if (preselectedService.includes('Gestão') || preselectedService.includes('Asset')) matchedKey = 'asset_management';
        else if (preselectedService.includes('Auditoria') || preselectedService.includes('Owner')) matchedKey = 'owners_engineering';
        else if (preselectedService.includes('Inspeção') || preselectedService.includes('FAT') || preselectedService.includes('Factory')) matchedKey = 'fat_inspection';
        else if (preselectedService.includes('Due Diligence')) matchedKey = 'due_diligence';
      }

      setFormData((prev) => ({ ...prev, service: matchedKey }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);

    // Número do WhatsApp do Engenheiro (ex: 55 + DDD + número)
    const whatsappNumber = "5521971527743";

    // Busca o nome do serviço no idioma do site
    const serviceLabels: Record<string, string> = {
      asset_management: t('contact.form.services.asset_management'),
      owners_engineering: t('contact.form.services.owners_engineering'),
      fat_inspection: t('contact.form.services.fat_inspection'),
      due_diligence: t('contact.form.services.due_diligence'),
    };

    const selectedServiceLabel = serviceLabels[formData.service] || formData.service || 'Não informado';

    // Monta a mensagem enviada no WhatsApp
    const textMessage = 
      `*Nova Solicitação Técnica - JEON*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Empresa:* ${formData.company || 'Não informada'}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Telefone:* ${formData.phone || 'Não informado'}\n` +
      `*Serviço:* ${selectedServiceLabel}\n` +
      `*Mensagem:* ${formData.message || 'Sem mensagem adicional'}`;

    // Abre a conversa no WhatsApp
    const encodedMessage = encodeURIComponent(textMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      onSuccess();
    }, 700);
  };

  if (submitted) {
    return (
      <div className="contact-form-box" style={{ textAlign: 'center', padding: '40px 24px' }}>
        <CheckCircle size={48} color="#059669" style={{ margin: '0 auto 16px auto' }} />
        <h3 className="form-title" style={{ color: '#059669', marginBottom: '10px' }}>
          {t('contact.form.successTitle')}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px' }}>
          {t('contact.form.successMessage')}
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
          }}
          className="btn btn-dark"
          style={{ margin: '0 auto' }}
        >
          {t('contact.form.reset')}
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-box">
      <h3 className="form-title">
        {t('contact.form.title')}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">{t('contact.form.name')} *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="form-input"
            placeholder={t('contact.form.namePlaceholder')}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div className="form-group">
            <label className="form-label">{t('contact.form.company')}</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="form-input"
              placeholder={t('contact.form.companyPlaceholder')}
            />
          </div>

          <div className="form-group">
            <label className="form-label">{t('contact.form.phone')}</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="form-input"
              placeholder={t('contact.form.phonePlaceholder')}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">{t('contact.form.email')} *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="form-input"
            placeholder={t('contact.form.emailPlaceholder')}
          />
        </div>

        <div className="form-group">
          <label className="form-label">{t('contact.form.service')}</label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="form-select"
          >
            <option value="">{t('contact.form.servicePlaceholder')}</option>
            <option value="asset_management">{t('contact.form.services.asset_management')}</option>
            <option value="owners_engineering">{t('contact.form.services.owners_engineering')}</option>
            <option value="fat_inspection">{t('contact.form.services.fat_inspection')}</option>
            <option value="due_diligence">{t('contact.form.services.due_diligence')}</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">{t('contact.form.message')}</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="form-textarea"
            placeholder={t('contact.form.messagePlaceholder')}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-dark"
          style={{ width: '100%', marginTop: '8px' }}
        >
          {loading ? (
            <span>{t('contact.form.sending')}</span>
          ) : (
            <>
              <Send size={16} />
              <span>{t('contact.form.submit')}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
