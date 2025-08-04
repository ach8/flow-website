import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { colors } from '../../utils/colors';

const PulseLines: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-full"
          style={{
            background: `linear-gradient(to bottom, transparent, ${colors.neon.blue}15, transparent)`,
            left: `${25 * i}%`,
          }}
          animate={{
            y: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 2
          }}
        />
      ))}
    </div>
  );
};

export default PulseLines;