import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { colors } from '../../utils/colors';

const DynamicBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animations pour l'effet "Aurore Boréale fluide"
  const blob1 = {
    animate: {
      x: ['0vw', '15vw', '-15vw', '0vw'],
      y: ['0vh', '15vh', '-10vh', '0vh'],
      scale: [1, 1.2, 0.8, 1],
    },
    transition: { duration: 25, repeat: Infinity, ease: "easeInOut" }
  };

  const blob2 = {
    animate: {
      x: ['0vw', '-20vw', '15vw', '0vw'],
      y: ['0vh', '-15vh', '15vh', '0vh'],
      scale: [1, 1.3, 0.9, 1],
    },
    transition: { duration: 30, repeat: Infinity, ease: "easeInOut" }
  };

  const blob3 = {
    animate: {
      x: ['0vw', '20vw', '-10vw', '0vw'],
      y: ['0vh', '-20vh', '10vh', '0vh'],
      scale: [1, 0.9, 1.4, 1],
    },
    transition: { duration: 35, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Base noire pure */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Mesh Gradient Animé */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 opacity-15">
          <motion.div
            className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-screen blur-[120px]"
            style={{ backgroundColor: colors.neon.blue }}
            animate={blob1.animate}
            transition={blob1.transition}
          />
          <motion.div
            className="absolute top-[30%] right-[5%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] rounded-full mix-blend-screen blur-[140px]"
            style={{ backgroundColor: colors.neon.green }}
            animate={blob2.animate}
            transition={blob2.transition}
          />
          <motion.div
            className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full mix-blend-screen blur-[150px]"
            style={{ backgroundColor: '#6366f1' }} /* Indigo / Violet */
            animate={blob3.animate}
            transition={blob3.transition}
          />
        </div>
      )}

      {/* Grille structurelle discrète */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }}
      />
    </div>
  );
};

export default DynamicBackground;
