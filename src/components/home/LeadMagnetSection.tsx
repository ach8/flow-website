import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, CheckCircle } from 'lucide-react';
import NeonButton from '../ui/NeonButton';
import NeonInput from '../ui/NeonInput';

const LeadMagnetSection: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 md:p-12 overflow-hidden border border-blue-500/30"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-gray-900 to-green-900/40" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t('leadMagnet.title')}
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                {t('leadMagnet.subtitle')}
              </p>
              <div className="flex items-center gap-2 text-sm text-green-400 justify-center md:justify-start mb-8 md:mb-0">
                <CheckCircle className="w-4 h-4" />
                <span>{t('leadMagnet.spamText')}</span>
              </div>
            </div>

            <div className="w-full md:w-[400px]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <NeonInput
                  name="email"
                  type="email"
                  placeholder={t('leadMagnet.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading' || status === 'success'}
                  color="blue"
                  className="w-full"
                />
                <NeonButton
                  type="submit"
                  color="blue"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : status === 'success' ? (
                    <>Envoyé ! <CheckCircle className="w-5 h-5" /></>
                  ) : (
                    <>{t('leadMagnet.button')} <Download className="w-5 h-5" /></>
                  )}
                </NeonButton>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
