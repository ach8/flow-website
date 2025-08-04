import React from 'react';
import { useReducedMotion } from 'framer-motion';
import TechGrid from './TechGrid';
import GlowOrbs from './GlowOrbs';
import PulseLines from './PulseLines';
import GlowNodes from './GlowNodes';

interface BackgroundSystemProps {
  variant?: 'default' | 'minimal';
  intensity?: 'low' | 'medium' | 'high';
}

const BackgroundSystem: React.FC<BackgroundSystemProps> = ({
  variant = 'default',
  intensity = 'medium'
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-gray-950" />
      
      {/* Animated Elements */}
      {variant === 'default' && !shouldReduceMotion && (
        <>
          <GlowOrbs />
          <TechGrid />
          <PulseLines />
          <GlowNodes />
        </>
      )}
      
      {/* Static Fallback for Reduced Motion */}
      {shouldReduceMotion && (
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.05), transparent 70%)'
          }}
        />
      )}
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-noise"
        style={{
          backgroundSize: shouldReduceMotion ? '64px 64px' : '128px 128px'
        }}
      />
    </div>
  );
};

export default BackgroundSystem;