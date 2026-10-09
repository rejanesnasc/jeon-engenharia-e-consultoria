import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { EventItem } from '../../types';
import { RsvpModal } from '../forms/RsvpModal';

interface EventsSectionProps {
  onNotify: (title: string, message: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onNotify }) => {
  const { t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);

  const events: EventItem[] = t('events.items', { returnObjects: true }) as EventItem[];

  const handleOpenRsvp = (ev: EventItem) => {
    setSelectedEvent(ev);
  };

  const handleRsvpSuccess = (eventName: string) => {
    if (selectedEvent) {
      setRegisteredIds((prev) => [...prev, selectedEvent.id]);
    }
    onNotify(
      t('events.registered'),
      t('events.successNotification', { eventName })
    );
  };

  return (
    <section id="events" className="section-wrapper events-section">
      <div className="container">
        <div className="events-grid">
          {/* Left Column: Heading */}
          <div className="events-title-col">
            {/* <div className="badge-tag">
              <Calendar size={14} />
              <span>{t('events.badge')}</span>
            </div> */}
            <h2 className="section-heading">
              {t('events.title')}
            </h2>
            <p className="section-subheading">
              {t('events.subtitle')}
            </p>
          </div>

          {/* Right Column: Events List matching Prototype structure */}
          <div className="events-list">
            {/* ADICIONADO: .filter() para pegar apenas o event-1 */}
            {events.filter((ev) => ev.id === 'event-1').map((ev) => {
              const isRegistered = registeredIds.includes(ev.id);

              return (
                <div key={ev.id} className="event-card">
                  <div className="event-card-header">
                    <h3 className="event-title">{ev.title}</h3>
                  </div>

                  <span className="event-category">{ev.category}</span>

                  <div className="event-meta-group">
                    <div className="event-meta-item">
                      <Calendar size={15} color="#71717a" />
                      <span>{ev.date}</span>
                    </div>
                    <div className="event-meta-item">
                      <MapPin size={15} color="#71717a" />
                      <span>{ev.location}</span>
                    </div>
                  </div>

                  <p className="event-desc">{ev.description}</p>

                  {(ev.instructor || ev.seatsTotal) && (
                    <div className="event-extra-info" style={{ fontSize: '0.9rem', color: '#3f3f46' }}>
                      {ev.instructor && (
                        <p style={{ margin: '4px 0' }}>
                          <strong>{ev.speaker}</strong> {ev.instructor}
                          {ev.instructorRole && (
                            <span style={{ color: '#71717a' }}> - {ev.instructorRole}</span>
                          )}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="event-actions">
                    {isRegistered ? (
                      <button className="btn" style={{ background:'#ecfdf5', color: '#059669', cursor: 'default' }}>
                        <CheckCircle2 size={16} />
                        <span>{t('events.registered')}</span>
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleOpenRsvp(ev)}
                        className="btn btn-dark"
                        style={{ 
                          marginTop: '15px',
                          padding: '9px 20px', 
                          fontSize: '0.875rem', 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '8px',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <span>{t('events.register')}</span>
                        <ArrowRight size={15} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <RsvpModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onSuccess={handleRsvpSuccess}
      />
    </section>
  );
};
