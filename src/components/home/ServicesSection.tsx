import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, Users, Mail, Database, Mic, Share2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../utils/colors';
import NeonButton from '../ui/NeonButton';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const navigate = useNavigate();

  const handleConsultClick = () => {
    window.open('https://calendly.com/achraf-farhat98/consultation', '_blank');
  };

  const handleLearnMoreClick = () => {
    navigate('/services', { state: { fromServices: true } });
  };

  const services = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      key: 'chatbot'
    },
    {
      icon: <Users className="w-8 h-8" />,
      key: 'leads'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      key: 'email'
    },
    {
      icon: <Database className="w-8 h-8" />,
      key: 'crm'
    },
    {
      icon: <Mic className="w-8 h-8" />,
      key: 'voice'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      key: 'social'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(600px at 30% 30%, ${colors.neon.blue}15, transparent 70%)`,
            `radial-gradient(600px at 70% 70%, ${colors.neon.green}15, transparent 70%)`,
            `radial-gradient(600px at 30% 30%, ${colors.neon.blue}15, transparent 70%)`
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          style={{ opacity }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{
                  background: `linear-gradient(45deg, ${colors.neon.blue}10, ${colors.neon.green}10)`
                }}
              />
              
              <div className="relative z-10">
                <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4">{t(`services.items.${service.key}.title`)}</h3>
                <p className="text-gray-400 mb-6">{t(`services.items.${service.key}.description`)}</p>
                
                <motion.button
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
                  onClick={handleLearnMoreClick}
                  whileHover={{ x: 5 }}
                >
                  {t('services.learnMore')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
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