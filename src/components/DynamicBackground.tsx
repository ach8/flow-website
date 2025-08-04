import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { colors, getRandomColor } from '../utils/colors';

const DynamicBackground: React.FC = () => {
  const mousePosition = useMousePosition();
  const [color, setColor] = useState(colors.primary[1]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-20"
      animate={{
        background: `
          radial-gradient(
            800px circle at ${mousePosition.x}px ${mousePosition.y}px,
            ${color}15,
            transparent 40%
          )
        `,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  );
};

export default DynamicBackground;