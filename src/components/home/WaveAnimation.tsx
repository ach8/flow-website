import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';

const WaveAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            border: `2px solid ${colors.neon.blue}`,
            borderRadius: '50%',
            opacity: 0.1,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default WaveAnimation;