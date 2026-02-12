import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, Users, Mail, Database, Mic, Share2, ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../utils/colors';
import NeonButton from '../ui/NeonButton';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleConsultClick = () => {
    window.open('https://calendly.com/achraf-farhat98/consultation', '_blank', 'noopener,noreferrer');
  };

  const handleLearnMoreClick = () => {
    navigate('/services', { state: { fromServices: true } });
  };

  const services = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      key: 'chatbot',
      color: colors.neon.blue
    },
    {
      icon: <Users className="w-6 h-6" />,
      key: 'leads',
      color: colors.neon.green
    },
    {
      icon: <Mail className="w-6 h-6" />,
      key: 'email',
      color: colors.neon.purple
    },
    {
      icon: <Database className="w-6 h-6" />,
      key: 'crm',
      color: colors.neon.pink
    },
    {
      icon: <Mic className="w-6 h-6" />,
      key: 'voice',
      color: colors.neon.blue
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      key: 'social',
      color: colors.neon.green
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Uniform Holographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const benefits = t(`services.items.${service.key}.benefits`, { returnObjects: true }) as string[];

            return (
              <motion.div
                key={service.key}
                className="group relative h-full bg-gray-950/40 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:shadow-2xl hover:shadow-blue-900/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Circuit Scan Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent opacity-50" />
                </div>

                <div className="p-8 flex flex-col h-full relative z-10">

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                      style={{
                        background: `${service.color}15`,
                        color: service.color,
                        border: `1px solid ${service.color}20`
                      }}
                    >
                      {service.icon}
                    </div>
                    {/* Learn More Arrow */}
                    <button onClick={handleLearnMoreClick} className="text-gray-600 group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Title (Clean White) */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {t(`services.items.${service.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    {t(`services.items.${service.key}.description`)}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6" />

                  {/* Simple Benefit List */}
                  <ul className="space-y-3 mt-auto">
                    {benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <Zap size={12} style={{ color: service.color }} />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Centered CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <NeonButton
            color="blue"
            onClick={handleConsultClick}
            className="inline-flex items-center gap-2"
          >
            {t('cta.consult')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NeonButton>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;