import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ParticlesBackground } from '../components/ui/ParticlesBackground';
import NeonInput from '../components/ui/NeonInput';
import NeonTextarea from '../components/ui/NeonTextarea';
import NeonButton from '../components/ui/NeonButton';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleConsultClick = () => {
    window.open('https://calendly.com/flow_ia/consultation', '_blank', 'noopener,noreferrer');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = t('contact.errors.firstName');
    if (!formData.lastName.trim()) newErrors.lastName = t('contact.errors.lastName');

    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.email.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.errors.email.invalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.message.required');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.errors.message.tooShort');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      await emailjs.send(
        'service_n8t2rwd',
        'template_fqmt338',
        {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          title: `Message de ${formData.firstName}`,
          message: formData.message,
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          user_name: `${formData.firstName} ${formData.lastName}`,
          user_email: formData.email,
          reply_to: formData.email,
        },
        'meHFxlBf0cePOYnPj' // It is safe to expose public key in frontend
      );

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });

      // Auto reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      // Auto reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: "+33 7 67 51 54 97",
      color: "green"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Bureaux",
      details: "France",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      <SEO title={t('nav.contact')} description={t('contact.subtitle')} />
      <ParticlesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
              {t('contact.title')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Column: Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="card-elevated rounded-3xl p-8 relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-6">Lançons votre projet</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Notre équipe d'experts analyse vos besoins et conçoit l'architecture IA parfaitement adaptée à vos objectifs de croissance.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-${info.color}-500/10 border border-${info.color}-500/20 text-${info.color}-400 shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">{info.title}</div>
                      <div className="text-gray-400 text-sm">{info.details}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">Préférez-vous un appel ?</h4>
                <button 
                  onClick={handleConsultClick}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                >
                  <span className="relative flex h-3 w-3 mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Prendre Rendez-vous
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="card-elevated rounded-3xl p-8 md:p-10 relative">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <NeonInput
                      label={t('contact.form.firstName')}
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={errors.firstName}
                      color="blue"
                      disabled={status === 'sending'}
                    />
                  </div>
                  <div>
                    <NeonInput
                      label={t('contact.form.lastName')}
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                      color="blue"
                      disabled={status === 'sending'}
                    />
                  </div>
                </div>

                <div>
                  <NeonInput
                    label={t('contact.form.email')}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    color="blue"
                    disabled={status === 'sending'}
                  />
                </div>

                <div>
                  <NeonTextarea
                    label={t('contact.form.message')}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    rows={5}
                    color="blue"
                    disabled={status === 'sending'}
                  />
                </div>

                {/* Form Status Messages */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <p>{t('contact.form.success')}</p>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p>{t('contact.form.error')}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-4">
                  <NeonButton
                    type="submit"
                    color="blue"
                    className="w-full flex items-center justify-center gap-2"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.form.submit')}
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </NeonButton>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;