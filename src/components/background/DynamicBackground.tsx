import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { colors } from '../../utils/colors';
import ParticleField from './ParticleField';

const DynamicBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      {/* Simple grid overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${colors.neon.blue}03 1px, transparent 1px),
            linear-gradient(to bottom, ${colors.neon.blue}03 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          opacity: 0.5
        }}
      />

      {/* Particle field - already optimized */}
      {!shouldReduceMotion && <ParticleField />}

      {/* Simple ambient glow - CSS only */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, ${colors.neon.blue}08, transparent 50%),
            radial-gradient(ellipse at 80% 80%, ${colors.neon.green}08, transparent 50%)
          `
        }}
      />
    </div>
  );
};

export default DynamicBackground;
