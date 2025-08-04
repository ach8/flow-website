import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CursorEffect: React.FC = () => {
  const mousePosition = useMousePosition();

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-30"
      style={{
        background: 'radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.07), transparent 80%)',
      }}
      animate={{
        WebkitMaskImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, white, transparent)`,
        maskImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, white, transparent)`,
      }}
    />
  );
};

export default CursorEffect;