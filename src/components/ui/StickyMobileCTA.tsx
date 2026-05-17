import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { colors } from '../../utils/colors';

const StickyMobileCTA: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingClick = () => {
    window.open('https://calendly.com/flow_ia/consultation', '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-sm"
        >
          <button
            onClick={handleBookingClick}
            className="w-full relative group overflow-hidden rounded-full font-bold text-white shadow-2xl"
            style={{
              background: `linear-gradient(90deg, ${colors.neon.blue}, ${colors.neon.green})`,
              boxShadow: `0 10px 30px -10px ${colors.neon.blue}80, 0 10px 30px -10px ${colors.neon.green}80`
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
            
            <div className="flex items-center justify-center gap-3 py-4 px-6 bg-gray-950/20 backdrop-blur-sm rounded-full">
              <Calendar className="w-5 h-5 text-white" />
              <span className="text-base tracking-wide">{t('cta.consult')}</span>
              <ArrowRight className="w-5 h-5 text-white animate-pulse" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
