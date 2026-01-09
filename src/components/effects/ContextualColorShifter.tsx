import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useReducedMotion } from 'framer-motion';
import { colors } from '../../utils/colors';

interface ColorPhase {
  position: number; // 0-1, scroll position
  name: string;
  colorPair: [string, string];
}

const ContextualColorShifter: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();
  const scrollTimeoutRef = useRef<number | null>(null);

  // Define color phases based on scroll position
  const phases: ColorPhase[] = [
    { position: 0, name: 'Hero', colorPair: [colors.neon.blue, colors.neon.purple] },
    { position: 0.2, name: 'Value', colorPair: [colors.neon.blue, colors.neon.green] },
    { position: 0.4, name: 'Services', colorPair: [colors.neon.green, colors.neon.pink] },
    { position: 0.65, name: 'Testimonials', colorPair: [colors.neon.pink, colors.neon.blue] },
    { position: 1, name: 'CTA', colorPair: [colors.neon.purple, colors.neon.green] }
  ];

  // Throttle scroll updates to improve performance
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      // Clear previous timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Update phase with throttling (max once per 100ms)
      scrollTimeoutRef.current = setTimeout(() => {
        const phaseIndex = Math.min(
          Math.floor(value * phases.length),
          phases.length - 1
        );
        setCurrentPhase(phaseIndex);
      }, 100);
    });

    return () => {
      unsubscribe();
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollYProgress, phases.length]);

  // Skip animation if reduced motion is preferred
  if (shouldReduceMotion) {
    return null;
  }

  const currentColors = phases[currentPhase].colorPair;
  const nextColors = phases[Math.min(currentPhase + 1, phases.length - 1)].colorPair;

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      animate={{
        background: [
          `radial-gradient(800px at 50% 50%, ${currentColors[0]}08, transparent 70%)`,
          `radial-gradient(800px at 60% 40%, ${currentColors[1]}08, transparent 70%)`,
          `radial-gradient(800px at 40% 60%, ${nextColors[0]}08, transparent 70%)`,
          `radial-gradient(800px at 50% 50%, ${currentColors[0]}08, transparent 70%)`
        ]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        filter: 'blur(40px)'
      }}
    />
  );
};

export default ContextualColorShifter;
