import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';

interface NeonIconProps {
  icon: React.ReactNode;
  color?: keyof typeof colors.neon;
  href?: string;
  onClick?: () => void;
}

const NeonIcon: React.FC<NeonIconProps> = ({
  icon,
  color = 'blue',
  href,
  onClick
}) => {
  const neonColor = colors.neon[color];
  const Component = href ? 'a' : motion.button;
  
  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      className="p-2 rounded-full transition-all duration-300 neon-pulse"
      style={{
        '--neon-color': neonColor,
        color: neonColor
      }}
    >
      {icon}
    </Component>
  );
};

export default NeonIcon;