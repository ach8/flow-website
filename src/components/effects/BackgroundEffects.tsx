import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { colors } from '../../utils/colors';

const BackgroundEffects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div 
        className="fixed inset-0 pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.neon.blue}10, transparent 70%)`
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 0% 0%, ${colors.neon.blue}10, transparent 50%)`,
            `radial-gradient(circle at 100% 100%, ${colors.neon.green}10, transparent 50%)`,
            `radial-gradient(circle at 0% 100%, ${colors.neon.blue}10, transparent 50%)`,
            `radial-gradient(circle at 100% 0%, ${colors.neon.green}10, transparent 50%)`,
            `radial-gradient(circle at 0% 0%, ${colors.neon.blue}10, transparent 50%)`
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      />

      {/* Subtle Waves */}
      <div className="absolute inset-0 opacity-30">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              border: `1px solid ${colors.neon.blue}05`,
              borderRadius: '40%',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${colors.neon.blue}05 1px, transparent 1px),
            linear-gradient(to bottom, ${colors.neon.blue}05 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          mask: 'radial-gradient(circle at 50% 50%, black 40%, transparent)'
        }}
      />
    </div>
  );
};

export default BackgroundEffects;