import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';

interface NeonButtonProps {
  children: React.ReactNode;
  color?: keyof typeof colors.neon;
  variant?: 'solid' | 'outline';
  onClick?: () => void;
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  color = 'blue',
  variant = 'solid',
  onClick,
  className = ''
}) => {
  const neonColor = colors.neon[color];
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative px-6 py-3 rounded-lg font-medium
        transition-all duration-300
        ${variant === 'solid' 
          ? `bg-${color}-500/10 hover:bg-${color}-500/20` 
          : 'bg-transparent'}
        ${className}
      `}
      style={{
        '--neon-color': neonColor,
        boxShadow: `0 0 10px ${neonColor}`,
        border: variant === 'outline' ? `2px solid ${neonColor}` : 'none',
        color: neonColor
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default NeonButton;