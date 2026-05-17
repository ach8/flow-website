import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../../utils/colors';

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulons un temps de chargement d'infrastructure et d'assets (ex: 1.5s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay pointer-events-none" />
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                `radial-gradient(circle at 50% 50%, ${colors.neon.blue}15 0%, transparent 50%)`,
                `radial-gradient(circle at 50% 50%, ${colors.neon.green}15 0%, transparent 50%)`,
                `radial-gradient(circle at 50% 50%, ${colors.neon.blue}15 0%, transparent 50%)`
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Logo Animation */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8 relative"
            >
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                FLOW IA
              </h1>
              {/* Animated Glow Behind Text */}
              <motion.div
                className="absolute inset-0 bg-blue-500 blur-3xl -z-10"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Loading Bar */}
            <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
            <motion.p 
              className="mt-4 text-xs font-mono text-gray-500 tracking-widest uppercase"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Initialisation du système...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
