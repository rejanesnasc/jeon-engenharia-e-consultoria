import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { EventsSection } from './components/sections/EventsSection';
import { CtaBannerSection } from './components/sections/CtaBannerSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/common/Toast';
import type { ToastMessage } from './types';

export const App: React.FC = () => {
  const [preselectedService, setPreselectedService] = useState('');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, title, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSelectServiceForProposal = (serviceName: string) => {
    setPreselectedService(serviceName);
  };

  return (
    <div className="app-root">
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectServiceForProposal={handleSelectServiceForProposal} />
        <EventsSection onNotify={(title, message) => addToast(title, message, 'success')} />
        <CtaBannerSection />
        <ContactSection
          preselectedService={preselectedService}
          onNotify={(title, message) => addToast(title, message, 'success')}
        />
      </main>

      <Footer />
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
};

export default App;
