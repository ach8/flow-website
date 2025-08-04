import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { colors } from '../../utils/colors';

const TechGrid: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${colors.neon.blue}05 1px, transparent 1px),
            linear-gradient(to bottom, ${colors.neon.blue}05 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent)',
          opacity: 0.2
        }}
      />

      {/* Animated Connection Lines */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: '2px',
                height: '40%',
                background: `linear-gradient(to bottom, transparent, ${colors.neon.blue}10, transparent)`,
                left: `${30 * i}%`,
                top: '0'
              }}
              animate={{
                y: ['0%', '150%'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 2
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TechGrid;