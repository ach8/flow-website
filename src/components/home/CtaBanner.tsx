import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { colors } from '../../utils/colors';
import NeonButton from '../ui/NeonButton';

const CtaBanner: React.FC = () => {
  const { t } = useTranslation();

  const handleConsultClick = () => {
    window.open('https://calendly.com/achraf-farhat98/consultation', '_blank');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            `linear-gradient(45deg, ${colors.neon.blue}15, ${colors.neon.green}15)`,
            `linear-gradient(45deg, ${colors.neon.green}15, ${colors.neon.blue}15)`,
            `linear-gradient(45deg, ${colors.neon.blue}15, ${colors.neon.green}15)`
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl font-bold mb-8"
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
            onClick={handleConsultClick}
          >
            {t('cta.button')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;