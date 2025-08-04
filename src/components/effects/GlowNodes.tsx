import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { colors } from '../../utils/colors';

const GlowNodes: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: colors.neon.blue,
            filter: 'blur(4px)',
            opacity: 0.3,
            top: `${20 * i}%`,
            left: `${25 * i}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default GlowNodes;