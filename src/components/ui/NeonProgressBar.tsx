import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';

interface NeonProgressBarProps {
  progress: number;
  color?: keyof typeof colors.neon;
}

const NeonProgressBar: React.FC<NeonProgressBarProps> = ({
  progress,
  color = 'blue'
}) => {
  const neonColor = colors.neon[color];

  return (
    <div 
      className="h-2 bg-gray-800 rounded-full overflow-hidden"
      style={{
        boxShadow: `0 0 5px ${neonColor}`
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
        className="h-full rounded-full neon-pulse"
        style={{
          '--neon-color': neonColor,
          backgroundColor: neonColor
        }}
      />
    </div>
  );
};

export default NeonProgressBar;