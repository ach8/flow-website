import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { colors } from '../utils/colors';
import NeonButton from '../components/ui/NeonButton';

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
        'service_xxxxxxx', // Replace with your EmailJS service ID
        'template_xxxxxxx', // Replace with your EmailJS template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        'your_public_key' // Replace with your EmailJS public key
      );

      setIsSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission failed:', error);
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

  return (
    <div className="min-h-screen py-20">
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
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.firstName')} *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-3 rounded-lg bg-gray-800 border
                    focus:outline-none focus:ring-2 transition-all duration-300
                    ${errors.firstName 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500/50'}
                  `}
                />
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.lastName')} *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-3 rounded-lg bg-gray-800 border
                    focus:outline-none focus:ring-2 transition-all duration-300
                    ${errors.lastName 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500/50'}
                  `}
                />
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                {t('contact.form.email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`
                  w-full px-4 py-3 rounded-lg bg-gray-800 border
                  focus:outline-none focus:ring-2 transition-all duration-300
                  ${errors.email 
                    ? 'border-red-500 focus:ring-red-500/50' 
                    : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500/50'}
                `}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                {t('contact.form.message')} *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`
                  w-full px-4 py-3 rounded-lg bg-gray-800 border
                  focus:outline-none focus:ring-2 transition-all duration-300
                  ${errors.message 
                    ? 'border-red-500 focus:ring-red-500/50' 
                    : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500/50'}
                `}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="flex justify-center pt-4">
              <NeonButton
                type="submit"
                color="blue"
                disabled={isSubmitting}
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
            >
              <CheckCircle className="w-5 h-5" />
              {t('contact.form.success')}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;