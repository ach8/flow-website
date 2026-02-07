import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { colors } from '../../utils/colors';

const InteractiveGridGlow: React.FC = () => {
  const mousePosition = useMousePosition();
  const shouldReduceMotion = useReducedMotion();

  // Skip rendering if reduced motion is preferred
  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Simple glow trail effect only - no grid cells */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 120,
          height: 120,
          left: mousePosition.x - 60,
          top: mousePosition.y - 60,
          background: `radial-gradient(circle, ${colors.neon.pink}20, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(30px)',
          zIndex: 10
        }}
      />
      
      {/* Subtle secondary glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 60,
          height: 60,
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          background: `radial-gradient(circle, ${colors.neon.blue}30, transparent 50%)`,
          borderRadius: '50%',
          filter: 'blur(15px)',
          zIndex: 10
        }}
      />
    </div>
  );
};

export default InteractiveGridGlow;
