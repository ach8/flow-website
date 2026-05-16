import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import NeonButton from './NeonButton';

const MobileStickyCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-0 right-0 z-50 px-4 md:hidden flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto w-full max-w-sm">
            <NeonButton
              color="blue"
              onClick={() => navigate('/rendez-vous')}
              className="w-full flex items-center justify-center gap-2 py-4 shadow-[0_0_30px_rgba(59,130,246,0.3)] backdrop-blur-md bg-opacity-90"
            >
              <Calendar className="w-5 h-5" />
              <span className="font-semibold text-white">Réserver mon Audit</span>
            </NeonButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileStickyCta;
