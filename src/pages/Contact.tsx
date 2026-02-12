import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { colors } from '../utils/colors';
import NeonButton from '../components/ui/NeonButton';
import NeonInput from '../components/ui/NeonInput';
import NeonTextarea from '../components/ui/NeonTextarea';
import SEO from '../components/SEO'; // Import SEO component

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('contact.errors.firstName');
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t('contact.errors.lastName');
    }

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
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_n8t2rwd',
        'template_fqmt338',
        {
          // Variables pour ton template actuel (vu sur screenshot)
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          title: `Message de ${formData.firstName}`, // Pour le sujet {{title}}
          message: formData.message,

          // Variables de secours/standards
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          user_name: `${formData.firstName} ${formData.lastName}`,
          user_email: formData.email,
          reply_to: formData.email,
        },
        'meHFxlBf0cePOYnPj'
      );

      setIsSuccess(true);
      setIsError(false);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission failed:', error);
      setIsError(true);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : t('contact.form.error') || 'Failed to send your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Auto-dismiss success message
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  // Auto-dismiss error message
  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => setIsError(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [isError]);

  return (
    <div className="min-h-screen py-20">
      <SEO 
        title={t('nav.contact')}
        description={t('contact.subtitle')}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('contact.title')}
          </h1>
          <p className="text-gray-400 text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <NeonInput
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                label={t('contact.form.firstName') + ' *'}
                placeholder="John"
                color="blue"
                error={errors.firstName}
                showSuccess={!!formData.firstName && !errors.firstName}
              />

              <NeonInput
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                label={t('contact.form.lastName') + ' *'}
                placeholder="Doe"
                color="blue"
                error={errors.lastName}
                showSuccess={!!formData.lastName && !errors.lastName}
              />
            </div>

            <NeonInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              label={t('contact.form.email') + ' *'}
              placeholder="you@example.com"
              color="blue"
              error={errors.email}
              showSuccess={!!formData.email && !errors.email}
            />

            <NeonTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              label={t('contact.form.message') + ' *'}
              placeholder="Tell us about your project and goals..."
              color="blue"
              error={errors.message}
              maxLength={500}
              characterCount={true}
              rows={6}
            />

            <div className="flex justify-center pt-4">
              <NeonButton
                type="submit"
                color="blue"
                disabled={isSubmitting}
                ariaLabel={isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    {t('contact.form.submit')}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </NeonButton>
            </div>
          </form>
        </motion.div>

        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-8 right-8 bg-green-500/20 border border-green-500/50 text-green-400 px-6 py-4 rounded-lg flex items-center gap-3"
              role="alert"
              aria-live="polite"
            >
              <CheckCircle className="w-5 h-5" />
              <span>{t('contact.form.success')}</span>
              <button
                onClick={() => setIsSuccess(false)}
                className="ml-4 text-green-400 hover:text-green-300 transition-colors"
                aria-label="Dismiss success message"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
          {isError && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-8 right-8 bg-red-500/20 border border-red-500/50 text-red-400 px-6 py-4 rounded-lg flex items-center gap-3 max-w-sm"
              role="alert"
              aria-live="polite"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium">{t('contact.form.error') || 'Error sending message'}</p>
                <p className="text-sm mt-1 text-red-300">{errorMessage}</p>
              </div>
              <button
                onClick={() => setIsError(false)}
                className="ml-4 text-red-400 hover:text-red-300 transition-colors flex-shrink-0"
                aria-label="Dismiss error message"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;