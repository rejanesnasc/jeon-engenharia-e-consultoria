import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Info, AlertTriangle, X } from 'lucide-react';
import type { ToastMessage } from '../../types';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  const { t } = useTranslation();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast-item">
          {toast.type === 'success' && <CheckCircle size={20} color="#10b981" />}
          {toast.type === 'info' && <Info size={20} color="#38bdf8" />}
          {toast.type === 'error' && <AlertTriangle size={20} color="#f43f5e" />}

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{toast.title}</span>
            <span style={{ fontSize: '0.825rem', color: '#d1d5db' }}>{toast.message}</span>
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            style={{ marginLeft: 'auto', color: '#9ca3af', padding: '4px' }}
            aria-label={t('common.closeNotification')}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};
