import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { colors } from '../../utils/colors';

const GlowOrbs: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.neon.blue}08, transparent 70%)`
        }}
      />
    );
  }

  return (
    <motion.div
      className="absolute inset-0"
      animate={{
        background: [
          `radial-gradient(circle at 20% 20%, ${colors.neon.blue}08, transparent 50%),
           radial-gradient(circle at 80% 80%, ${colors.neon.green}08, transparent 50%)`,
          `radial-gradient(circle at 80% 20%, ${colors.neon.green}08, transparent 50%),
           radial-gradient(circle at 20% 80%, ${colors.neon.blue}08, transparent 50%)`,
          `radial-gradient(circle at 20% 20%, ${colors.neon.blue}08, transparent 50%),
           radial-gradient(circle at 80% 80%, ${colors.neon.green}08, transparent 50%)`
        ]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export default GlowOrbs;