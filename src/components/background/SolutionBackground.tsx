import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { colors } from '../../utils/colors';

const SolutionBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-900/95 to-gray-950/90" />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity }}
        animate={{
          background: [
            `radial-gradient(600px at 30% 30%, ${colors.neon.blue}15, transparent 70%)`,
            `radial-gradient(600px at 70% 70%, ${colors.neon.green}15, transparent 70%)`,
            `radial-gradient(600px at 30% 30%, ${colors.neon.blue}15, transparent 70%)`
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Geometric patterns */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${colors.neon.blue}05 1px, transparent 1px),
              linear-gradient(to bottom, ${colors.neon.blue}05 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            mask: 'radial-gradient(circle at 50% 50%, black 40%, transparent)',
            opacity: 0.1
          }}
        />
      </motion.div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: `radial-gradient(circle at center, ${colors.neon.blue}10, transparent)`,
              left: `${i * 25}%`,
              top: `${i * 20}%`,
              filter: 'blur(60px)',
              opacity: 0.3
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 mix-blend-overlay opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px'
        }}
      />
    </div>
  );
};

export default SolutionBackground;