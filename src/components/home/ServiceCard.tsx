import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';
import { useTranslation } from 'react-i18next';
import NeonButton from '../ui/NeonButton';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{
          background: `linear-gradient(45deg, ${colors.neon.blue}10, ${colors.neon.green}10)`
        }}
      />
      
      <div className="relative z-10 space-y-4">
        <div 
          className="text-3xl transition-colors duration-300"
          style={{ color: colors.neon.blue }}
        >
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
        
        <NeonButton 
          color="blue" 
          variant="outline"
          className="mt-4 w-full justify-center"
        >
          {t('hero.cta.learn')}
        </NeonButton>
      </div>
    </motion.div>
  );
};

export default ServiceCard;