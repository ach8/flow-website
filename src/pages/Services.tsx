import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MessageSquare, Users, Mail, Database, Mic, Share2, ArrowRight, Check } from 'lucide-react';
import { colors } from '../utils/colors';
import NeonButton from '../components/ui/NeonButton';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const fromHero = location.state?.fromHero;

  useEffect(() => {
    if (fromHero) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [fromHero]);

  const handleConsultClick = () => {
    window.open('https://calendly.com/achraf-farhat98/consultation', '_blank');
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(600px at 0% 0%, ${colors.neon.blue}15, transparent)`,
              `radial-gradient(600px at 100% 100%, ${colors.neon.green}15, transparent)`,
              `radial-gradient(600px at 0% 0%, ${colors.neon.blue}15, transparent)`
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('services.overview.title')}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('services.overview.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <NeonButton
              color="blue"
              onClick={handleConsultClick}
              className="inline-flex items-center gap-2"
            >
              {t('cta.consult')}
              <ArrowRight className="w-5 h-5" />
            </NeonButton>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const description = t(`services.items.${service.key}.description`);
              const benefits = t(`services.items.${service.key}.benefits`, { returnObjects: true }) as string[];
              const ideal = t(`services.items.${service.key}.ideal`);

              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{
                      background: `linear-gradient(45deg, ${colors.neon.blue}10, ${colors.neon.green}10)`
                    }}
                  />
                  
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="text-blue-400 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <div className="my-6">
                      <h3 className="text-2xl font-bold mb-4">
                        {t(`services.items.${service.key}.title`)}
                      </h3>
                      
                      {description.split('\n').map((line, i) => (
                        <p key={i} className="text-gray-400 mb-2">
                          {line}
                        </p>
                      ))}
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <h4 className="text-lg font-semibold text-gray-300">
                        Avantages Clés:
                      </h4>
                      <ul className="space-y-3">
                        {benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-800">
                      <p className="text-sm text-gray-400 italic mb-4">
                        {ideal}
                      </p>
                      
                      <NeonButton 
                        color="blue" 
                        variant="outline"
                        className="w-full justify-center"
                        onClick={handleConsultClick}
                      >
                        {t('services.learnMore')}
                      </NeonButton>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(600px at 100% 0%, ${colors.neon.green}15, transparent)`,
              `radial-gradient(600px at 0% 100%, ${colors.neon.blue}15, transparent)`,
              `radial-gradient(600px at 100% 0%, ${colors.neon.green}15, transparent)`
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('cta.title')}
          </motion.h2>

          <motion.div
            className="mt-8"
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
              {t('cta.createFuture')}
              <ArrowRight className="w-5 h-5" />
            </NeonButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;