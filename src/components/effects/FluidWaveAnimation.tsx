import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { colors } from '../../utils/colors';

const FluidWaveAnimation: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Skip complex SVG animation if reduced motion is preferred
  if (shouldReduceMotion) {
    return null;
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Single optimized wave layer instead of 3 */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        style={{
          opacity: 0.12
        }}
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.neon.blue} />
            <stop offset="100%" stopColor={colors.neon.green} stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0,200 Q300,150 600,200 T1200,200 L1200,400 L0,400 Z"
          fill="url(#wave-gradient)"
          animate={{
            d: [
              "M0,200 Q300,150 600,200 T1200,200 L1200,400 L0,400 Z",
              "M0,200 Q300,180 600,200 T1200,200 L1200,400 L0,400 Z",
              "M0,200 Q300,150 600,200 T1200,200 L1200,400 L0,400 Z"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </svg>
    </div>
  );
};

export default FluidWaveAnimation;
