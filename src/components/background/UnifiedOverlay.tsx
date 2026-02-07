import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { colors } from '../../utils/colors';

const UnifiedOverlay: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Create a smooth overlay that transitions through the page
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.5, 0.3, 0.3, 0.5]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 1,
        opacity: overlayOpacity,
        background: `linear-gradient(
          180deg,
          ${colors.neon.blue}08 0%,
          ${colors.neon.green}06 25%,
          ${colors.neon.green}06 50%,
          ${colors.neon.blue}08 75%,
          ${colors.neon.purple}08 100%
        )`
      }}
    />
  );
};

export default UnifiedOverlay;
