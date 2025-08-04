import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { colors } from '../utils/colors';
import type { SupportedLanguage } from '../utils/constants';

const LanguageToggle: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage: SupportedLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    changeLanguage(newLanguage);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-800"
      style={{
        '--neon-color': colors.neon.blue,
        '&:hover': {
          borderColor: colors.neon.blue,
          boxShadow: `0 0 10px ${colors.neon.blue}`
        }
      }}
    >
      <Globe size={16} style={{ color: colors.neon.blue }} />
      <span className="text-sm font-medium text-gray-300">
        {currentLanguage.toUpperCase()}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;