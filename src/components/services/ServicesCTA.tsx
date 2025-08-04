import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import NeonButton from '../ui/NeonButton';
import { colors } from '../../utils/colors';

const ServicesCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
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
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{
              background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('cta.title')}
          </h2>
          
          <NeonButton 
            color="blue"
            className="inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            {t('cta.button')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;