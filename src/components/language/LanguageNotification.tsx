import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../../services/languageDetection/constants';
import type { SupportedLanguage } from '../../services/languageDetection/types';

interface LanguageNotificationProps {
  detectedLanguage: SupportedLanguage;
  onClose: () => void;
}

const LanguageNotification: React.FC<LanguageNotificationProps> = ({
  detectedLanguage,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg px-4 py-3 flex items-center gap-3">
            <p className="text-sm text-gray-300">
              Content is now displayed in {SUPPORTED_LANGUAGES[detectedLanguage]}
            </p>
            <button
              onClick={() => {
                setIsVisible(false);
                onClose();
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageNotification;