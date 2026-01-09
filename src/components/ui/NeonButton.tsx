import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';

interface NeonButtonProps {
  children: React.ReactNode;
  color?: keyof typeof colors.neon;
  variant?: 'solid' | 'outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  color = 'blue',
  variant = 'solid',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel
}) => {
  const neonColor = colors.neon[color];
  
  return (
    <motion.button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98, y: 0 } : {}}
      className={`
        relative px-6 py-3 rounded-lg font-medium
        transition-all duration-300
        ${variant === 'solid' 
          ? `bg-${color}-500/10 hover:bg-${color}-500/20` 
          : 'bg-transparent'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      style={{
        '--neon-color': neonColor,
        boxShadow: disabled 
          ? 'none' 
          : `0 0 10px ${neonColor}`,
        border: variant === 'outline' ? `2px solid ${neonColor}` : 'none',
        color: neonColor
      } as React.CSSProperties}
      onClick={onClick}
    >
      {/* Hover glow overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        whileHover={{ opacity: 0.2 }}
        style={{
          background: `radial-gradient(circle at center, ${neonColor}20, transparent)`,
          filter: 'blur(8px)',
        }}
      />
      
      {/* Text with glow effect */}
      <motion.span
        className="relative z-10 flex items-center justify-center gap-2"
        whileHover={{ textShadow: `0 0 8px ${neonColor}` }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default NeonButton;