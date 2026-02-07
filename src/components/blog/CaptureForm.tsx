import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { colors } from '../../utils/colors';
import NeonButton from '../ui/NeonButton';
import NeonInput from '../ui/NeonInput';

interface CaptureFormProps {
  title?: string;
  subtitle?: string;
  magnetId?: string; // Identifiant du PDF/Ressource (ex: "SDR-IA-2026")
}

const CaptureForm: React.FC<CaptureFormProps> = ({ 
  title = "Téléchargez le Rapport Complet", 
  subtitle = "Recevez l'analyse détaillée + les scripts IA directement par email.",
  magnetId = "DEFAULT"
}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError(t('contact.errors.email.invalid'));
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.send(
        'service_n8t2rwd',
        'template_fqmt338',
        {
          title: `LEAD MAGNET: ${magnetId}`, // Sujet Spécifique
          message: `Nouvelle demande de téléchargement pour : ${magnetId}`,
          email: email,
          name: "Prospect (Lead Magnet)",
          // Variables standard pour ton template
          user_email: email,
          reply_to: email,
          from_name: "Prospect (Lead Magnet)",
          user_name: "Prospect (Lead Magnet)"
        },
        'meHFxlBf0cePOYnPj'
      );

      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      console.error(err);
      setError(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative my-12 p-8 rounded-2xl border border-gray-700 overflow-hidden"
      style={{
        background: `linear-gradient(145deg, ${colors.neon.purple}10, ${colors.neon.blue}10)`
      }}
    >
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gray-900 rounded-full border border-gray-700 shadow-[0_0_20px_rgba(0,210,255,0.3)]">
            <Download className="w-8 h-8 text-cyan-400" />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-8">{subtitle}</p>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-lg flex items-center justify-center gap-3"
            >
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">C'est envoyé ! Vérifiez votre boîte mail.</span>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              <NeonInput
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                color="purple"
                className="text-center"
                aria-label="Email address"
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
              
              <NeonButton 
                type="submit" 
                color="purple" 
                className="w-full flex justify-center items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Envoi en cours..." 
                ) : (
                  <>
                    Recevoir le Rapport PDF <Send className="w-4 h-4" />
                  </>
                )}
              </NeonButton>
              <p className="text-xs text-gray-500 mt-4">
                🔒 Vos données sont sécurisées. Pas de spam, promis.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CaptureForm;