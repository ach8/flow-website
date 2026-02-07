import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';

const GeometricShapes: React.FC = () => {
  const shapes = [
    { type: 'circle', size: '20rem', delay: 0 },
    { type: 'square', size: '15rem', delay: 2 },
    { type: 'triangle', size: '18rem', delay: 4 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute opacity-[0.03]"
          style={{
            width: shape.size,
            height: shape.size,
            border: `2px solid ${colors.neon.blue}`,
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '10%' : '0%',
            clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            left: `${(index + 1) * 25}%`,
            top: `${(index + 1) * 20}%`
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 20,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default GeometricShapes;