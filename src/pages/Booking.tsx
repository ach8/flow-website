import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ParticlesBackground } from '../components/ui/ParticlesBackground';
import SEO from '../components/SEO';

const Booking: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Add Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      <SEO title="Prendre Rendez-vous | Flow IA" description="Réservez votre audit stratégique gratuit avec nos experts en IA." />
      <ParticlesBackground />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
              Réservez votre Audit
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Sélectionnez le créneau qui vous convient ci-dessous. Cet appel de 30 minutes est 100% gratuit et sans engagement.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-elevated rounded-3xl p-2 md:p-4 overflow-hidden relative min-h-[700px]"
        >
          {/* Subtle background glow */}
          <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-transparent to-green-500/10 pointer-events-none" />
          
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/flow_ia/consultation?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
