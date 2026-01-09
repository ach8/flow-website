import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { colors } from '../../utils/colors';
import ParticleField from './ParticleField';
import GeometricShapes from './GeometricShapes';
import PulsatingBackground from './PulsatingBackground';
import ContextualColorShifter from '../effects/ContextualColorShifter';
import FluidWaveAnimation from '../effects/FluidWaveAnimation';
import InteractiveGridGlow from '../effects/InteractiveGridGlow';

const DynamicBackground: React.FC = () => {
  const mousePosition = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(scrollYProgress, springConfig);
  
  const backgroundOpacity = useTransform(y, [0, 1], [1, 0.8]);
  const parallaxY = useTransform(y, [0, 1], ['0%', '20%']);

  useEffect(() => {
    const updateMouseEffect = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    window.addEventListener('mousemove', updateMouseEffect);
    return () => window.removeEventListener('mousemove', updateMouseEffect);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      {/* Pulsating background with consistent intensity */}
      <PulsatingBackground 
        speed="slow"
        intensity="medium"
        colorPalette={[colors.neon.blue, colors.neon.green]}
        baseOpacity={0.08}
      />

      {/* Interactive gradient layer */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: backgroundOpacity, y: parallaxY }}
        animate={{
          background: [
            `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${colors.neon.blue}10, transparent 70%)`,
            `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${colors.neon.green}10, transparent 70%)`,
            `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${colors.neon.blue}10, transparent 70%)`
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Geometric shapes with reduced opacity */}
      <GeometricShapes opacity={0.03} />

      {/* Particle field with reduced intensity */}
      <ParticleField opacity={0.2} />

      {/* Grid overlay with reduced opacity */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${colors.neon.blue}03 1px, transparent 1px),
            linear-gradient(to bottom, ${colors.neon.blue}03 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          mask: 'radial-gradient(circle at 50% 50%, black 40%, transparent)',
          opacity: 0.1
        }}
      />

      {/* Smooth section transitions */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hero to Value Proposition transition */}
        <motion.div
          className="absolute top-[80vh] left-0 right-0 h-[40vh]"
          style={{
            background: `linear-gradient(to bottom, 
              transparent,
              ${colors.neon.blue}05 50%,
              ${colors.neon.green}05
            )`
          }}
        />

        {/* Value Proposition to Services transition */}
        <motion.div
          className="absolute top-[160vh] left-0 right-0 h-[40vh]"
          style={{
            background: `linear-gradient(to bottom,
              ${colors.neon.green}05,
              ${colors.neon.blue}05 50%,
              transparent
            )`
          }}
        />

        {/* Services to Testimonials transition */}
        <motion.div
          className="absolute top-[240vh] left-0 right-0 h-[40vh]"
          style={{
            background: `linear-gradient(to bottom,
              transparent,
              ${colors.neon.blue}05 50%,
              ${colors.neon.green}05
            )`
          }}
        />

        {/* Testimonials to CTA transition */}
        <motion.div
          className="absolute top-[320vh] left-0 right-0 h-[40vh]"
          style={{
            background: `linear-gradient(to bottom,
              ${colors.neon.green}05,
              transparent
            )`
          }}
        />
      </div>

      {/* Global ambient glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.neon.blue}05, transparent)`,
          filter: 'blur(100px)'
        }}
      />

      {/* Contextual Color Shifter - changes colors based on scroll position */}
      <ContextualColorShifter />

      {/* Fluid Wave Animation overlay */}
      <FluidWaveAnimation />

      {/* Interactive Grid Glow - responds to mouse movement */}
      <InteractiveGridGlow />
    </div>
  );
};

export default DynamicBackground;