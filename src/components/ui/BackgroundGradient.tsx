import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundGradientProps {
  colors: [string, string];
  className?: string;
  reversed?: boolean;
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  colors,
  className = '',
  reversed = false
}) => {
  return (
    <>
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${className}`} />
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(600px at ${reversed ? '100%' : '0%'} ${reversed ? '100%' : '0%'}, ${colors[0]}15, transparent)`,
            `radial-gradient(600px at ${reversed ? '0%' : '100%'} ${reversed ? '0%' : '100%'}, ${colors[1]}15, transparent)`,
            `radial-gradient(600px at ${reversed ? '100%' : '0%'} ${reversed ? '100%' : '0%'}, ${colors[0]}15, transparent)`
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)]"
          style={{
            backgroundSize: '4rem 4rem',
            mask: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 110%)',
            opacity: 0.2
          }}
        />
      </div>
    </>
  );
};

export default BackgroundGradient;