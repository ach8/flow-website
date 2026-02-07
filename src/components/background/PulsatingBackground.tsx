import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';

interface PulsatingBackgroundProps {
  speed?: 'slow' | 'medium' | 'fast';
  intensity?: 'low' | 'medium' | 'high';
  colorPalette?: Array<string>;
  baseOpacity?: number;
}

const PulsatingBackground: React.FC<PulsatingBackgroundProps> = ({
  speed = 'medium',
  intensity = 'medium',
  colorPalette = [colors.neon.blue, colors.neon.green],
  baseOpacity = 0.15
}) => {
  const speedMap = {
    slow: 8,
    medium: 5,
    fast: 3
  };

  const intensityMap = {
    low: baseOpacity * 0.8,
    medium: baseOpacity,
    high: baseOpacity * 1.2
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary pulsating layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: colorPalette.map(color => 
            `radial-gradient(circle at 50% 50%, ${color}${Math.round(intensityMap[intensity] * 100)}, transparent 70%)`
          ),
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: speedMap[speed],
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />

      {/* Secondary pulsating layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: colorPalette.reverse().map(color => 
            `radial-gradient(circle at 50% 50%, ${color}${Math.round(intensityMap[intensity] * 80)}, transparent 60%)`
          ),
          scale: [1.05, 1, 1.05]
        }}
        transition={{
          duration: speedMap[speed] * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />

      {/* Consistent gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `linear-gradient(45deg, ${colorPalette[0]}${Math.round(intensityMap[intensity] * 100)}, ${colorPalette[1]}${Math.round(intensityMap[intensity] * 100)})`,
            `linear-gradient(45deg, ${colorPalette[1]}${Math.round(intensityMap[intensity] * 100)}, ${colorPalette[0]}${Math.round(intensityMap[intensity] * 100)})`,
            `linear-gradient(45deg, ${colorPalette[0]}${Math.round(intensityMap[intensity] * 100)}, ${colorPalette[1]}${Math.round(intensityMap[intensity] * 100)})`
          ]
        }}
        transition={{
          duration: speedMap[speed] * 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Ambient glow with consistent intensity */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colorPalette[0]}${Math.round(intensityMap[intensity] * 80)}, transparent 70%)`,
          filter: 'blur(50px)'
        }}
      />
    </div>
  );
};

export default PulsatingBackground;