import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguageDetection } from '../../hooks/useLanguageDetection';
import { SUPPORTED_LANGUAGES } from '../../services/languageDetection/constants';
import type { SupportedLanguage } from '../../services/languageDetection/types';

const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguageDetection();

  const handleLanguageChange = (language: SupportedLanguage) => {
    if (language !== currentLanguage) {
      changeLanguage(language);
    }
  };

  return (
    <div className="relative group">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-800"
      >
        <Globe size={16} className="text-blue-400" />
        <span className="text-sm font-medium text-gray-300">
          {SUPPORTED_LANGUAGES[currentLanguage]}
        </span>
      </motion.button>

      <div className="absolute right-0 mt-2 py-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
        {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => (
          <button
            key={code}
            onClick={() => handleLanguageChange(code as SupportedLanguage)}
            className={`
              w-full px-4 py-2 text-left text-sm
              ${currentLanguage === code ? 'text-blue-400 bg-gray-800' : 'text-gray-300 hover:bg-gray-800'}
              transition-colors
            `}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;